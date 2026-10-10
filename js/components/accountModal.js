/**
 * BMW My Account / Saved Builds Component
 * Customer portal showcasing saved configurations, scheduled test-drives, and profile preferences.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.AccountModal = {
    init() {
        const modal = document.getElementById('account-modal');
        const closeBtn = document.getElementById('close-account');
        if (!modal) return;

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                window.BMW_APP.state.closeModal('account');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                window.BMW_APP.state.closeModal('account');
            }
        });

        // Subscribe to state updates
        window.BMW_APP.state.subscribe('modalOpened', ({ modal: activeModal }) => {
            if (activeModal === 'account') {
                modal.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
                this.render();
            }
        });

        window.BMW_APP.state.subscribe('modalClosed', (closedModal) => {
            if (closedModal === 'account') {
                modal.classList.add('opacity-0', 'pointer-events-none');
                if (!window.BMW_APP.state.get().activeModal) {
                    document.body.style.overflow = '';
                }
            }
        });

        window.BMW_APP.state.subscribe('savedConfigurationsUpdated', () => {
            if (window.BMW_APP.state.get().activeModal === 'account') {
                this.render();
            }
        });

        window.BMW_APP.state.subscribe('testDrivesUpdated', () => {
            if (window.BMW_APP.state.get().activeModal === 'account') {
                this.render();
            }
        });
    },

    render() {
        const buildsContainer = document.getElementById('account-saved-builds');
        const drivesContainer = document.getElementById('account-test-drives');
        const preferredDealerContainer = document.getElementById('account-preferred-dealer');
        if (!buildsContainer) return;

        const state = window.BMW_APP.state.get();
        const savedBuilds = state.savedConfigurations;
        const scheduledDrives = state.scheduledTestDrives;
        const preferredDealer = window.BMW_DATA.dealers.find(d => d.id === state.selectedDealerId) || window.BMW_DATA.dealers[0];

        // 1. Saved Builds
        if (savedBuilds.length === 0) {
            buildsContainer.innerHTML = `
                <div class="glass rounded-xl p-8 text-center border border-white/10 text-gray-400">
                    <svg class="w-10 h-10 mx-auto mb-3 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>
                    <p class="font-semibold text-white">No Saved Configurations Yet</p>
                    <p class="text-xs text-gray-500 mt-1 mb-4">Customize your dream BMW with our configurator and save it here.</p>
                    <button onclick="window.BMW_APP.state.closeModal('account'); window.BMW_APP.state.openModal('configurator', 'm2');" class="px-5 py-2 rounded bg-bmw-blue hover:bg-blue-600 text-white text-xs font-bold tracking-wider transition-colors">
                        START CONFIGURATION
                    </button>
                </div>
            `;
        } else {
            buildsContainer.innerHTML = savedBuilds.map(build => `
                <div class="glass rounded-xl p-4 border border-white/10 bg-neutral-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <img src="${build.image}" alt="${build.vehicleName}" class="w-20 h-14 object-cover rounded-lg flex-shrink-0">
                        <div>
                            <span class="text-[10px] text-gray-500 font-mono">${build.date} • ${build.id}</span>
                            <h4 class="font-bold text-white text-base">${build.vehicleName}</h4>
                            <p class="text-xs text-gray-400 mt-0.5">
                                <span class="inline-block w-2.5 h-2.5 rounded-full mr-1 border border-white/40 align-middle" style="background-color: ${build.colorHex}"></span>
                                ${build.colorName} • ${build.wheelName.split(' ')[0]}
                            </p>
                        </div>
                    </div>
                    <div class="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3">
                        <span class="text-base font-bold text-bmw-blue font-mono">$${build.totalPrice.toLocaleString()}*</span>
                        <div class="flex gap-2">
                            <button onclick="window.BMW_APP.state.closeModal('account'); window.BMW_APP.state.openModal('configurator', '${build.vehicleId}');" class="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded transition-colors">
                                Resume
                            </button>
                            <button onclick="window.BMW_APP.state.removeSavedConfiguration('${build.id}');" class="px-2 py-1 text-gray-500 hover:text-red-400 text-xs transition-colors" title="Delete build">
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // 2. Scheduled Test Drives
        if (drivesContainer) {
            if (scheduledDrives.length === 0) {
                drivesContainer.innerHTML = `
                    <div class="glass rounded-xl p-6 text-center border border-white/10 text-gray-400">
                        <p class="text-sm">No Upcoming Test Drive Reservations.</p>
                        <button onclick="window.BMW_APP.state.closeModal('account'); window.BMW_APP.state.openModal('test-drive');" class="mt-3 px-4 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider transition-colors">
                            Book a Drive
                        </button>
                    </div>
                `;
            } else {
                drivesContainer.innerHTML = scheduledDrives.map(drive => `
                    <div class="glass rounded-xl p-4 border border-white/10 bg-neutral-900/60 space-y-2">
                        <div class="flex justify-between items-center text-xs">
                            <span class="font-bold text-emerald-400">${drive.status}</span>
                            <span class="font-mono text-gray-400 font-semibold">${drive.date}</span>
                        </div>
                        <h4 class="font-bold text-white text-base">${drive.vehicleName}</h4>
                        <p class="text-xs text-gray-400">${drive.dealerName} (${drive.dealerAddress})</p>
                        <p class="text-[11px] font-mono text-gray-500">Ref: ${drive.id}</p>
                    </div>
                `).join('');
            }
        }

        // 3. Preferred Dealer
        if (preferredDealerContainer && preferredDealer) {
            preferredDealerContainer.innerHTML = `
                <div class="glass rounded-xl p-4 border border-white/10 flex justify-between items-center">
                    <div>
                        <p class="text-xs font-bold uppercase tracking-widest text-bmw-blue">Preferred BMW Center</p>
                        <h4 class="font-bold text-white text-sm mt-0.5">${preferredDealer.name}</h4>
                        <p class="text-xs text-gray-400">${preferredDealer.address} • ${preferredDealer.phone}</p>
                    </div>
                    <button onclick="window.BMW_APP.state.closeModal('account'); window.BMW_APP.state.openModal('dealer');" class="px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors">
                        Change
                    </button>
                </div>
            `;
        }
    }
};
