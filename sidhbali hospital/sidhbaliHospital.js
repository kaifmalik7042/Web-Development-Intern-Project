const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        
        function scrollToAppointment() {
            document.querySelector('#appointment').scrollIntoView({
                behavior: 'smooth'
            });
        }

        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.1
        });

        
        document.querySelector('.hero-content').classList.add('fade-in');
        observer.observe(document.querySelector('.services-grid'));
        observer.observe(document.querySelector('.appointment-container'));

        
        document.getElementById('appointmentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                department: document.getElementById('department').value,
                date: document.getElementById('date').value,
                message: document.getElementById('message').value
            };

            alert('Appointment request submitted successfully! We will contact you shortly.');
            this.reset();
        });

        gsap.from(".service-card", {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".services-grid",
                start: "top 80%"
            }
        });

        
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        });