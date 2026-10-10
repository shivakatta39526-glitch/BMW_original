/**
 * BMW Interior Experience Component
 * Interactive cockpit exploration with pulsing hotspots, positioned info popovers, and feature shortcuts.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.InteriorExperience = {
    activeHotspotId: null,

    init() {
        const container = document.getElementById('interior-viewport');
        const popover = document.getElementById('hotspot-popover');
        const pillContainer = document.getElementById('interior-hotspot-pills');
        if (!container || !popover) return;

        const hotspots = window.BMW_DATA.hotspots;

        // Render hotspots on the interior image container
        container.querySelectorAll('.hotspot-beacon').forEach(el => el.parentElement.remove());

        hotspots.forEach(spot => {
            const wrapper = document.createElement('div');
            wrapper.className = 'hotspot-wrapper';
            wrapper.style.top = `${spot.top}%`;
            wrapper.style.left = `${spot.left}%`;
            wrapper.innerHTML = `
                <button class="hotspot-beacon" id="beacon-${spot.id}" aria-label="${spot.title}">
                    <span class="w-2 h-2 rounded-full bg-white"></span>
                </button>
            `;
            wrapper.addEventListener('click', (e) => {
                e.stopPropagation();
                this.selectHotspot(spot.id);
            });
            container.appendChild(wrapper);
        });

        // Render quick selector pills underneath
        if (pillContainer) {
            pillContainer.innerHTML = hotspots.map(spot => `
                <button onclick="window.BMW_APP.components.InteriorExperience.selectHotspot('${spot.id}')" class="interior-pill-${spot.id} px-4 py-2 rounded-full border border-white/10 glass text-xs font-semibold text-gray-300 hover:text-white hover:border-white/30 transition-all">
                    ${spot.title}
                </button>
            `).join('');
        }

        // Click outside closes popover
        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
                this.closePopover();
            }
        });

        // Select first hotspot by default
        this.selectHotspot(hotspots[0].id);
    },

    selectHotspot(spotId) {
        const spot = window.BMW_DATA.hotspots.find(s => s.id === spotId);
        const popover = document.getElementById('hotspot-popover');
        const container = document.getElementById('interior-viewport');
        if (!spot || !popover || !container) return;

        this.activeHotspotId = spotId;

        // Highlight active beacon
        document.querySelectorAll('.hotspot-beacon').forEach(b => b.classList.remove('active'));
        const activeBeacon = document.getElementById(`beacon-${spotId}`);
        if (activeBeacon) activeBeacon.classList.add('active');

        // Highlight active pill
        document.querySelectorAll('#interior-hotspot-pills button').forEach(p => {
            p.classList.remove('bg-bmw-blue', 'text-white', 'border-bmw-blue');
        });
        const activePill = document.querySelector(`.interior-pill-${spotId}`);
        if (activePill) {
            activePill.classList.add('bg-bmw-blue', 'text-white', 'border-bmw-blue');
        }

        // Populate popover
        popover.innerHTML = `
            <div class="relative p-5 glass bg-neutral-950/90 rounded-xl border border-white/20 shadow-2xl max-w-sm">
                <button onclick="window.BMW_APP.components.InteriorExperience.closePopover()" class="absolute top-3 right-3 text-gray-400 hover:text-white text-sm p-1">
                    ✕
                </button>
                <span class="text-[10px] font-bold uppercase tracking-widest text-bmw-blue">${spot.badge}</span>
                <h4 class="text-lg font-bold text-white mt-0.5 mb-2">${spot.title}</h4>
                <p class="text-xs text-gray-300 leading-relaxed mb-3">${spot.description}</p>
                <div class="pt-2 border-t border-white/10 text-[11px] text-gray-400">
                    <strong class="text-gray-200">Engineering Note:</strong> ${spot.detail}
                </div>
            </div>
        `;

        // Position popover intelligently relative to viewport percentage
        let topPercent = spot.top + 8;
        if (topPercent > 65) topPercent = spot.top - 32;

        let leftPercent = spot.left;
        if (leftPercent > 70) leftPercent = 55;
        if (leftPercent < 25) leftPercent = 25;

        popover.style.top = `${topPercent}%`;
        popover.style.left = `${leftPercent}%`;
        popover.classList.remove('hidden');
    },

    closePopover() {
        const popover = document.getElementById('hotspot-popover');
        if (popover) popover.classList.add('hidden');
        document.querySelectorAll('.hotspot-beacon').forEach(b => b.classList.remove('active'));
    }
};
