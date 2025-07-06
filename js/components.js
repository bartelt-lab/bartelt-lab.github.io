// Component loader utility
class ComponentLoader {
    constructor() {
        this.components = {};
    }

    // Load a component from a file
    async loadComponent(name, selector) {
        try {
            const response = await fetch(`components/${name}.html`);
            const html = await response.text();
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = html;
                this.components[name] = html;
            }
        } catch (error) {
            console.error(`Failed to load component ${name}:`, error);
        }
    }

    // Load header component
    async loadHeader() {
        try {
            const response = await fetch('components/header.html');
            const html = await response.text();
            
            // Parse the HTML to separate head content from body content
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Move head content to document head
            const headContent = doc.querySelector('head');
            if (headContent) {
                const headElements = headContent.children;
                for (let element of headElements) {
                    // Check if element already exists to avoid duplicates
                    const existingElement = document.head.querySelector(`[href="${element.getAttribute('href')}"]`) ||
                                         document.head.querySelector(`[src="${element.getAttribute('src')}"]`) ||
                                         document.head.querySelector(`[id="${element.getAttribute('id')}"]`);
                    if (!existingElement) {
                        document.head.appendChild(element.cloneNode(true));
                    }
                }
            }
            
            // Load body content into header placeholder
            const bodyContent = doc.querySelector('body');
            if (bodyContent) {
                const headerPlaceholder = document.querySelector('#header-placeholder');
                if (headerPlaceholder) {
                    headerPlaceholder.innerHTML = bodyContent.innerHTML;
                }
            }
            
            this.initializeNavigation();
            this.setPageTitle();
        } catch (error) {
            console.error('Failed to load header component:', error);
        }
    }

    // Load footer component
    async loadFooter() {
        await this.loadComponent('footer', '#footer-placeholder');
    }

    // Set page-specific title
    setPageTitle() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const titleElement = document.querySelector('#page-title');
        
        if (titleElement) {
            let pageTitle = 'Machine Learning and COgnitive SoftwaRE (CORE)';
            
            switch (currentPage) {
                case 'publications.html':
                    pageTitle = 'Publications - Machine Learning and COgnitive SoftwaRE (CORE)';
                    break;
                case 'teaching.html':
                    pageTitle = 'Teaching - Machine Learning and COgnitive SoftwaRE (CORE)';
                    break;
                case 'projects.html':
                    pageTitle = 'European AI Team Projects - Machine Learning and COgnitive SoftwaRE (CORE)';
                    break;
                case 'seminar.html':
                    pageTitle = 'Seminars - Machine Learning and COgnitive SoftwaRE (CORE)';
                    break;
                case 'theses.html':
                    pageTitle = 'Theses - Machine Learning and COgnitive SoftwaRE (CORE)';
                    break;
                default:
                    pageTitle = 'Machine Learning and COgnitive SoftwaRE (CORE)';
            }
            
            titleElement.textContent = pageTitle;
            document.title = pageTitle;
        }
    }

    // Initialize navigation functionality
    initializeNavigation() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[data-scroll]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Mobile navigation toggle
        const navbarToggle = document.querySelector('.navbar-toggle');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggle && navbarCollapse) {
            navbarToggle.addEventListener('click', () => {
                navbarCollapse.classList.toggle('in');
            });
        }

        // Removed active navigation highlighting
        // this.setActiveNavigationItem();
    }

    // Set the active navigation item based on current page
    setActiveNavigationItem() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-item a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || 
                (currentPage === 'index.html' && href === '#top') ||
                (currentPage === 'index.html' && href === '#members') ||
                (currentPage === 'index.html' && href === '#contact')) {
                link.parentElement.classList.add('active');
            }
        });
    }

    // Initialize all components
    async initialize() {
        await Promise.all([
            this.loadHeader(),
            this.loadFooter()
        ]);
    }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const componentLoader = new ComponentLoader();
    componentLoader.initialize();
}); 