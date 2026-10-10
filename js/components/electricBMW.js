/**
 * BMW i Electric Vehicle Component
 * Electric mobility showcase with cyan accents, battery/range telemetry, and interactive model cards.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.ElectricBMW = {
    init() {
        const grid = document.getElementById('electric-cards-grid');
        if (!grid) return;

        const iModels = window.BMW_DATA.vehicles.filter(v => v.category === 'i');

        grid.innerHTML = iModels.map(vehicle => `
            <div class="glass glass-i rounded-2xl p-6 hover:border-bmw-icyan/60 transition-all group border border-cyan-950/40 flex flex-col justify-between bg-neutral-950/80">
                <div>
                    <div class="overflow-hidden rounded-xl h-56 relative mb-6 bg-neutral-900 cursor-pointer" onclick="window.BMW_APP.state.openModal('detail', '${vehicle.id}')">
                        <img src="${vehicle.image}" alt="${vehicle.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute top-3 left-3">
                            <span class="bg-black/80 px-3 py-1 rounded-full text-[10px] font-bold text-bmw-icyan border border-cyan-900/40 tracking-widest uppercase">
                                100% ELECTRIC
                            </span>
                        </div>
                    </div>

                    <h3 class="text-2xl font-bold text-white mb-1 group-hover:text-bmw-icyan transition-colors">${vehicle.name}</h3>
                    <div class="flex items-center gap-2 text-bmw-icyan font-mono text-xs font-bold mb-3 tracking-wider">
                        <span>${vehicle.electricRange} MILES RANGE</span>
                        <span class="text-gray-500">•</span>
                        <span>0-60 IN ${vehicle.performance.acceleration}</span>
                    </div>

                    <p class="text-gray-400 text-xs leading-relaxed mb-6">${vehicle.description}</p>
                </div>

                <div class="pt-4 border-t border-cyan-950/40 flex items-center gap-3">
                    <button onclick="window.BMW_APP.state.openModal('detail', '${vehicle.id}')" class="flex-1 py-2.5 rounded bg-white/5 hover:bg-white/15 text-white text-xs font-semibold tracking-wider transition-colors border border-white/10 text-center">
                        EXPLORE ${vehicle.name.replace('BMW ', '')}
                    </button>
                    <button onclick="window.BMW_APP.state.openModal('configurator', '${vehicle.id}')" class="flex-1 py-2.5 rounded bg-bmw-icyan hover:bg-cyan-300 text-black text-xs font-bold tracking-wider transition-colors text-center">
                        CONFIGURE
                    </button>
                </div>
            </div>
        `).join('');
    }
};
