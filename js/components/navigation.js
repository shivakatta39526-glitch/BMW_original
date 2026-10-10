/**
 * BMW Navigation Component
 * Controls desktop navbar, mobile drawer, scroll states, and modal triggers.
 */

window.BMW_APP = window.BMW_APP || {};
window.BMW_APP.components = window.BMW_APP.components || {};

window.BMW_APP.components.Navigation = {
    init() {
        const navbar = document.getElementById('navbar');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuBtn = document.getElementById('menu-btn');
        const closeMobileMenu = document.getElementById('close-mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const searchBtn = document.getElementById('search-btn');
        const dealerBtn = document.getElementById('dealer-btn');
        const accountBtn = document.getElementById('account-btn');
        const mobileDealerBtn = document.getElementById('mobile-dealer-btn');
        const mobileAccountBtn = document.getElementById('mobile-account-btn');

        // Scroll listener for glass navbar
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 40) {
                navbar.classList.add('glass-nav-scrolled', 'py-3');
                navbar.classList.remove('py-5');
            } else {
                navbar.classList.remove('glass-nav-scrolled', 'py-3');
                navbar.classList.add('py-5');
            }
            lastScrollY = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        // Mobile Menu toggle
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            });
        }

        const closeMobile = () => {
            if (mobileMenu) {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            }
        };

        if (closeMobileMenu) {
            closeMobileMenu.addEventListener('click', closeMobile);
        }

        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobile);
        });

        // Search trigger
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                window.BMW_APP.state.openModal('search');
            });
        }

        // Dealer Locator triggers
        if (dealerBtn) {
            dealerBtn.addEventListener('click', () => {
                window.BMW_APP.state.openModal('dealer');
            });
        }
        if (mobileDealerBtn) {
            mobileDealerBtn.addEventListener('click', () => {
                closeMobile();
                window.BMW_APP.state.openModal('dealer');
            });
        }

        // Account / My BMW triggers
        if (accountBtn) {
            accountBtn.addEventListener('click', () => {
                window.BMW_APP.state.openModal('account');
            });
        }
        if (mobileAccountBtn) {
            mobileAccountBtn.addEventListener('click', () => {
                closeMobile();
                window.BMW_APP.state.openModal('account');
            });
        }

        // Global keyboard shortcut for search (Ctrl+K or /)
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                window.BMW_APP.state.openModal('search');
            }
            if (e.key === 'Escape') {
                const activeModal = window.BMW_APP.state.get().activeModal;
                if (activeModal) {
                    window.BMW_APP.state.closeModal(activeModal);
                }
                closeMobile();
            }
        });
    }
};
