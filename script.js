// This is a simple JavaScript file to add interactivity to the Water Hope landing page

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
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
    
    donationAmountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            donationAmountButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update donation impact text based on selected amount
            updateDonationImpact();
        });
    });
    
    // Function to update donation impact text
    function updateDonationImpact() {
        const donationType = document.querySelector('.donation-type-btn.active').getAttribute('data-type');
        const donationAmount = document.querySelector('.donation-amount-btn.active').getAttribute('data-amount');
        const donationImpact = document.querySelector('.donation-impact');
        
        if (donationType === 'monthly') {
            if (donationAmount === '10') {
                donationImpact.textContent = 'Your monthly donation of $10 will provide clean water to 3 people every year';
            } else if (donationAmount === '40') {
                donationImpact.textContent = 'Your monthly donation of $40 will provide clean water to 12 people every year';
            } else if (donationAmount === '100') {
                donationImpact.textContent = 'Your monthly donation of $100 will provide clean water to 30 people every year';
            } else {
                donationImpact.textContent = 'Your monthly donation will help provide clean water to people in need';
            }
        } else {
            if (donationAmount === '10') {
                donationImpact.textContent = 'Your one-time donation of $10 will help provide clean water to a person in need';
            } else if (donationAmount === '40') {
                donationImpact.textContent = 'Your one-time donation of $40 will help provide clean water to a family';
            } else if (donationAmount === '100') {
                donationImpact.textContent = 'Your one-time donation of $100 will help provide clean water to a small community';
            } else {
                donationImpact.textContent = 'Your one-time donation will help provide clean water to people in need';
            }
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });
});
