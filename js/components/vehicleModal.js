/**
 * BMW Vehicle Detail Modal Component
 * Displays deep cinematic specifications, gallery view, performance telemetry, and direct action CTAs.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.VehicleModal = {
    init() {
        const modal = document.getElementById('vehicle-detail-modal');
        const closeBtn = document.getElementById('close-detail');
        if (!modal) return;

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                window.BMW_APP.state.closeModal('detail');
            });
        }

        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                window.BMW_APP.state.closeModal('detail');
            }
        });

        // Subscribe to modal state
        window.BMW_APP.state.subscribe('modalOpened', ({ modal: activeModal, data }) => {
            if (activeModal === 'detail') {
                this.render(data || window.BMW_APP.state.get().selectedVehicleId);
                modal.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            }
        });

        window.BMW_APP.state.subscribe('modalClosed', (closedModal) => {
            if (closedModal === 'detail') {
                modal.classList.add('translate-x-full');
                if (!window.BMW_APP.state.get().activeModal) {
                    document.body.style.overflow = '';
                }
            }
        });
    },

    render(vehicleId) {
        const vehicle = window.BMW_DATA.getVehicleById(vehicleId);
        const container = document.getElementById('detail-content');
        if (!container || !vehicle) return;

        const isElectric = vehicle.type === 'electric';
        const isHybrid = vehicle.type === 'hybrid';
        const accentClass = vehicle.category === 'M' ? 'text-bmw-mred' : vehicle.category === 'i' ? 'text-bmw-icyan' : 'text-bmw-blue';

        container.innerHTML = `
            <!-- Left Column: Imagery & Visual Showcase -->
            <div class="flex flex-col gap-6">
                <div class="relative rounded-2xl overflow-hidden glass border border-white/10 group shadow-2xl">
                    <img src="${vehicle.detailImage || vehicle.image}" alt="${vehicle.name}" class="w-full h-auto object-cover max-h-[500px]">
                    <div class="absolute bottom-4 left-4 right-4 glass p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <span class="text-xs uppercase tracking-widest text-gray-400">Class & Engine</span>
                            <p class="text-sm font-semibold text-white">${vehicle.performance.engine || vehicle.name}</p>
                        </div>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-xs font-bold ${accentClass}">
                            ${vehicle.category === 'i' ? 'All-Electric' : vehicle.category === 'M' ? 'M High-Performance' : 'TwinPower Turbo'}
                        </span>
                    </div>
                </div>

                <!-- Exterior color swatches preview -->
                <div class="glass p-5 rounded-xl border border-white/10">
                    <h4 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Available Exterior Finishes</h4>
                    <div class="flex flex-wrap gap-3 items-center">
                        ${vehicle.colors.map(c => `
                            <div class="group relative flex items-center justify-center">
                                <span class="w-7 h-7 rounded-full border border-white/30" style="background-color: ${c.hex}"></span>
                                <span class="absolute -top-8 bg-black/90 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/20">
                                    ${c.name}
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Right Column: Specs, Features & CTAs -->
            <div class="flex flex-col justify-between">
                <div>
                    <!-- Badge and Title -->
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-xs font-bold uppercase tracking-[0.25em] ${accentClass}">
                            BMW ${vehicle.category} • ${vehicle.tagline ? vehicle.tagline.split('.')[0] : 'Engineering'}
                        </span>
                    </div>
                    <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">${vehicle.name}</h2>
                    <p class="text-gray-300 text-base leading-relaxed mb-6">${vehicle.description}</p>

                    <!-- Key Telemetry Metrics Grid -->
                    <div class="grid grid-cols-3 gap-3 mb-8">
                        <div class="glass rounded-xl p-4 text-center border border-white/10">
                            <p class="text-3xl font-extrabold font-mono ${accentClass}">${vehicle.performance.hp}</p>
                            <p class="text-[11px] text-gray-400 uppercase tracking-wider mt-1">Horsepower</p>
                        </div>
                        <div class="glass rounded-xl p-4 text-center border border-white/10">
                            <p class="text-3xl font-extrabold font-mono ${accentClass}">${vehicle.performance.acceleration}</p>
                            <p class="text-[11px] text-gray-400 uppercase tracking-wider mt-1">0-60 MPH</p>
                        </div>
                        <div class="glass rounded-xl p-4 text-center border border-white/10">
                            <p class="text-3xl font-extrabold font-mono ${accentClass}">
                                ${vehicle.electricRange ? vehicle.electricRange + ' mi' : vehicle.performance.topSpeed}
                            </p>
                            <p class="text-[11px] text-gray-400 uppercase tracking-wider mt-1">
                                ${vehicle.electricRange ? 'Est. Range' : 'Top Speed'}
                            </p>
                        </div>
                    </div>

                    <!-- Technical Specifications Table -->
                    <div class="glass rounded-xl p-5 mb-8 border border-white/10 space-y-3 text-sm">
                        <div class="flex justify-between py-1 border-b border-white/5">
                            <span class="text-gray-400">Drivetrain</span>
                            <span class="font-semibold text-white">${vehicle.performance.drivetrain}</span>
                        </div>
                        <div class="flex justify-between py-1 border-b border-white/5">
                            <span class="text-gray-400">Peak Torque</span>
                            <span class="font-semibold text-white font-mono">${vehicle.performance.torque || 'Standard'}</span>
                        </div>
                        ${vehicle.batteryCapacity ? `
                            <div class="flex justify-between py-1 border-b border-white/5">
                                <span class="text-gray-400">High-Voltage Battery</span>
                                <span class="font-semibold text-bmw-icyan">${vehicle.batteryCapacity}</span>
                            </div>
                            <div class="flex justify-between py-1 border-b border-white/5">
                                <span class="text-gray-400">Fast DC Charging</span>
                                <span class="font-semibold text-bmw-icyan">${vehicle.chargingTime}</span>
                            </div>
                        ` : ''}
                        ${vehicle.fuelEconomy ? `
                            <div class="flex justify-between py-1 border-b border-white/5">
                                <span class="text-gray-400">Fuel Economy / Efficiency</span>
                                <span class="font-semibold text-white">${vehicle.fuelEconomy}</span>
                            </div>
                        ` : ''}
                        <div class="flex justify-between py-1">
                            <span class="text-gray-400">Starting MSRP (Demonstration)</span>
                            <span class="font-extrabold text-white text-lg font-mono">$${vehicle.price.toLocaleString()}*</span>
                        </div>
                    </div>

                    <!-- Highlighted Features -->
                    ${vehicle.features ? `
                        <div class="mb-8">
                            <h4 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Signature Equipment</h4>
                            <ul class="space-y-2 text-sm text-gray-300">
                                ${vehicle.features.map(f => `
                                    <li class="flex items-start gap-2">
                                        <svg class="w-4 h-4 ${accentClass} flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                                        <span>${f}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>

                <!-- Action CTA Bar -->
                <div class="space-y-3 pt-4 border-t border-white/10">
                    <div class="flex flex-col sm:flex-row gap-3">
                        <button onclick="window.BMW_APP.state.openModal('configurator', '${vehicle.id}')" class="flex-1 py-3.5 bg-bmw-blue hover:bg-blue-600 transition-all font-bold tracking-wider text-white text-center rounded">
                            BUILD YOUR ${vehicle.category === 'M' ? 'M' : ''} ${vehicle.name.replace('BMW ', '')}
                        </button>
                        <button onclick="window.BMW_APP.state.openModal('test-drive', { vehicleId: '${vehicle.id}' })" class="flex-1 py-3.5 border border-white/30 hover:bg-white/10 transition-all font-bold tracking-wider text-white text-center rounded">
                            BOOK TEST DRIVE
                        </button>
                    </div>
                    <div class="flex gap-3 text-xs">
                        <button onclick="window.BMW_APP.state.openModal('finance', { price: ${vehicle.price} })" class="flex-1 py-2 text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1.5 underline">
                            Calculate Monthly Payment
                        </button>
                        <button onclick="window.BMW_APP.state.addToComparison('${vehicle.id}'); window.BMW_APP.state.closeModal('detail'); window.location.hash = 'comparison';" class="flex-1 py-2 text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1.5 underline">
                            Compare Specifications
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
};
