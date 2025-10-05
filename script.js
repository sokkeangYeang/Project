document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('#menu-btn');
    const closeBtn = document.querySelector('#close-navbar');

    // Toggle menu
    menuBtn.addEventListener('click', () => {
        navbar.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    closeBtn.addEventListener('click', () => {
        closeMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !menuBtn.contains(e.target) && navbar.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu when scrolling
    window.addEventListener('scroll', () => {
        if (navbar.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu function
    function closeMenu() {
        navbar.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            closeMenu();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});