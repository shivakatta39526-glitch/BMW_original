/**
 * BMW M High Performance Component
 * Controls the dedicated M-power showcase, horizontal model cards, and direct configuration links.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.MPerformance = {
    init() {
        const container = document.getElementById('m-cards-container');
        if (!container) return;

        const mModels = window.BMW_DATA.vehicles.filter(v => v.category === 'M');

        container.innerHTML = mModels.map(vehicle => `
            <div class="min-w-[320px] max-w-[340px] snap-start flex-shrink-0">
                <div class="glass glass-m rounded-2xl overflow-hidden group border border-red-900/30 hover:border-bmw-mred/60 transition-all flex flex-col justify-between h-full bg-neutral-950/80">
                    <div>
                        <div class="relative h-52 overflow-hidden bg-neutral-900 cursor-pointer" onclick="window.BMW_APP.state.openModal('detail', '${vehicle.id}')">
                            <img src="${vehicle.image}" alt="${vehicle.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                            <div class="absolute top-3 left-3">
                                <span class="bg-black/80 px-2.5 py-1 rounded text-[10px] font-bold text-bmw-mred border border-red-900/40 tracking-widest uppercase">
                                    M POWER
                                </span>
                            </div>
                        </div>

                        <div class="p-6">
                            <h3 class="text-2xl font-extrabold text-white group-hover:text-bmw-mred transition-colors">${vehicle.name}</h3>
                            <div class="flex items-center gap-3 mt-1.5 mb-3 font-mono text-sm">
                                <span class="text-bmw-mred font-bold">${vehicle.performance.hp} HP</span>
                                <span class="text-gray-500">•</span>
                                <span class="text-white font-medium">${vehicle.performance.acceleration} 0-60</span>
                            </div>
                            <p class="text-gray-400 text-xs leading-relaxed line-clamp-2">${vehicle.description}</p>
                        </div>
                    </div>

                    <div class="p-6 pt-0 border-t border-red-950/40 flex items-center gap-2">
                        <button onclick="window.BMW_APP.state.openModal('detail', '${vehicle.id}')" class="flex-1 py-2 rounded bg-white/5 hover:bg-white/15 text-white text-xs font-semibold tracking-wider transition-colors border border-white/10 text-center">
                            DETAILS
                        </button>
                        <button onclick="window.BMW_APP.state.openModal('configurator', '${vehicle.id}')" class="flex-1 py-2 rounded bg-bmw-mred hover:bg-red-700 text-white text-xs font-semibold tracking-wider transition-colors text-center">
                            BUILD M
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
};
