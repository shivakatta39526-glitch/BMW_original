/**
 * BMW Model Explorer Component
 * Handles model category filtering, dynamic card rendering, and exploration actions.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.ModelExplorer = {
    init() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const grid = document.getElementById('model-grid');
        if (!grid) return;

        // Render initially with current filter
        this.renderCards(window.BMW_APP.state.get().currentFilter);

        // Filter button click events
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter || 'all';
                window.BMW_APP.state.setFilter(filter);

                filterButtons.forEach(b => {
                    b.classList.remove('bg-white', 'text-black', 'active');
                    b.classList.add('border-white/20', 'text-white');
                });
                btn.classList.add('bg-white', 'text-black', 'active');
                btn.classList.remove('border-white/20', 'text-white');
            });
        });

        // Listen for filter state changes
        window.BMW_APP.state.subscribe('filterChanged', (filter) => {
            this.renderCards(filter);
        });

        // Listen for comparison updates to toggle compare button state
        window.BMW_APP.state.subscribe('comparisonUpdated', () => {
            this.updateCompareButtonsState();
        });
    },

    renderCards(filter = 'all') {
        const grid = document.getElementById('model-grid');
        if (!grid) return;

        const vehicles = window.BMW_DATA.getVehiclesByCategory(filter);
        const comparisonIds = window.BMW_APP.state.get().comparisonVehicleIds;

        grid.innerHTML = vehicles.map(vehicle => {
            const isCompared = comparisonIds.includes(vehicle.id);
            const isElectric = vehicle.type === 'electric';
            const isHybrid = vehicle.type === 'hybrid';

            let badgeType = '';
            if (isElectric) {
                badgeType = '<span class="text-bmw-icyan text-[11px] font-bold tracking-widest uppercase ml-2 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">Electric</span>';
            } else if (isHybrid) {
                badgeType = '<span class="text-emerald-400 text-[11px] font-bold tracking-widest uppercase ml-2 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">Hybrid</span>';
            }

            const metricHighlight = vehicle.electricRange
                ? `<span class="text-bmw-icyan font-mono text-sm font-semibold">${vehicle.electricRange} mi Range</span>`
                : `<span class="text-bmw-blue font-mono text-sm font-semibold">${vehicle.performance.acceleration} 0-60</span>`;

            return `
                <div class="glass rounded-2xl overflow-hidden card-hover group flex flex-col justify-between" data-vehicle-id="${vehicle.id}">
                    <div>
                        <!-- Vehicle Image & Quick Actions -->
                        <div class="overflow-hidden h-64 relative bg-neutral-900 cursor-pointer" onclick="window.BMW_APP.state.openModal('detail', '${vehicle.id}')">
                            <img src="${vehicle.image}" alt="${vehicle.name}" loading="lazy" class="card-img w-full h-full object-cover">
                            
                            <!-- Category badge overlay -->
                            <div class="absolute top-4 left-4 z-10 flex items-center">
                                <span class="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-white/10 ${vehicle.category === 'M' ? 'text-bmw-mred' : vehicle.category === 'i' ? 'text-bmw-icyan' : 'text-white'}">
                                    ${vehicle.category === 'i' ? 'BMW i' : vehicle.category === 'M' ? 'BMW M' : 'BMW ' + vehicle.category}
                                </span>
                            </div>

                            <!-- Hover Overlay -->
                            <div class="card-overlay absolute inset-0 bg-black/60 opacity-0 flex flex-col items-center justify-center gap-3 p-4">
                                <button onclick="event.stopPropagation(); window.BMW_APP.state.openModal('detail', '${vehicle.id}')" class="w-48 py-2.5 bg-white text-black text-xs font-bold tracking-wider hover:bg-gray-200 transition-colors rounded">
                                    EXPLORE MODEL
                                </button>
                                <button onclick="event.stopPropagation(); window.BMW_APP.state.openModal('configurator', '${vehicle.id}')" class="w-48 py-2.5 bg-bmw-blue hover:bg-blue-600 text-white text-xs font-bold tracking-wider transition-colors rounded">
                                    BUILD YOUR BMW
                                </button>
                            </div>
                        </div>

                        <!-- Content info -->
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <div class="flex items-center">
                                        <span class="text-gray-400 text-xs font-bold tracking-wider uppercase">${vehicle.tagline ? vehicle.tagline.split('.')[0] : vehicle.category}</span>
                                        ${badgeType}
                                    </div>
                                    <h3 class="text-2xl font-bold mt-1 tracking-tight text-white group-hover:text-bmw-blue transition-colors">${vehicle.name}</h3>
                                </div>
                                ${metricHighlight}
                            </div>
                            <p class="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">${vehicle.description}</p>
                        </div>
                    </div>

                    <!-- Footer Details & Buttons -->
                    <div class="px-6 pb-6 pt-3 border-t border-white/5 flex flex-col gap-4">
                        <div class="flex justify-between items-center text-sm">
                            <div>
                                <span class="text-xs text-gray-500 uppercase tracking-wider block">Starting MSRP</span>
                                <span class="text-white font-bold text-base">$${vehicle.price.toLocaleString()}*</span>
                            </div>
                            <div class="text-right">
                                <span class="text-xs text-gray-500 uppercase tracking-wider block">Power Output</span>
                                <span class="${vehicle.category === 'M' ? 'text-bmw-mred' : vehicle.category === 'i' ? 'text-bmw-icyan' : 'text-bmw-blue'} font-bold font-mono">${vehicle.performance.hp} HP</span>
                            </div>
                        </div>

                        <div class="flex items-center gap-2 pt-1">
                            <button onclick="window.BMW_APP.state.openModal('detail', '${vehicle.id}')" class="flex-1 py-2 bg-white/5 hover:bg-white/15 border border-white/10 rounded text-xs font-semibold tracking-wider text-white transition-all text-center">
                                EXPLORE
                            </button>
                            <button onclick="window.BMW_APP.state.openModal('configurator', '${vehicle.id}')" class="flex-1 py-2 bg-bmw-blue/20 hover:bg-bmw-blue/40 border border-bmw-blue/50 rounded text-xs font-semibold tracking-wider text-white transition-all text-center">
                                BUILD
                            </button>
                            <button onclick="window.BMW_APP.components.ModelExplorer.toggleCompare('${vehicle.id}')" class="compare-btn-${vehicle.id} p-2 ${isCompared ? 'bg-bmw-blue text-white border-bmw-blue' : 'bg-white/5 text-gray-400 hover:text-white border-white/10'} border rounded text-xs transition-colors" title="${isCompared ? 'Remove from comparison' : 'Add to compare'}">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    },

    toggleCompare(vehicleId) {
        const state = window.BMW_APP.state;
        const list = state.get().comparisonVehicleIds;
        if (list.includes(vehicleId)) {
            state.removeFromComparison(vehicleId);
            this.showToast(`Removed from Comparison.`);
        } else {
            if (list.length >= 3) {
                this.showToast(`Comparison slots full (max 3). Replacing slot 3 with selected model.`);
            } else {
                this.showToast(`Added to Comparison.`);
            }
            state.addToComparison(vehicleId);
        }
    },

    updateCompareButtonsState() {
        const list = window.BMW_APP.state.get().comparisonVehicleIds;
        window.BMW_DATA.vehicles.forEach(vehicle => {
            const btn = document.querySelector(`.compare-btn-${vehicle.id}`);
            if (btn) {
                const isCompared = list.includes(vehicle.id);
                if (isCompared) {
                    btn.classList.add('bg-bmw-blue', 'text-white', 'border-bmw-blue');
                    btn.classList.remove('bg-white/5', 'text-gray-400', 'border-white/10');
                } else {
                    btn.classList.remove('bg-bmw-blue', 'text-white', 'border-bmw-blue');
                    btn.classList.add('bg-white/5', 'text-gray-400', 'border-white/10');
                }
            }
        });
    },

    showToast(message) {
        let toast = document.getElementById('app-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'app-toast';
            toast.className = 'fixed bottom-8 right-8 z-50 glass bg-neutral-900/90 text-white px-5 py-3 rounded-lg border border-white/20 shadow-2xl text-sm font-medium transform transition-all duration-300 translate-y-12 opacity-0 pointer-events-none flex items-center gap-3';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `
            <svg class="w-5 h-5 text-bmw-blue flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>${message}</span>
        `;
        toast.classList.remove('translate-y-12', 'opacity-0', 'pointer-events-none');
        clearTimeout(this._toastTimeout);
        this._toastTimeout = setTimeout(() => {
            toast.classList.add('translate-y-12', 'opacity-0', 'pointer-events-none');
        }, 3200);
    }
};
