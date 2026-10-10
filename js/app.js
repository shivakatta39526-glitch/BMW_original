/**
 * BMW Ultimate Driving Machine - Master Application Orchestrator
 * Bootstraps all reactive components, intersection observers, and interaction flows.
 */

window.BMW_APP = window.BMW_APP || {};

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. Initialize all core UI components
    const components = window.BMW_APP.components || {};

    if (components.Navigation) components.Navigation.init();
    if (components.ModelExplorer) components.ModelExplorer.init();
    if (components.VehicleModal) components.VehicleModal.init();
    if (components.Configurator) components.Configurator.init();
    if (components.MPerformance) components.MPerformance.init();
    if (components.ElectricBMW) components.ElectricBMW.init();
    if (components.Technology) components.Technology.init();
    if (components.InteriorExperience) components.InteriorExperience.init();
    if (components.Comparison) components.Comparison.init();
    if (components.Search) components.Search.init();
    if (components.TestDriveModal) components.TestDriveModal.init();
    if (components.FinanceCalculator) components.FinanceCalculator.init();
    if (components.DealerModal) components.DealerModal.init();
    if (components.AccountModal) components.AccountModal.init();

    // 2. Set up Scroll Fade-In Observer
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop unobserving to allow smooth re-entry if desired, or keep visible
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in-section').forEach(el => {
        scrollObserver.observe(el);
    });

    // 3. Connect static and feature buttons from HTML sections
    // Hero buttons
    const heroExploreBtn = document.getElementById('hero-explore-btn');
    if (heroExploreBtn) {
        heroExploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const heroBuildBtn = document.getElementById('hero-build-btn');
    if (heroBuildBtn) {
        heroBuildBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.BMW_APP.state.openModal('configurator', 'm2');
        });
    }

    // Z4 Configure button
    const z4ConfigureBtn = document.getElementById('z4-configure-btn');
    if (z4ConfigureBtn) {
        z4ConfigureBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.BMW_APP.state.openModal('configurator', 'z4');
        });
    }

    const z4ExploreBtn = document.getElementById('z4-explore-btn');
    if (z4ExploreBtn) {
        z4ExploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.BMW_APP.state.openModal('detail', 'z4');
        });
    }

    // Offers / Test Drive & Finance CTA Section buttons
    const ctaTestDriveBtn = document.getElementById('test-drive-btn');
    if (ctaTestDriveBtn) {
        ctaTestDriveBtn.addEventListener('click', () => {
            window.BMW_APP.state.openModal('test-drive');
        });
    }

    const ctaFinanceBtn = document.getElementById('finance-btn');
    if (ctaFinanceBtn) {
        ctaFinanceBtn.addEventListener('click', () => {
            window.BMW_APP.state.openModal('finance');
        });
    }

    console.log('BMW Ultimate Driving Machine application successfully initialized.');
});
