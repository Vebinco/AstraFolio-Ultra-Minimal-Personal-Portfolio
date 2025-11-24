
document.addEventListener('DOMContentLoaded', () => {

    //========================================================================
    // STICKY HEADER
    //========================================================================
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    //========================================================================
    // HAMBURGER MENU
    //========================================================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('noscroll');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('noscroll');
        });
    });

    //========================================================================
    // SCROLL-TRIGGERED FADE-IN ANIMATIONS
    //========================================================================
    const scrollSections = document.querySelectorAll('.scroll-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    scrollSections.forEach(section => {
        observer.observe(section);
    });

    //========================================================================
    // MOUSE GLOW EFFECT
    //========================================================================
    const mouseGlow = document.querySelector('.mouse-glow');
    document.addEventListener('mousemove', e => {
        mouseGlow.style.left = `${e.clientX}px`;
        mouseGlow.style.top = `${e.clientY}px`;
    });

    document.body.addEventListener('mouseenter', () => {
        mouseGlow.style.opacity = '1';
    });

    document.body.addEventListener('mouseleave', () => {
        mouseGlow.style.opacity = '0';
    });

    //========================================================================
    // SMOOTH SCROLLING WITH HEADER OFFSET
    //========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const header = document.querySelector('.header');
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
