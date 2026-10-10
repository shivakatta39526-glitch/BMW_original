/**
 * BMW Test Drive Modal Component
 * Validation, dealer selection, vehicle pre-selection, and simulated confirmation screen.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.TestDriveModal = {
    init() {
        const modal = document.getElementById('test-drive-modal');
        const form = document.getElementById('test-drive-form');
        const closeBtn = document.getElementById('close-test-drive');
        const modelSelect = document.getElementById('test-drive-model-select');
        const dealerSelect = document.getElementById('test-drive-dealer-select');
        if (!modal) return;

        // Populate model and dealer dropdowns
        if (modelSelect) {
            modelSelect.innerHTML = window.BMW_DATA.vehicles.map(v => `
                <option value="${v.id}">${v.name} (${v.category} Series - ${v.performance.hp} HP)</option>
            `).join('');
        }

        if (dealerSelect) {
            dealerSelect.innerHTML = window.BMW_DATA.dealers.map(d => `
                <option value="${d.id}">${d.name} (${d.city}, ${d.state} - ${d.distance})</option>
            `).join('');
        }

        // Set minimum date to tomorrow
        const dateInput = document.getElementById('test-drive-date');
        if (dateInput) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.min = tomorrow.toISOString().split('T')[0];
            dateInput.value = tomorrow.toISOString().split('T')[0];
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                window.BMW_APP.state.closeModal('test-drive');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                window.BMW_APP.state.closeModal('test-drive');
            }
        });

        // Form submission
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit(new FormData(form));
            });
        }

        // State subscriptions
        window.BMW_APP.state.subscribe('modalOpened', ({ modal: activeModal, data }) => {
            if (activeModal === 'test-drive') {
                const preselect = window.BMW_APP.state.get().testDrivePreselect;
                if (modelSelect && preselect.vehicleId) {
                    modelSelect.value = preselect.vehicleId;
                }
                if (dealerSelect && preselect.dealerId) {
                    dealerSelect.value = preselect.dealerId;
                }
                this.resetToFormState();
                modal.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
            }
        });

        window.BMW_APP.state.subscribe('modalClosed', (closedModal) => {
            if (closedModal === 'test-drive') {
                modal.classList.add('opacity-0', 'pointer-events-none');
                if (!window.BMW_APP.state.get().activeModal) {
                    document.body.style.overflow = '';
                }
            }
        });
    },

    handleSubmit(formData) {
        const vehicleId = formData.get('vehicle') || document.getElementById('test-drive-model-select').value;
        const dealerId = formData.get('dealer') || document.getElementById('test-drive-dealer-select').value;
        const name = formData.get('name') || document.getElementById('test-drive-name').value;
        const email = formData.get('email') || document.getElementById('test-drive-email').value;
        const phone = formData.get('phone') || document.getElementById('test-drive-phone').value;
        const date = formData.get('date') || document.getElementById('test-drive-date').value;

        const vehicle = window.BMW_DATA.getVehicleById(vehicleId);
        const dealer = window.BMW_DATA.dealers.find(d => d.id === dealerId) || window.BMW_DATA.dealers[0];

        // Save booking to state
        const booking = window.BMW_APP.state.addTestDriveBooking({
            fullName: name,
            email: email,
            phone: phone,
            vehicleId: vehicle.id,
            vehicleName: vehicle.name,
            dealerName: dealer.name,
            dealerAddress: dealer.address,
            date: date
        });

        // Show confirmation UI inside modal
        this.showConfirmation(booking, vehicle, dealer);
    },

    showConfirmation(booking, vehicle, dealer) {
        const contentContainer = document.getElementById('test-drive-content-container');
        if (!contentContainer) return;

        contentContainer.innerHTML = `
            <div class="text-center py-6">
                <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="text-xs font-bold uppercase tracking-widest text-emerald-400">Request Confirmed</span>
                <h3 class="text-2xl font-extrabold text-white mt-1 mb-2">You're Scheduled to Drive</h3>
                <p class="text-xs font-mono text-gray-400 mb-6">Reservation Ref: <span class="text-bmw-blue font-bold">${booking.id}</span></p>

                <div class="glass rounded-xl p-5 text-left border border-white/10 mb-6 space-y-3 text-sm">
                    <div class="flex justify-between items-center pb-2 border-b border-white/5">
                        <span class="text-gray-400">Selected Vehicle</span>
                        <span class="font-bold text-white">${vehicle.name}</span>
                    </div>
                    <div class="flex justify-between items-center pb-2 border-b border-white/5">
                        <span class="text-gray-400">Authorized BMW Center</span>
                        <span class="font-bold text-white">${dealer.name}</span>
                    </div>
                    <div class="flex justify-between items-center pb-2 border-b border-white/5">
                        <span class="text-gray-400">Location</span>
                        <span class="text-xs text-gray-300">${dealer.address}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-400">Date</span>
                        <span class="font-bold text-bmw-blue">${booking.date}</span>
                    </div>
                </div>

                <div class="bg-blue-950/40 border border-blue-800/40 rounded-lg p-3 text-[11px] text-blue-200 mb-6 text-left">
                    <strong>Demonstration Note:</strong> This is an interactive frontend demonstration. In production, this request triggers a secure webhook to the BMW Dealership CRM and generates an email calendar invite.
                </div>

                <div class="flex gap-3">
                    <button onclick="window.BMW_APP.state.closeModal('test-drive')" class="flex-1 py-3 bg-white text-black font-bold text-xs tracking-wider rounded hover:bg-gray-200 transition-colors">
                        DONE
                    </button>
                    <button onclick="window.BMW_APP.state.openModal('account')" class="flex-1 py-3 bg-white/10 text-white font-bold text-xs tracking-wider rounded hover:bg-white/20 transition-colors">
                        VIEW IN MY BMW
                    </button>
                </div>
            </div>
        `;
    },

    resetToFormState() {
        const contentContainer = document.getElementById('test-drive-content-container');
        if (!contentContainer) return;

        // Restore original form HTML if replaced by confirmation
        const form = document.getElementById('test-drive-form');
        if (!form) {
            window.location.reload(); // fallback
        }
    }
};
