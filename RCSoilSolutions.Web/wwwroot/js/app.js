// Initialize AOS animation library
window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar behavior on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Counter animation for statistics
window.animateCounter = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.innerHTML = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Initialize interactive map
window.initializeMap = () => {
    // This function will be used later when implementing a map feature
    console.log("Map initialized");
};

// Method to call from Blazor to show/hide mobile menu
window.toggleMobileMenu = (show) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        if (show) {
            mobileMenu.classList.add('show');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('show');
            document.body.style.overflow = '';
        }
    }
};

// Method to scroll to top smoothly
window.scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Detect when elements enter viewport for animations
window.createIntersectionObserver = (dotNetHelper) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                dotNetHelper.invokeMethodAsync('OnElementVisible', entry.target.id);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.observe-visibility').forEach(element => {
        observer.observe(element);
    });
    
    return observer;
}; 