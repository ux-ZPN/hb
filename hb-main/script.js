
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
            } else {
                nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card, .stat-card').forEach(el => {
            observer.observe(el);
        });
    