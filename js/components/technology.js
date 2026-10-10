/**
 * BMW Technology & Innovation Showcase Component
 * Interactive cards with deep-dive technical drawers and key capabilities.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.Technology = {
    init() {
        const grid = document.getElementById('technology-grid');
        if (!grid) return;

        const techs = window.BMW_DATA.technologies;

        grid.innerHTML = techs.map(tech => `
            <div class="glass rounded-2xl p-8 hover:bg-white/5 transition-all group border border-white/10 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-6">
                        <div class="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                            ${tech.icon}
                        </div>
                        <span class="text-[10px] uppercase font-bold tracking-widest text-gray-400 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                            ${tech.category}
                        </span>
                    </div>

                    <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-bmw-blue transition-colors">${tech.title}</h3>
                    <p class="text-xs font-semibold text-gray-400 mb-4">${tech.subtitle}</p>
                    <p class="text-sm text-gray-300 leading-relaxed mb-6">${tech.description}</p>
                </div>

                <div>
                    <div class="pt-4 border-t border-white/10 mb-4">
                        <span class="text-[11px] font-mono text-bmw-blue font-semibold block">${tech.stats}</span>
                    </div>

                    <ul class="space-y-1.5 text-xs text-gray-400 mb-6">
                        ${tech.features.map(f => `
                            <li class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-bmw-blue"></span>
                                <span>${f}</span>
                            </li>
                        `).join('')}
                    </ul>

                    <button onclick="window.BMW_APP.state.openModal('test-drive', { preference: '${tech.title}' })" class="w-full py-2.5 rounded bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-semibold tracking-wider text-white transition-all text-center">
                        EXPERIENCE IN TEST DRIVE →
                    </button>
                </div>
            </div>
        `).join('');
    }
};
