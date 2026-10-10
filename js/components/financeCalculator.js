/**
 * BMW Finance & Lease Calculator Component
 * Precision estimation tool supporting both Loan Purchase and Lease terms with real-time feedback.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.FinanceCalculator = {
    init() {
        const modal = document.getElementById('finance-modal');
        const closeBtn = document.getElementById('close-finance');
        const priceInput = document.getElementById('fin-price');
        const downInput = document.getElementById('fin-down');
        const rateInput = document.getElementById('fin-rate');
        const termSelect = document.getElementById('fin-term');
        const modeTabs = document.querySelectorAll('.finance-mode-tab');
        if (!modal) return;

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                window.BMW_APP.state.closeModal('finance');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                window.BMW_APP.state.closeModal('finance');
            }
        });

        // Mode switching (Finance vs Lease)
        modeTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const mode = tab.dataset.mode;
                window.BMW_APP.state.updateFinance({ mode });
                modeTabs.forEach(t => {
                    t.classList.remove('bg-white', 'text-black', 'active');
                    t.classList.add('text-gray-400');
                });
                tab.classList.add('bg-white', 'text-black', 'active');
                tab.classList.remove('text-gray-400');
                this.calculate();
            });
        });

        // Input change events
        [priceInput, downInput, rateInput, termSelect].forEach(el => {
            if (el) {
                el.addEventListener('input', () => this.calculate());
            }
        });

        // Modal open subscription
        window.BMW_APP.state.subscribe('modalOpened', ({ modal: activeModal }) => {
            if (activeModal === 'finance') {
                const financeState = window.BMW_APP.state.get().finance;
                if (priceInput) priceInput.value = financeState.price;
                if (downInput) downInput.value = Math.min(financeState.downPayment, financeState.price * 0.8);
                modal.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
                this.calculate();
            }
        });

        window.BMW_APP.state.subscribe('modalClosed', (closedModal) => {
            if (closedModal === 'finance') {
                modal.classList.add('opacity-0', 'pointer-events-none');
                if (!window.BMW_APP.state.get().activeModal) {
                    document.body.style.overflow = '';
                }
            }
        });
    },

    calculate() {
        const price = parseFloat(document.getElementById('fin-price').value) || 0;
        const down = parseFloat(document.getElementById('fin-down').value) || 0;
        const rate = parseFloat(document.getElementById('fin-rate').value) || 0;
        const term = parseInt(document.getElementById('fin-term').value) || 60;
        const mode = window.BMW_APP.state.get().finance.mode || 'finance';

        const principal = Math.max(0, price - down);
        let monthlyPayment = 0;
        let totalInterest = 0;
        let totalCost = 0;

        if (mode === 'finance') {
            const monthlyRate = (rate / 100) / 12;
            if (monthlyRate > 0 && term > 0) {
                monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
            } else if (term > 0) {
                monthlyPayment = principal / term;
            }
            totalCost = (monthlyPayment * term) + down;
            totalInterest = Math.max(0, (monthlyPayment * term) - principal);
        } else {
            // Lease model: residual ~ 55% of MSRP for 36 months, adjusted for term
            const residualPercent = term <= 36 ? 0.56 : term <= 48 ? 0.48 : 0.42;
            const residualValue = price * residualPercent;
            const depreciation = Math.max(0, principal - residualValue) / term;
            const moneyFactor = (rate / 100) / 24;
            const financeCharge = (principal + residualValue) * moneyFactor;
            monthlyPayment = depreciation + financeCharge;
            totalInterest = financeCharge * term;
            totalCost = (monthlyPayment * term) + down;
        }

        // Update DOM
        const resultEl = document.getElementById('fin-result');
        const subtextEl = document.getElementById('fin-subtext');
        const principalEl = document.getElementById('fin-principal-val');
        const interestEl = document.getElementById('fin-interest-val');
        const totalCostEl = document.getElementById('fin-total-val');

        if (resultEl) resultEl.textContent = '$' + Math.round(monthlyPayment).toLocaleString() + '/mo*';
        if (subtextEl) subtextEl.textContent = mode === 'finance' ? `Based on ${term}-month loan at ${rate}% APR` : `Based on ${term}-month lease estimate`;
        if (principalEl) principalEl.textContent = '$' + Math.round(principal).toLocaleString();
        if (interestEl) interestEl.textContent = '$' + Math.round(totalInterest).toLocaleString();
        if (totalCostEl) totalCostEl.textContent = '$' + Math.round(totalCost).toLocaleString();
    }
};
