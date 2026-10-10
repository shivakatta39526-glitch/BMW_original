/**
 * BMW Search Component
 * Full-screen instant search overlay with live filtering, category tags, and direct vehicle cards.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.Search = {
    init() {
        const overlay = document.getElementById('search-overlay');
        const input = document.getElementById('search-input');
        const closeBtn = document.getElementById('close-search');
        const resultsContainer = document.getElementById('search-results');
        const quickPills = document.querySelectorAll('.search-pill');
        if (!overlay || !input) return;

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                window.BMW_APP.state.closeModal('search');
            });
        }

        // Search input typing
        input.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            this.executeSearch(query);
        });

        // Quick suggestions click
        quickPills.forEach(pill => {
            pill.addEventListener('click', () => {
                const query = pill.dataset.query || '';
                input.value = query;
                this.executeSearch(query.toLowerCase());
            });
        });

        // Subscribe to modal state
        window.BMW_APP.state.subscribe('modalOpened', ({ modal }) => {
            if (modal === 'search') {
                overlay.classList.remove('translate-y-full');
                document.body.style.overflow = 'hidden';
                setTimeout(() => input.focus(), 150);
                if (input.value.trim()) {
                    this.executeSearch(input.value.trim().toLowerCase());
                } else {
                    this.renderSuggestions();
                }
            }
        });

        window.BMW_APP.state.subscribe('modalClosed', (modal) => {
            if (modal === 'search') {
                overlay.classList.add('translate-y-full');
                if (!window.BMW_APP.state.get().activeModal) {
                    document.body.style.overflow = '';
                }
            }
        });
    },

    executeSearch(query) {
        const resultsContainer = document.getElementById('search-results');
        if (!resultsContainer) return;

        if (!query) {
            this.renderSuggestions();
            return;
        }

        const allVehicles = window.BMW_DATA.vehicles;
        const matches = allVehicles.filter(v => {
            const nameMatch = v.name.toLowerCase().includes(query);
            const catMatch = v.category.toLowerCase().includes(query);
            const descMatch = v.description.toLowerCase().includes(query);
            const engineMatch = v.performance.engine ? v.performance.engine.toLowerCase().includes(query) : false;
            const typeMatch = v.type.toLowerCase().includes(query);
            return nameMatch || catMatch || descMatch || engineMatch || typeMatch;
        });

        if (matches.length === 0) {
            resultsContainer.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-xl font-semibold text-gray-300">No BMW vehicles found matching "${query}"</p>
                    <p class="text-sm text-gray-500 mt-2">Try searching for "M3", "Electric", "SUV", or "Roadster"</p>
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = matches.map(vehicle => `
            <div class="glass rounded-xl p-4 flex items-center justify-between gap-4 hover:border-white/30 transition-all group bg-neutral-900/60 cursor-pointer" onclick="window.BMW_APP.state.closeModal('search'); window.BMW_APP.state.openModal('detail', '${vehicle.id}')">
                <div class="flex items-center gap-4">
                    <img src="${vehicle.image}" alt="${vehicle.name}" class="w-20 h-16 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="text-[10px] font-bold uppercase tracking-widest ${vehicle.category === 'M' ? 'text-bmw-mred' : vehicle.category === 'i' ? 'text-bmw-icyan' : 'text-bmw-blue'}">
                                ${vehicle.category} Series
                            </span>
                            ${vehicle.type === 'electric' ? '<span class="text-[9px] px-1.5 py-0.5 rounded bg-cyan-950 text-bmw-icyan font-bold">EV</span>' : ''}
                        </div>
                        <h4 class="font-bold text-white text-base group-hover:text-bmw-blue transition-colors">${vehicle.name}</h4>
                        <p class="text-xs text-gray-400 mt-0.5">${vehicle.performance.hp} HP • ${vehicle.electricRange ? vehicle.electricRange + ' mi range' : vehicle.performance.acceleration + ' 0-60'}</p>
                    </div>
                </div>
                <div class="text-right flex-shrink-0">
                    <span class="text-xs text-gray-400 block">From</span>
                    <span class="text-sm font-bold text-white font-mono">$${vehicle.price.toLocaleString()}</span>
                    <span class="text-[11px] text-bmw-blue font-semibold block mt-1">Explore →</span>
                </div>
            </div>
        `).join('');
    },

    renderSuggestions() {
        const resultsContainer = document.getElementById('search-results');
        if (!resultsContainer) return;

        // Showcase popular featured vehicles
        const featured = ['m3', 'ix', 'x5'];
        const vehicles = featured.map(id => window.BMW_DATA.getVehicleById(id));

        resultsContainer.innerHTML = `
            <div class="col-span-full mb-2">
                <span class="text-xs font-bold uppercase tracking-widest text-gray-400">Featured Models</span>
            </div>
            ${vehicles.map(vehicle => `
                <div class="glass rounded-xl p-4 flex items-center justify-between gap-4 hover:border-white/30 transition-all group bg-neutral-900/60 cursor-pointer" onclick="window.BMW_APP.state.closeModal('search'); window.BMW_APP.state.openModal('detail', '${vehicle.id}')">
                    <div class="flex items-center gap-4">
                        <img src="${vehicle.image}" alt="${vehicle.name}" class="w-16 h-12 object-cover rounded flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <div>
                            <span class="text-[10px] font-bold uppercase tracking-widest ${vehicle.category === 'M' ? 'text-bmw-mred' : vehicle.category === 'i' ? 'text-bmw-icyan' : 'text-bmw-blue'}">
                                ${vehicle.category} Series
                            </span>
                            <h4 class="font-bold text-white text-sm group-hover:text-bmw-blue transition-colors">${vehicle.name}</h4>
                        </div>
                    </div>
                    <span class="text-xs font-bold text-white font-mono">$${vehicle.price.toLocaleString()}</span>
                </div>
            `).join('')}
        `;
    }
};
