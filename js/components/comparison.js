/**
 * BMW Comparison Component
 * Compares up to three models side-by-side across performance, range, price, and specs.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.Comparison = {
    init() {
        const tableContainer = document.getElementById('comparison-table');
        if (!tableContainer) return;

        this.populateDropdowns();
        this.renderTable();

        // Subscribe to comparison state updates
        window.BMW_APP.state.subscribe('comparisonUpdated', () => {
            this.syncDropdownValues();
            this.renderTable();
        });

        // Dropdown change listeners
        [1, 2, 3].forEach(slotNum => {
            const select = document.getElementById(`compare-select-${slotNum}`);
            if (select) {
                select.addEventListener('change', (e) => {
                    const vehicleId = e.target.value;
                    window.BMW_APP.state.setComparisonSlot(slotNum - 1, vehicleId);
                });
            }
        });
    },

    populateDropdowns() {
        const allVehicles = window.BMW_DATA.vehicles;
        [1, 2, 3].forEach(slotNum => {
            const select = document.getElementById(`compare-select-${slotNum}`);
            if (!select) return;

            select.innerHTML = '<option value="">-- Empty Slot --</option>' +
                allVehicles.map(v => `<option value="${v.id}">${v.name} (${v.category} Series)</option>`).join('');
        });
        this.syncDropdownValues();
    },

    syncDropdownValues() {
        const selectedIds = window.BMW_APP.state.get().comparisonVehicleIds;
        [1, 2, 3].forEach(slotNum => {
            const select = document.getElementById(`compare-select-${slotNum}`);
            if (select) {
                select.value = selectedIds[slotNum - 1] || '';
            }
        });
    },

    renderTable() {
        const container = document.getElementById('comparison-table');
        if (!container) return;

        const selectedIds = window.BMW_APP.state.get().comparisonVehicleIds.filter(Boolean);
        if (selectedIds.length === 0) {
            container.innerHTML = `
                <div class="p-12 text-center">
                    <svg class="w-12 h-12 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                    <p class="text-gray-400 text-lg font-medium">Select up to three BMW models using the dropdowns above or "+ Compare" buttons to inspect specifications side-by-side.</p>
                </div>
            `;
            return;
        }

        const comparedVehicles = selectedIds.map(id => window.BMW_DATA.getVehicleById(id)).filter(Boolean);

        const specs = [
            { label: 'Category', render: (v) => `<span class="uppercase tracking-widest text-xs font-bold ${v.category === 'M' ? 'text-bmw-mred' : v.category === 'i' ? 'text-bmw-icyan' : 'text-bmw-blue'}">${v.category} Series</span>` },
            { label: 'Starting Price (Est.)', render: (v) => `<span class="font-bold text-white font-mono text-base">$${v.price.toLocaleString()}*</span>` },
            { label: 'Horsepower', render: (v) => `<span class="font-extrabold font-mono text-lg ${v.category === 'M' ? 'text-bmw-mred' : v.category === 'i' ? 'text-bmw-icyan' : 'text-bmw-blue'}">${v.performance.hp} HP</span>` },
            { label: '0–60 mph Acceleration', render: (v) => `<span class="font-bold font-mono text-white">${v.performance.acceleration}</span>` },
            { label: 'Top Speed', render: (v) => `<span class="font-medium text-gray-300 font-mono">${v.performance.topSpeed}</span>` },
            { label: 'Electric Range', render: (v) => v.electricRange ? `<span class="font-bold text-bmw-icyan font-mono">${v.electricRange} mi</span>` : '<span class="text-gray-500">N/A (ICE)</span>' },
            { label: 'Drivetrain', render: (v) => `<span class="text-sm text-gray-300">${v.performance.drivetrain}</span>` },
            { label: 'Engine / Motor', render: (v) => `<span class="text-xs text-gray-400 leading-tight block">${v.performance.engine}</span>` },
            { label: 'Efficiency / Fuel', render: (v) => `<span class="text-xs font-mono text-gray-400">${v.fuelEconomy || 'Standard'}</span>` }
        ];

        let html = `
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-white/10 bg-white/[0.02]">
                            <th class="p-6 text-gray-400 font-medium text-xs uppercase tracking-widest w-48">Specification</th>
                            ${comparedVehicles.map((v, idx) => `
                                <th class="p-6 text-center min-w-[240px]">
                                    <div class="relative group">
                                        <button onclick="window.BMW_APP.state.removeFromComparison('${v.id}')" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neutral-800 hover:bg-neutral-700 text-gray-400 hover:text-white flex items-center justify-center text-xs transition-colors" title="Remove from comparison">
                                            ✕
                                        </button>
                                        <img src="${v.image}" alt="${v.name}" class="w-36 h-24 object-cover rounded-lg mx-auto mb-3 shadow-lg">
                                        <h4 class="font-bold text-lg text-white mb-2">${v.name}</h4>
                                        <div class="flex justify-center gap-2">
                                            <button onclick="window.BMW_APP.state.openModal('detail', '${v.id}')" class="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-[11px] font-semibold tracking-wider transition-colors">
                                                DETAILS
                                            </button>
                                            <button onclick="window.BMW_APP.state.openModal('configurator', '${v.id}')" class="px-3 py-1 bg-bmw-blue hover:bg-blue-600 text-white rounded text-[11px] font-semibold tracking-wider transition-colors">
                                                BUILD
                                            </button>
                                        </div>
                                    </div>
                                </th>
                            `).join('')}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-white/5 text-sm">
                        ${specs.map(spec => `
                            <tr class="hover:bg-white/[0.02] transition-colors">
                                <td class="p-5 text-gray-400 font-medium text-xs uppercase tracking-wider">${spec.label}</td>
                                ${comparedVehicles.map(v => `
                                    <td class="p-5 text-center">${spec.render(v)}</td>
                                `).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        container.innerHTML = html;
    }
};
