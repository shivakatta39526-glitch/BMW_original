/**
 * BMW Dealer Locator Modal Component
 * Search BMW certified centers by city or zip code, view certified capabilities, and book test drives.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.DealerModal = {
    init() {
        const modal = document.getElementById('dealer-modal');
        const closeBtn = document.getElementById('close-dealer');
        const input = document.getElementById('dealer-search-input');
        const listContainer = document.getElementById('dealer-list-container');
        if (!modal) return;

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                window.BMW_APP.state.closeModal('dealer');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                window.BMW_APP.state.closeModal('dealer');
            }
        });

        if (input) {
            input.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                this.renderDealers(query);
            });
        }

        // Subscribe to modal events
        window.BMW_APP.state.subscribe('modalOpened', ({ modal: activeModal }) => {
            if (activeModal === 'dealer') {
                modal.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
                this.renderDealers();
            }
        });

        window.BMW_APP.state.subscribe('modalClosed', (closedModal) => {
            if (closedModal === 'dealer') {
                modal.classList.add('opacity-0', 'pointer-events-none');
                if (!window.BMW_APP.state.get().activeModal) {
                    document.body.style.overflow = '';
                }
            }
        });

        this.renderDealers();
    },

    renderDealers(filterQuery = '') {
        const container = document.getElementById('dealer-list-container');
        if (!container) return;

        let dealers = window.BMW_DATA.dealers;
        if (filterQuery) {
            dealers = dealers.filter(d => 
                d.name.toLowerCase().includes(filterQuery) ||
                d.city.toLowerCase().includes(filterQuery) ||
                d.state.toLowerCase().includes(filterQuery) ||
                d.zip.includes(filterQuery)
            );
        }

        const selectedDealerId = window.BMW_APP.state.get().selectedDealerId;

        if (dealers.length === 0) {
            container.innerHTML = `
                <div class="p-8 text-center text-gray-400">
                    <p>No BMW Centers found matching "${filterQuery}".</p>
                    <p class="text-xs text-gray-500 mt-1">Try "New York", "Los Angeles", "Austin", or "Chicago".</p>
                </div>
            `;
            return;
        }

        container.innerHTML = dealers.map(dealer => {
            const isPreferred = dealer.id === selectedDealerId;
            return `
                <div class="glass rounded-xl p-5 border ${isPreferred ? 'border-bmw-blue bg-bmw-blue/10' : 'border-white/10 hover:border-white/20 bg-neutral-900/60'} transition-all">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                        <div>
                            <div class="flex items-center gap-2">
                                <h4 class="text-lg font-bold text-white">${dealer.name}</h4>
                                ${isPreferred ? '<span class="text-[10px] px-2 py-0.5 rounded bg-bmw-blue text-white font-bold uppercase">My Dealer</span>' : ''}
                            </div>
                            <p class="text-xs text-gray-400 mt-0.5">${dealer.address} • <span class="text-bmw-blue font-bold font-mono">${dealer.distance}</span></p>
                        </div>
                        <div class="text-right">
                            <span class="text-xs font-bold text-amber-400">★ ${dealer.rating}</span>
                            <span class="text-[11px] text-gray-500">(${dealer.reviewsCount} reviews)</span>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-1.5 mb-4">
                        ${dealer.mCertified ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-red-950/60 text-bmw-mred border border-red-900/40">M Certified Center</span>' : ''}
                        ${dealer.iCertified ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950/60 text-bmw-icyan border border-cyan-900/40">BMW i Electric Hub</span>' : ''}
                        ${dealer.amenities.map(a => `<span class="px-2 py-0.5 rounded text-[10px] bg-white/5 text-gray-300 border border-white/5">${a}</span>`).join('')}
                    </div>

                    <div class="flex flex-wrap items-center justify-between pt-3 border-t border-white/5 text-xs gap-3">
                        <span class="text-gray-400">${dealer.hours}</span>
                        <div class="flex gap-2">
                            <button onclick="window.BMW_APP.state.setSelectedDealer('${dealer.id}'); window.BMW_APP.components.DealerModal.renderDealers();" class="px-3 py-1.5 rounded border border-white/20 hover:border-white text-white font-semibold transition-colors">
                                ${isPreferred ? 'Selected' : 'Set as Preferred'}
                            </button>
                            <button onclick="window.BMW_APP.state.closeModal('dealer'); window.BMW_APP.state.openModal('test-drive', { dealerId: '${dealer.id}' });" class="px-3 py-1.5 rounded bg-bmw-blue hover:bg-blue-600 text-white font-semibold transition-colors">
                                Book Test Drive Here
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
};
