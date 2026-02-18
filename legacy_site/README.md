# CORE Research Group Website

This is the website for the Machine Learning and COgnitive SoftwaRE (CORE) research group at TU Clausthal.

## Structure

The website uses a modular component-based architecture:

### Components
- `components/header.html` - Shared header with navigation and metadata
- `components/footer.html` - Shared footer
- `js/components.js` - Component loader utility

### Pages
- `index.html` - Main homepage
- `publications.html` - Publications page
- `teaching.html` - Teaching information
- `projects.html` - European AI Team Projects
- `seminar.html` - Seminar topics and process
- `theses.html` - Bachelor and Master thesis topics

## Development

### Adding New Pages
1. Create a new HTML file following the template structure
2. Include the header and footer placeholders:
   ```html
   <!doctype html>
   <html lang=en>
   <head>   
       <!-- Header component will be loaded here -->
       <div id="header-placeholder"></div>
   </head>
   <body>
       <!-- Your page content here -->
       
       <!-- Footer component will be loaded here -->
       <div id="footer-placeholder"></div>
       
       <!-- Load component loader -->
       <script src="js/components.js"></script>
   </body>
   </html>
   ```

### Modifying Shared Components
- **Header**: Edit `components/header.html` to change navigation, metadata, or styling
- **Footer**: Edit `components/footer.html` to change the footer content
- **Navigation**: Update the navigation links in `components/header.html`

### Page-Specific Titles
The component loader automatically sets page-specific titles. To add a new page title, update the `setPageTitle()` method in `js/components.js`.

## Features

- **Modular Design**: Shared header and footer across all pages
- **Responsive Navigation**: Mobile-friendly navigation with smooth scrolling
- **Dynamic Content**: Publications loaded from JSON data
- **Consistent Styling**: Bootstrap-based responsive design

## Maintenance

- All shared elements (header, footer, navigation) are defined in single locations
- CSS and JavaScript are loaded once and shared across all pages
- Page-specific content is isolated in individual HTML files
- The component loader handles all shared functionality automatically