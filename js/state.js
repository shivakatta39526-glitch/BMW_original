/**
 * BMW Application State Manager
 * Centralized, observable, and reactive state management.
 */

window.BMW_APP = window.BMW_APP || {};

(function() {
    'use strict';

    const listeners = new Map();

    const initialState = {
        currentFilter: 'all',
        selectedVehicleId: 'm2',
        configurator: {
            vehicleId: 'm2',
            colorName: 'Alpine White',
            wheelId: 'w1',
            interiorId: 'i1',
            activeStep: 'model', // 'model' | 'exterior' | 'wheels' | 'interior' | 'summary'
            calculatedPrice: 63200
        },
        comparisonVehicleIds: ['m3', 'i4', 'x5'],
        searchQuery: '',
        activeModal: null, // 'detail' | 'configurator' | 'search' | 'test-drive' | 'finance' | 'dealer' | 'account' | 'mobile-menu'
        testDrivePreselect: {
            vehicleId: 'm2',
            dealerId: 'bmw-manhattan'
        },
        finance: {
            price: 63200,
            downPayment: 10000,
            interestRate: 5.49,
            termMonths: 60,
            mode: 'finance', // 'finance' | 'lease'
            leaseTermMonths: 36,
            leaseDownPayment: 5000,
            annualMileage: 10000
        },
        selectedDealerId: 'bmw-manhattan',
        savedConfigurations: [],
        scheduledTestDrives: []
    };

    // Load persisted state from localStorage safely
    try {
        const savedBuilds = localStorage.getItem('bmw_saved_configurations');
        if (savedBuilds) {
            initialState.savedConfigurations = JSON.parse(savedBuilds);
        }
        const savedDrives = localStorage.getItem('bmw_scheduled_drives');
        if (savedDrives) {
            initialState.scheduledTestDrives = JSON.parse(savedDrives);
        }
    } catch (e) {
        console.warn('Storage unavailable', e);
    }

    const state = { ...initialState };

    window.BMW_APP.state = {
        get() {
            return state;
        },

        subscribe(key, callback) {
            if (!listeners.has(key)) {
                listeners.set(key, new Set());
            }
            listeners.get(key).add(callback);
            return () => listeners.get(key).delete(callback);
        },

        emit(key, value) {
            if (listeners.has(key)) {
                listeners.get(key).forEach(fn => {
                    try {
                        fn(value, state);
                    } catch (err) {
                        console.error('State subscriber error', key, err);
                    }
                });
            }
            if (listeners.has('*')) {
                listeners.get('*').forEach(fn => fn(key, value, state));
            }
        },

        // --- FILTER ---
        setFilter(filter) {
            state.currentFilter = filter;
            this.emit('filterChanged', filter);
        },

        // --- VEHICLE SELECTION ---
        setSelectedVehicle(vehicleId) {
            state.selectedVehicleId = vehicleId;
            this.emit('selectedVehicleChanged', vehicleId);
        },

        // --- CONFIGURATOR ---
        setConfiguratorVehicle(vehicleId) {
            const vehicle = window.BMW_DATA.getVehicleById(vehicleId);
            if (!vehicle) return;
            state.configurator.vehicleId = vehicleId;
            state.configurator.colorName = vehicle.colors[0].name;
            state.configurator.wheelId = vehicle.wheels[0].id;
            state.configurator.interiorId = vehicle.interiors[0].id;
            this.recalculateConfiguratorPrice();
            this.emit('configuratorVehicleChanged', vehicle);
            this.emit('configuratorUpdated', state.configurator);
        },

        setConfiguratorColor(colorName) {
            state.configurator.colorName = colorName;
            this.recalculateConfiguratorPrice();
            this.emit('configuratorColorChanged', colorName);
            this.emit('configuratorUpdated', state.configurator);
        },

        setConfiguratorWheel(wheelId) {
            state.configurator.wheelId = wheelId;
            this.recalculateConfiguratorPrice();
            this.emit('configuratorWheelChanged', wheelId);
            this.emit('configuratorUpdated', state.configurator);
        },

        setConfiguratorInterior(interiorId) {
            state.configurator.interiorId = interiorId;
            this.recalculateConfiguratorPrice();
            this.emit('configuratorInteriorChanged', interiorId);
            this.emit('configuratorUpdated', state.configurator);
        },

        setConfiguratorStep(stepName) {
            state.configurator.activeStep = stepName;
            this.emit('configuratorStepChanged', stepName);
        },

        recalculateConfiguratorPrice() {
            const vehicle = window.BMW_DATA.getVehicleById(state.configurator.vehicleId);
            if (!vehicle) return;
            let total = vehicle.price;

            const selectedColor = vehicle.colors.find(c => c.name === state.configurator.colorName);
            if (selectedColor) total += (selectedColor.price || 0);

            const selectedWheel = vehicle.wheels.find(w => w.id === state.configurator.wheelId);
            if (selectedWheel) total += (selectedWheel.price || 0);

            const selectedInterior = vehicle.interiors.find(i => i.id === state.configurator.interiorId);
            if (selectedInterior) total += (selectedInterior.price || 0);

            state.configurator.calculatedPrice = total;
            return total;
        },

        saveCurrentConfiguration() {
            const vehicle = window.BMW_DATA.getVehicleById(state.configurator.vehicleId);
            const selectedColor = vehicle.colors.find(c => c.name === state.configurator.colorName) || vehicle.colors[0];
            const selectedWheel = vehicle.wheels.find(w => w.id === state.configurator.wheelId) || vehicle.wheels[0];
            const selectedInterior = vehicle.interiors.find(i => i.id === state.configurator.interiorId) || vehicle.interiors[0];

            const savedItem = {
                id: 'build-' + Date.now(),
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                vehicleId: vehicle.id,
                vehicleName: vehicle.name,
                image: vehicle.image,
                category: vehicle.category,
                colorName: selectedColor.name,
                colorHex: selectedColor.hex,
                wheelName: selectedWheel.name,
                interiorName: selectedInterior.name,
                totalPrice: state.configurator.calculatedPrice
            };

            state.savedConfigurations.unshift(savedItem);
            try {
                localStorage.setItem('bmw_saved_configurations', JSON.stringify(state.savedConfigurations));
            } catch (e) {}

            this.emit('savedConfigurationsUpdated', state.savedConfigurations);
            return savedItem;
        },

        removeSavedConfiguration(buildId) {
            state.savedConfigurations = state.savedConfigurations.filter(b => b.id !== buildId);
            try {
                localStorage.setItem('bmw_saved_configurations', JSON.stringify(state.savedConfigurations));
            } catch (e) {}
            this.emit('savedConfigurationsUpdated', state.savedConfigurations);
        },

        // --- COMPARISON ---
        addToComparison(vehicleId) {
            if (state.comparisonVehicleIds.includes(vehicleId)) return;
            if (state.comparisonVehicleIds.length >= 3) {
                // Replace the last one
                state.comparisonVehicleIds[2] = vehicleId;
            } else {
                state.comparisonVehicleIds.push(vehicleId);
            }
            this.emit('comparisonUpdated', state.comparisonVehicleIds);
        },

        removeFromComparison(vehicleId) {
            state.comparisonVehicleIds = state.comparisonVehicleIds.filter(id => id !== vehicleId);
            this.emit('comparisonUpdated', state.comparisonVehicleIds);
        },

        setComparisonSlot(index, vehicleId) {
            if (index < 0 || index > 2) return;
            if (!vehicleId) {
                state.comparisonVehicleIds.splice(index, 1);
            } else {
                state.comparisonVehicleIds[index] = vehicleId;
            }
            this.emit('comparisonUpdated', state.comparisonVehicleIds);
        },

        // --- SEARCH ---
        setSearchQuery(query) {
            state.searchQuery = query;
            this.emit('searchQueryChanged', query);
        },

        // --- MODAL / OVERLAY ---
        openModal(modalName, contextData = null) {
            state.activeModal = modalName;
            if (modalName === 'detail' && contextData) {
                state.selectedVehicleId = contextData;
            }
            if (modalName === 'configurator' && contextData) {
                this.setConfiguratorVehicle(contextData);
            }
            if (modalName === 'test-drive') {
                if (contextData) {
                    state.testDrivePreselect.vehicleId = contextData.vehicleId || state.testDrivePreselect.vehicleId;
                    state.testDrivePreselect.dealerId = contextData.dealerId || state.testDrivePreselect.dealerId;
                }
            }
            if (modalName === 'finance' && contextData) {
                if (typeof contextData === 'number') {
                    state.finance.price = contextData;
                } else if (contextData.price) {
                    state.finance.price = contextData.price;
                }
            }
            this.emit('modalOpened', { modal: modalName, data: contextData });
        },

        closeModal(modalName) {
            if (!modalName || state.activeModal === modalName) {
                const closedModal = state.activeModal;
                state.activeModal = null;
                this.emit('modalClosed', closedModal);
            }
        },

        // --- TEST DRIVE BOOKINGS ---
        addTestDriveBooking(booking) {
            const entry = {
                id: 'td-' + Date.now(),
                createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                status: 'Confirmed (Simulated Demo)',
                ...booking
            };
            state.scheduledTestDrives.unshift(entry);
            try {
                localStorage.setItem('bmw_scheduled_drives', JSON.stringify(state.scheduledTestDrives));
            } catch (e) {}
            this.emit('testDrivesUpdated', state.scheduledTestDrives);
            return entry;
        },

        // --- FINANCE ---
        updateFinance(params) {
            state.finance = { ...state.finance, ...params };
            this.emit('financeUpdated', state.finance);
        },

        // --- DEALER ---
        setSelectedDealer(dealerId) {
            state.selectedDealerId = dealerId;
            this.emit('dealerSelected', dealerId);
        }
    };
})();
