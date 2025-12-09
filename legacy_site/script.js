document.addEventListener('DOMContentLoaded', () => {
    console.log('Gaur Commerce Classes website loaded.');

    // Mobile Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // --- Advanced Feature 1: Course Filtering (courses.html) ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                courseCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        // Add animation class
                        card.classList.add('fade-in');
                        setTimeout(() => card.classList.remove('fade-in'), 500);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Advanced Feature 2: Contact Form Validation (contact.html) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Simple Validation
            const name = document.getElementById('name');
            const phone = document.getElementById('phone');
            const message = document.getElementById('message');

            if (name.value.trim().length < 3) {
                isValid = false;
                showError(name, 'Name must be at least 3 characters');
            } else {
                clearError(name);
            }

            if (!/^\d{10}$/.test(phone.value.trim())) {
                isValid = false;
                showError(phone, 'Enter a valid 10-digit phone number');
            } else {
                clearError(phone);
            }

            if (isValid) {
                // Simulate success
                document.getElementById('formStatus').style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    document.getElementById('formStatus').style.display = 'none';
                }, 3000);
            }
        });
    }

    function showError(input, msg) {
        const formGroup = input.parentElement;
        let error = formGroup.querySelector('.error-msg');
        if (!error) {
            error = document.createElement('small');
            error.className = 'error-msg';
            error.style.color = 'red';
            formGroup.appendChild(error);
        }
        error.innerText = msg;
        input.style.borderColor = 'red';
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-msg');
        if (error) {
            error.innerText = '';
        }
        input.style.borderColor = '#ddd';
    }

    // --- Advanced Feature 3: Scroll Animation ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.course-card, .faculty-card, .facility-item').forEach(el => {
        el.classList.add('hidden-el');
        observer.observe(el);
    });

});
