/**
 * BMW Configurator Component
 * Full 5-step interactive customizer:
 * 1. Model -> 2. Exterior -> 3. Wheels -> 4. Interior -> 5. Summary
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.Configurator = {
    init() {
        const configurator = document.getElementById('configurator');
        const closeBtn = document.getElementById('close-configurator');
        if (!configurator) return;

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                window.BMW_APP.state.closeModal('configurator');
            });
        }

        // Step tabs click listeners
        const stepTabs = document.querySelectorAll('.config-step-btn');
        stepTabs.forEach(btn => {
            btn.addEventListener('click', () => {
                const step = btn.dataset.step;
                window.BMW_APP.state.setConfiguratorStep(step);
            });
        });

        // Subscribe to state updates
        window.BMW_APP.state.subscribe('modalOpened', ({ modal, data }) => {
            if (modal === 'configurator') {
                if (data) {
                    window.BMW_APP.state.setConfiguratorVehicle(data);
                }
                configurator.classList.remove('translate-y-full');
                document.body.style.overflow = 'hidden';
                this.renderAll();
            }
        });

        window.BMW_APP.state.subscribe('modalClosed', (modal) => {
            if (modal === 'configurator') {
                configurator.classList.add('translate-y-full');
                if (!window.BMW_APP.state.get().activeModal) {
                    document.body.style.overflow = '';
                }
            }
        });

        window.BMW_APP.state.subscribe('configuratorStepChanged', (step) => {
            this.updateActiveStepUI(step);
        });

        window.BMW_APP.state.subscribe('configuratorUpdated', () => {
            this.renderVisualizer();
            this.renderSummary();
        });

        // Initialize display
        this.renderAll();
    },

    updateActiveStepUI(activeStep) {
        // Update tabs
        document.querySelectorAll('.config-step-btn').forEach(btn => {
            if (btn.dataset.step === activeStep) {
                btn.classList.add('active', 'border-bmw-blue', 'text-white');
                btn.classList.remove('border-transparent', 'text-gray-400');
            } else {
                btn.classList.remove('active', 'border-bmw-blue', 'text-white');
                btn.classList.add('border-transparent', 'text-gray-400');
            }
        });

        // Update step panels
        document.querySelectorAll('.configurator-step-panel').forEach(panel => {
            if (panel.id === `config-step-${activeStep}`) {
                panel.classList.remove('hidden');
                panel.classList.add('block');
            } else {
                panel.classList.add('hidden');
                panel.classList.remove('block');
            }
        });
    },

    renderAll() {
        this.renderVisualizer();
        this.renderModelStep();
        this.renderExteriorStep();
        this.renderWheelsStep();
        this.renderInteriorStep();
        this.renderSummary();
    },

    renderVisualizer() {
        const state = window.BMW_APP.state.get().configurator;
        const vehicle = window.BMW_DATA.getVehicleById(state.vehicleId);
        if (!vehicle) return;

        const img = document.getElementById('config-image');
        const nameEl = document.getElementById('config-model-name');
        const priceEl = document.getElementById('config-price');
        const colorBadgeEl = document.getElementById('config-color-badge');

        if (img) {
            img.src = vehicle.detailImage || vehicle.image;
            img.alt = `${vehicle.name} in ${state.colorName}`;
            // Optional dynamic tint filter based on color preview tone
            const selectedColor = vehicle.colors.find(c => c.name === state.colorName);
            if (selectedColor && selectedColor.previewTone) {
                img.style.filter = selectedColor.previewTone;
            } else {
                img.style.filter = 'none';
            }
        }
        if (nameEl) nameEl.textContent = vehicle.name;
        if (priceEl) priceEl.textContent = `$${state.calculatedPrice.toLocaleString()}`;
        if (colorBadgeEl) {
            const selectedColor = vehicle.colors.find(c => c.name === state.colorName);
            colorBadgeEl.textContent = state.colorName;
            if (selectedColor) {
                colorBadgeEl.style.borderLeftColor = selectedColor.hex;
            }
        }
    },

    renderModelStep() {
        const container = document.getElementById('model-select-grid');
        if (!container) return;

        const state = window.BMW_APP.state.get().configurator;
        const allVehicles = window.BMW_DATA.vehicles;

        container.innerHTML = allVehicles.map(v => {
            const isSelected = v.id === state.vehicleId;
            return `
                <div onclick="window.BMW_APP.state.setConfiguratorVehicle('${v.id}')" class="p-3 rounded-xl border ${isSelected ? 'border-bmw-blue bg-bmw-blue/10' : 'border-white/10 hover:border-white/30 bg-white/5'} cursor-pointer transition-all flex items-center gap-3">
                    <img src="${v.image}" alt="${v.name}" class="w-16 h-12 object-cover rounded-md flex-shrink-0">
                    <div class="overflow-hidden">
                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">${v.category} Series</p>
                        <p class="text-sm font-bold text-white truncate">${v.name}</p>
                        <p class="text-xs text-bmw-blue font-mono mt-0.5">$${v.price.toLocaleString()}</p>
                    </div>
                </div>
            `;
        }).join('');
    },

    renderExteriorStep() {
        const state = window.BMW_APP.state.get().configurator;
        const vehicle = window.BMW_DATA.getVehicleById(state.vehicleId);
        const container = document.getElementById('color-options-container');
        if (!container || !vehicle) return;

        container.innerHTML = vehicle.colors.map(color => {
            const isSelected = color.name === state.colorName;
            return `
                <div onclick="window.BMW_APP.state.setConfiguratorColor('${color.name}')" class="p-3 rounded-xl border ${isSelected ? 'border-bmw-blue bg-bmw-blue/10' : 'border-white/10 hover:border-white/30 bg-white/5'} cursor-pointer transition-all flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full border-2 ${isSelected ? 'border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'border-white/20'}" style="background-color: ${color.hex}"></span>
                        <div>
                            <p class="text-sm font-semibold text-white">${color.name}</p>
                            <p class="text-xs text-gray-400">${color.price > 0 ? 'Metallic Finish' : 'Standard Non-Metallic'}</p>
                        </div>
                    </div>
                    <span class="text-xs font-mono font-bold ${color.price > 0 ? 'text-gray-300' : 'text-emerald-400'}">
                        ${color.price > 0 ? `+$${color.price.toLocaleString()}` : 'Included'}
                    </span>
                </div>
            `;
        }).join('');
    },

    renderWheelsStep() {
        const state = window.BMW_APP.state.get().configurator;
        const vehicle = window.BMW_DATA.getVehicleById(state.vehicleId);
        const container = document.getElementById('wheel-options-container');
        if (!container || !vehicle) return;

        container.innerHTML = vehicle.wheels.map(wheel => {
            const isSelected = wheel.id === state.wheelId;
            return `
                <div onclick="window.BMW_APP.state.setConfiguratorWheel('${wheel.id}')" class="p-4 rounded-xl border ${isSelected ? 'border-bmw-blue bg-bmw-blue/10' : 'border-white/10 hover:border-white/30 bg-white/5'} cursor-pointer transition-all flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-neutral-800 border ${isSelected ? 'border-bmw-blue' : 'border-white/20'} flex items-center justify-center text-xs font-mono font-bold text-gray-300 flex-shrink-0">
                            ${wheel.size.split(' ')[0]}
                        </div>
                        <div>
                            <p class="text-sm font-bold text-white">${wheel.name}</p>
                            <p class="text-xs text-gray-400">Spec: ${wheel.size}</p>
                        </div>
                    </div>
                    <span class="text-xs font-mono font-bold ${wheel.price > 0 ? 'text-gray-300' : 'text-emerald-400'}">
                        ${wheel.price > 0 ? `+$${wheel.price.toLocaleString()}` : 'Included'}
                    </span>
                </div>
            `;
        }).join('');
    },

    renderInteriorStep() {
        const state = window.BMW_APP.state.get().configurator;
        const vehicle = window.BMW_DATA.getVehicleById(state.vehicleId);
        const container = document.getElementById('interior-options-container');
        if (!container || !vehicle) return;

        container.innerHTML = vehicle.interiors.map(interior => {
            const isSelected = interior.id === state.interiorId;
            return `
                <div onclick="window.BMW_APP.state.setConfiguratorInterior('${interior.id}')" class="p-4 rounded-xl border ${isSelected ? 'border-bmw-blue bg-bmw-blue/10' : 'border-white/10 hover:border-white/30 bg-white/5'} cursor-pointer transition-all flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <span class="w-8 h-8 rounded-full border-2 ${isSelected ? 'border-white' : 'border-white/20'} flex-shrink-0" style="background-color: ${interior.hex}"></span>
                        <div>
                            <p class="text-sm font-bold text-white">${interior.name}</p>
                            <p class="text-xs text-gray-400">${interior.material}</p>
                        </div>
                    </div>
                    <span class="text-xs font-mono font-bold ${interior.price > 0 ? 'text-gray-300' : 'text-emerald-400'}">
                        ${interior.price > 0 ? `+$${interior.price.toLocaleString()}` : 'Included'}
                    </span>
                </div>
            `;
        }).join('');
    },

    renderSummary() {
        const state = window.BMW_APP.state.get().configurator;
        const vehicle = window.BMW_DATA.getVehicleById(state.vehicleId);
        const container = document.getElementById('config-summary-items');
        const totalPriceEl = document.getElementById('config-total-price');
        if (!vehicle) return;

        const selectedColor = vehicle.colors.find(c => c.name === state.colorName) || vehicle.colors[0];
        const selectedWheel = vehicle.wheels.find(w => w.id === state.wheelId) || vehicle.wheels[0];
        const selectedInterior = vehicle.interiors.find(i => i.id === state.interiorId) || vehicle.interiors[0];

        if (container) {
            container.innerHTML = `
                <div class="flex justify-between py-2 border-b border-white/5">
                    <span class="text-gray-400">${vehicle.name} Base MSRP</span>
                    <span class="font-mono text-white">$${vehicle.price.toLocaleString()}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-white/5">
                    <span class="text-gray-400">Exterior: ${selectedColor.name}</span>
                    <span class="font-mono text-white">${selectedColor.price > 0 ? '+$' + selectedColor.price.toLocaleString() : 'Included'}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-white/5">
                    <span class="text-gray-400">Wheels: ${selectedWheel.name}</span>
                    <span class="font-mono text-white">${selectedWheel.price > 0 ? '+$' + selectedWheel.price.toLocaleString() : 'Included'}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-white/5">
                    <span class="text-gray-400">Interior: ${selectedInterior.name}</span>
                    <span class="font-mono text-white">${selectedInterior.price > 0 ? '+$' + selectedInterior.price.toLocaleString() : 'Included'}</span>
                </div>
            `;
        }

        if (totalPriceEl) {
            totalPriceEl.textContent = `$${state.calculatedPrice.toLocaleString()}`;
        }
    },

    saveBuild() {
        const savedItem = window.BMW_APP.state.saveCurrentConfiguration();
        this.showConfigToast(`Configuration saved to My BMW account! (Build Ref: ${savedItem.id})`);
    },

    bookTestDriveWithBuild() {
        const state = window.BMW_APP.state.get().configurator;
        window.BMW_APP.state.closeModal('configurator');
        window.BMW_APP.state.openModal('test-drive', { vehicleId: state.vehicleId });
    },

    calculateFinanceWithBuild() {
        const state = window.BMW_APP.state.get().configurator;
        window.BMW_APP.state.closeModal('configurator');
        window.BMW_APP.state.openModal('finance', { price: state.calculatedPrice });
    },

    showConfigToast(msg) {
        if (window.BMW_APP.components.ModelExplorer && window.BMW_APP.components.ModelExplorer.showToast) {
            window.BMW_APP.components.ModelExplorer.showToast(msg);
        } else {
            alert(msg);
        }
    }
};
