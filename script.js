/*
=====================================
CHARITY: WATER LANDING PAGE
INTERACTIVE FEATURES - ENHANCED VERSION
=====================================

This JavaScript file controls the interactive features of your charity: water landing page.
Enhanced with advanced animations, mobile responsiveness, and improved user experience.
*/

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.main-header');
    const heroSection = document.querySelector('.hero-section');
    
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.classList.remove('transparent');
        } else {
            header.classList.remove('scrolled');
            header.classList.add('transparent');
        }
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Initial call
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            this.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal-content, .reveal-card');
    
    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial call
    
    // Live Counter Update with acceleration on scroll
    const counterElement = document.getElementById('counter');
    let currentCount = 13022;
    let counterInterval;
    let counterSpeed = 3000; // Default speed in ms
    
    function startCounter() {
        counterInterval = setInterval(updateCounter, counterSpeed);
    }
    
    function updateCounter() {
        currentCount += Math.floor(Math.random() * 5) + 1;
        if (counterElement) {
            counterElement.textContent = currentCount.toLocaleString();
        }
    }
    
    // Accelerate counter when in view
    function handleCounterVisibility() {
        if (!counterElement) return;
        
        const counterTop = counterElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (counterTop < windowHeight && counterTop > 0) {
            // Element is in view, speed up counter
            clearInterval(counterInterval);
            counterSpeed = 1000;
            startCounter();
        } else {
            // Element is out of view, slow down counter
            clearInterval(counterInterval);
            counterSpeed = 3000;
            startCounter();
        }
    }
    
    window.addEventListener('scroll', handleCounterVisibility);
    startCounter(); // Initial start
    
    // Donation type buttons
    const donationTypeButtons = document.querySelectorAll('.donation-type-btn');
    
    donationTypeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            donationTypeButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update donation impact text based on donation type
            updateDonationImpact();
        });
    });
    
    // Donation amount buttons
    const donationAmountButtons = document.querySelectorAll('.donation-amount-btn');
    const customAmountContainer = document.querySelector('.custom-amount-container');
    
    donationAmountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            donationAmountButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show/hide custom amount input
            if (this.getAttribute('data-amount') === 'custom') {
                customAmountContainer.style.display = 'block';
            } else {
                customAmountContainer.style.display = 'none';
            }
            
            // Update donation impact text based on selected amount
            updateDonationImpact();
        });
    });
    
    // Custom amount input
    const customAmountInput = document.getElementById('custom-amount');
    
    if (customAmountInput) {
        customAmountInput.addEventListener('input', updateDonationImpact);
    }
    
    // Function to update donation impact text
    function updateDonationImpact() {
        const donationImpact = document.querySelector('.donation-impact');
        if (!donationImpact) return;
        
        const donationType = document.querySelector('.donation-type-btn.active')?.getAttribute('data-type') || 'monthly';
        const activeAmountBtn = document.querySelector('.donation-amount-btn.active');
        let donationAmount = activeAmountBtn?.getAttribute('data-amount') || '40';
        
        // If custom amount is selected, get the value from input
        if (donationAmount === 'custom' && customAmountInput) {
            donationAmount = customAmountInput.value || '0';
        }
        
        // Convert to number for calculations
        const amount = parseInt(donationAmount, 10);
        
        if (donationType === 'monthly') {
            const peopleHelped = Math.floor(amount * 0.3); // 0.3 people per dollar monthly
            donationImpact.textContent = `Your monthly donation of $${amount} will provide clean water to ${peopleHelped} people every year`;
        } else {
            const peopleHelped = Math.floor(amount * 0.1); // 0.1 people per dollar one-time
            donationImpact.textContent = `Your one-time donation of $${amount} will help provide clean water to ${peopleHelped} ${peopleHelped === 1 ? 'person' : 'people'}`;
        }
    }
    
    // Before-After Slider
    const sliders = document.querySelectorAll('.before-after-slider');
    
    sliders.forEach(slider => {
        const sliderHandle = slider.querySelector('.slider-handle');
        const beforeImage = slider.querySelector('.before-image');
        
        if (!sliderHandle || !beforeImage) return;
        
        let isDragging = false;
        
        // Mouse events
        sliderHandle.addEventListener('mousedown', startDrag);
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', endDrag);
        
        // Touch events
        sliderHandle.addEventListener('touchstart', startDrag);
        window.addEventListener('touchmove', drag);
        window.addEventListener('touchend', endDrag);
        
        function startDrag(e) {
            e.preventDefault();
            isDragging = true;
        }
        
        function drag(e) {
            if (!isDragging) return;
            
            const event = e.type.includes('mouse') ? e : e.touches[0];
            const sliderRect = slider.getBoundingClientRect();
            const x = Math.max(0, Math.min(event.clientX - sliderRect.left, sliderRect.width));
            const percent = (x / sliderRect.width) * 100;
            
            beforeImage.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
            sliderHandle.style.left = `${percent}%`;
        }
        
        function endDrag() {
            isDragging = false;
        }
    });
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all slides
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        testimonialDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide and dot
        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
    }
    
    // Initialize testimonial slider
    if (testimonialSlides.length > 0 && testimonialDots.length > 0) {
        // Add click event to dots
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
        
        // Add click event to prev button
        if (testimonialPrev) {
            testimonialPrev.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
                showSlide(currentSlide);
            });
        }
        
        // Add click event to next button
        if (testimonialNext) {
            testimonialNext.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % testimonialSlides.length;
                showSlide(currentSlide);
            });
        }
        
        // Auto rotate slides
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }, 5000);
    }
    
    // Impact Calculator
    const donationInput = document.getElementById('donation-amount');
    const calcBtn = document.getElementById('calc-impact-btn');
    const impactResult = document.getElementById('impact-result');
    
    function showImpact() {
        if (!donationInput || !impactResult) return;
        
        // Get the value from the input (how many dollars)
        const dollars = parseInt(donationInput.value, 10);
        
        // If the value is not a number or less than 1, show a message
        if (isNaN(dollars) || dollars < 1) {
            impactResult.textContent = 'Please enter a number greater than 0';
            return;
        }
        
        // Calculate impact (1 dollar = 1 person)
        impactResult.textContent = `Your donation will provide clean water to ${dollars} ${dollars === 1 ? 'person' : 'people'}!`;
        
        // Animate the result
        impactResult.classList.add('highlight-animation');
        setTimeout(() => {
            impactResult.classList.remove('highlight-animation');
        }, 1000);
    }
    
    // When the user clicks the button, show the impact
    if (calcBtn) {
        calcBtn.addEventListener('click', showImpact);
    }
    
    // Also update when the user changes the input
    if (donationInput) {
        donationInput.addEventListener('input', showImpact);
    }
    
    // Newsletter Signup (simple feedback, no backend)
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterMsg = document.getElementById('newsletter-message');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!newsletterEmail || !newsletterMsg) return;
            
            if (newsletterEmail.value.trim() === '') {
                newsletterMsg.textContent = 'Please enter your email.';
                newsletterMsg.style.color = '#F5402C';
            } else {
                newsletterMsg.textContent = 'Thank you for subscribing!';
                newsletterMsg.style.color = '#2E9DF7';
                newsletterForm.reset();
            }
        });
    }
    
    // Map Markers Interaction
    const mapMarkers = document.querySelectorAll('.map-marker');
    const mapInfo = document.querySelector('.map-info p');
    
    mapMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            const country = this.getAttribute('data-country');
            const projects = this.getAttribute('data-projects');
            
            if (mapInfo && country && projects) {
                mapInfo.innerHTML = `<strong>${country}</strong>: ${projects} water projects completed`;
            }
        });
    });
    
    // Video Play Button
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoContainer = this.closest('.story-video-container');
            if (!videoContainer) return;
            
            const videoThumbnail = videoContainer.querySelector('.video-thumbnail');
            if (!videoThumbnail) return;
            
            // In a real implementation, this would create a video element and play the video
            // For this demo, we'll just show an alert
            alert('Video would play here in the final implementation.');
        });
    });
    
    // Donation Form Validation
    const donateForm = document.querySelector('.donation-form');
    const donateSubmitBtn = document.querySelector('.donate-submit-btn');
    
    if (donateForm && donateSubmitBtn) {
        donateSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const donorName = document.getElementById('donor-name');
            const donorEmail = document.getElementById('donor-email');
            
            if (!donorName || !donorEmail) return;
            
            let isValid = true;
            
            if (donorName.value.trim() === '') {
                donorName.style.borderColor = '#F5402C';
                isValid = false;
            } else {
                donorName.style.borderColor = '';
            }
            
            if (donorEmail.value.trim() === '' || !isValidEmail(donorEmail.value)) {
                donorEmail.style.borderColor = '#F5402C';
                isValid = false;
            } else {
                donorEmail.style.borderColor = '';
            }
            
            if (isValid) {
                // In a real implementation, this would submit the form
                // For this demo, we'll just show an alert
                alert('Thank you for your donation! In a real implementation, this would process your payment.');
                donateForm.reset();
            }
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');
    
    function parallaxEffect() {
        if (!heroSection || !heroContent) return;
        
        const scrollPosition = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        heroContent.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
    }
    
    window.addEventListener('scroll', parallaxEffect);
    
    // Floating donation button visibility
    const floatingDonate = document.querySelector('.floating-donate');
    
    function toggleFloatingDonate() {
        if (!floatingDonate) return;
        
        const scrollPosition = window.pageYOffset;
        const donateSection = document.getElementById('donate');
        
        if (!donateSection) return;
        
        const donateSectionTop = donateSection.offsetTop;
        const windowHeight = window.innerHeight;
        
        // Show floating button when scrolled past hero section
        // Hide when near or in donate section
        if (scrollPosition > windowHeight && scrollPosition < donateSectionTop - windowHeight) {
            floatingDonate.style.display = 'block';
        } else {
            floatingDonate.style.display = 'none';
        }
    }
    
    window.addEventListener('scroll', toggleFloatingDonate);
    toggleFloatingDonate(); // Initial call
    
    // Pulse animation for CTA buttons
    const ctaButtons = document.querySelectorAll('.pulse-animation');
    
    function addPulseAnimation() {
        ctaButtons.forEach(button => {
            button.classList.add('pulse');
            
            setTimeout(() => {
                button.classList.remove('pulse');
            }, 1000);
        });
    }
    
    // Pulse every 5 seconds
    setInterval(addPulseAnimation, 5000);
    
    // Responsive image loading
    function loadResponsiveImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        images.forEach(img => {
            const src = img.getAttribute('data-src');
            if (src) {
                img.setAttribute('src', src);
                img.removeAttribute('data-src');
            }
        });
    }
    
    // Load responsive images on page load
    loadResponsiveImages();
    
    // Initialize any additional features
    initAdditionalFeatures();
});

// Additional features initialization
function initAdditionalFeatures() {
    // This function can be used to initialize any additional features
    // that might be added in the future
    
    // For example, initialize a gallery lightbox, video player, etc.
    console.log('charity: water landing page initialized successfully!');
}
