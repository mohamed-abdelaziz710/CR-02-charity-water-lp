/*
=====================================
WATER HOPE CHARITY LANDING PAGE
CUSTOMIZATION GUIDE FOR STUDENTS
=====================================

This JavaScript file controls the interactive features of your charity landing page.
Here's how you can customize different parts:

1. DONATION AMOUNTS:
   - To change donation amounts, look for lines with 'data-amount'
   - Current amounts: $10, $40, $100
   - You can modify the impact messages below in the updateDonationImpact() function

2. DONATION IMPACT MESSAGES:
   - Find the updateDonationImpact() function (around line 45)
   - Change the text inside the single quotes to customize what each donation accomplishes
   - Example: 'Your donation of $10 will provide clean water to 1 person'

3. MOBILE MENU:
   - The mobile menu automatically works with your HTML
   - Make sure your HTML has elements with classes 'mobile-menu-toggle' and 'main-nav'

4. SMOOTH SCROLLING:
   - This makes navigation links scroll smoothly to different sections
   - Works automatically with any links that start with '#'

5. DONATION TYPES:
   - Currently supports 'monthly' and 'one-time' donations
   - You can modify the messages for each type in the updateDonationImpact() function

Remember: Always test your changes by opening the HTML file in a web browser!
*/

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
    
    // Live Counter Update
    const counterElement = document.getElementById('counter');
    let currentCount = 13000;

    function updateCounter() {
        currentCount += Math.floor(Math.random() * 5) + 1; // Increment by a random number between 1 and 5
        counterElement.textContent = currentCount.toLocaleString(); // Update the counter with a formatted number
    }

    setInterval(updateCounter, 3000); // Update the counter every 3 seconds

    // Pulse animation for the hero donate button every 3 seconds
    // Select the hero donate button (first .cta-button.primary in hero section)
    const heroDonateBtn = document.querySelector('.hero-section .cta-button.primary');
    if (heroDonateBtn) {
        setInterval(function() {
            heroDonateBtn.classList.add('pulse');
            setTimeout(function() {
                heroDonateBtn.classList.remove('pulse');
            }, 700); // Match animation duration
        }, 3000);
    }
    
    // Impact Calculator: احسب تأثيرك
    // Get the input, button, and result elements
    const donationInput = document.getElementById('donation-amount');
    const calcBtn = document.getElementById('calc-impact-btn');
    const impactResult = document.getElementById('impact-result');

    // Function to calculate and show the impact
    function showImpact() {
        // Get the value from the input (how many dollars)
        var dollars = parseInt(donationInput.value, 10);
        // If the value is not a number or less than 1, show a message
        if (isNaN(dollars) || dollars < 1) {
            impactResult.textContent = 'الرجاء إدخال رقم أكبر من 0';
            return;
        }
        // Each $1 changes 1 life
        impactResult.textContent = 'ستغير حياة ' + dollars + ' شخص' + (dollars > 1 ? 'اً' : '') + ' بالماء النظيف!';
    }

    // When the user clicks the button, show the impact
    if (calcBtn) {
        calcBtn.addEventListener('click', showImpact);
    }
    // Also update when the user changes the input
    if (donationInput) {
        donationInput.addEventListener('input', showImpact);
    }
});
