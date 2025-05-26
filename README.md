# charity: water Landing Page

This project is a responsive landing page for charity: water, designed to showcase their mission of providing clean water to people in developing countries. The landing page is built with HTML, CSS, and JavaScript, following charity: water's brand guidelines.

## Project Overview

This landing page was created as part of a school project to demonstrate web development skills and digital storytelling. It includes:

- A responsive design that works on all devices
- Interactive elements like donation calculators and live counters
- Sections that tell the story of charity: water's impact
- A donation form with multiple options
- Newsletter signup

## Brand Guidelines Implementation

### Colors

The landing page uses charity: water's official brand colors:

**Primary Colors:**

- Yellow: #FFC907 - Used for call-to-action buttons and highlights
- Blue: #2E9DF7 - Used for secondary elements, links, and accents

**Secondary Colors:**

- Light Blue: #8BD1CB
- Green: #4FCB53
- Orange: #FF902A
- Red: #F5402C
- Dark Green: #159A48
- Pink: #F16061

### Typography

Since the actual brand fonts (Proxima Nova and Avenir) require licensing, the landing page uses similar Google Fonts:

- Montserrat - As a substitute for Proxima Nova
- Nunito Sans - As a substitute for Avenir

## File Structure

- `index.html` - The main HTML file containing the structure of the landing page
- `styles.css` - The CSS file containing all styling for the landing page
- `script.js` - The JavaScript file adding interactivity to the page

## Features

### Hero Section

- Engaging headline and subheadline
- Live counter showing people served
- Primary call-to-action button with pulse animation

### Why Water Section

- Four key impact areas: Health, Education, Women Empowerment, and Economic Growth
- Hover effects on cards for better engagement

### Story Section

- Personal story of someone impacted by clean water
- Emotional quote to create connection

### Impact Section

- Statistics about charity: water's impact
- Interactive donation calculator
- Live counter of lives impacted

### Donation Section

- Toggle between monthly and one-time donations
- Multiple donation amount options
- Dynamic impact messaging based on selection

### Newsletter Section

- Email signup with validation
- Success/error messaging

### Footer

- Organization information
- Quick links
- Contact information
- Social media links

## Interactive Elements

The landing page includes several interactive elements:

1. **Mobile Menu** - Toggles navigation on mobile devices
2. **Donation Type Selection** - Switches between monthly and one-time donations
3. **Donation Amount Selection** - Allows users to select different donation amounts
4. **Impact Calculator** - Shows how many people will get clean water based on donation amount
5. **Live Counters** - Dynamically increasing numbers to show impact
6. **Newsletter Signup** - Form with validation and feedback
7. **Smooth Scrolling** - For navigation links
8. **Pulse Animation** - On the main CTA button to draw attention

## Responsive Design

The landing page is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones

The responsive design uses:

- Flexible layouts with CSS Flexbox
- Media queries for different screen sizes
- Relative units (rem, %, vh) instead of fixed pixels
- Mobile-first approach for certain elements

## How to Customize

### Changing Text Content

To change any text on the page, open the `index.html` file in a text editor and modify the text between the HTML tags.

### Replacing Images

To replace the images with your own:

1. Find images that match the emotional and visual style of charity: water
2. Update the image URLs in the HTML file
3. Make sure your images are responsive and properly sized

### Changing Colors

The main colors are defined as CSS variables at the top of the `styles.css` file:

```css
:root {
    /* Primary Colors */
    --primary-yellow: #FFC907; /* charity: water yellow */
    --primary-blue: #2E9DF7;   /* charity: water blue */
    
    /* Secondary Colors */
    --light-blue: #8BD1CB;
    --green: #4FCB53;
    --orange: #FF902A;
    --red: #F5402C;
    --dark-green: #159A48;
    --pink: #F16061;
    /* ... */
}
```

### Modifying Donation Options

To change the donation amounts or types, edit the corresponding buttons in the HTML and update the JavaScript functions in `script.js`.

## Deployment

To deploy this landing page:

1. Upload all files (HTML, CSS, JS) to your web hosting service
2. Make sure all file paths are correct
3. Test the page on different devices to ensure everything works properly

## Design Decisions

### Visual Hierarchy

- The yellow color is used for primary CTAs to draw attention
- The blue color is used for secondary elements and accents
- Large, bold headlines create clear hierarchy
- White space is used to separate sections and improve readability

### Emotional Connection

- Personal stories and quotes create emotional connection
- Images show the impact of clean water
- Live counters make the impact feel real and immediate
- Simple, clear language communicates the mission

### Conversion Optimization

- Multiple CTAs throughout the page
- Clear value proposition in the hero section
- Trust indicators (100% model, secure payment)
- Multiple donation options to accommodate different preferences
- Pulse animation on primary CTA to draw attention

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for stock photography

## License

This project is created for educational purposes only. The charity: water brand and assets belong to charity: water. 