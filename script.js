document.addEventListener("DOMContentLoaded", function() {
    // A function to handle the email form submission
    function sendEmail(e) {
        e.preventDefault(); // Prevent the form from submitting normally

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = "Portfolio Inquiry from " + name;

        // Construct the mailto link
        const mailtoLink = `mailto:shrutimandape07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

        // Open the user's email client
        window.location.href = mailtoLink;
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for active navigation links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${id}"]`);

            // Check if navLink is not null before trying to access its classList
            if (navLink) {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Header background on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(11, 2, 19, 0.9)';
            header.classList.add('shadow-lg');
        } else {
            header.style.backgroundColor = 'rgba(11, 2, 19, 0.9)';
            header.classList.remove('shadow-lg');
        }
    });

    // "Back to Top" button functionality
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { // Show button after scrolling 200px
            backToTopButton.style.display = 'block';
            setTimeout(() => backToTopButton.classList.add('show'), 10);
        } else {
            backToTopButton.classList.remove('show');
            setTimeout(() => backToTopButton.style.display = 'none', 300);
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
