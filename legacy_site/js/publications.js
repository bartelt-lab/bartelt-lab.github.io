class PublicationsManager {
    constructor() {
        this.publications = [];
        this.loadPublications();
    }

    async loadPublications() {
        try {
            const response = await fetch('/publications.json');
            const data = await response.json();
            this.publications = data.publications.sort((a, b) => {
                // Sort by date in reverse chronological order
                return new Date(b.date) - new Date(a.date);
            });
            this.renderPublications();
        } catch (error) {
            console.error('Error loading publications:', error);
        }
    }

    renderPublications() {
        const container = document.getElementById('publications-container');
        if (!container) return;

        // Determine how many publications to show
        const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
        const publicationsToShow = isHomePage ? this.publications.slice(0, 3) : this.publications;

        container.innerHTML = publicationsToShow.map(pub => this.createPublicationHTML(pub)).join('');
    }

    createPublicationHTML(pub) {
        const authorsHTML = pub.authors.map((author, index) => {
            const comma = index < pub.authors.length - 1 ? ',' : '';
            if (author.link) {
                return `<span class="author-name"><a href="${author.link}">${author.name}</a>${comma}</span>`;
            } else {
                return `<span class="author-name">${author.name}${comma}</span>`;
            }
        }).join(' '); // Add space between authors

        const linksHTML = pub.links.map(link => 
            `<a class="btn btn-primary btn-outline btn-xs" href="${link.url}">${link.text}</a>`
        ).join('');

        return `
            <div class="pub-list-item" itemscope itemtype="http://schema.org/CreativeWork">
                <div class="row">
                    <div class="col-sm-4">
                        <a href="#publication/${pub.id}/">
                            <img src="${pub.image}" class="pub-banner" itemprop="image">
                        </a>
                    </div>
                    <div class="col-sm-8">
                        <h3 class="article-title" itemprop="name">${pub.title}</h3>
                        <div class="pub-authors" itemprop="author">
                            <div itemprop="author">
                                ${authorsHTML}
                            </div>
                        </div>
                        <div class="pub-publication">
                            ${pub.venue}
                            <div itemprop="datePublished">${this.formatDate(pub.date)}</div>
                        </div>
                        <div class="pub-links">
                            ${linksHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
        return `${months[date.getMonth()]}, ${date.getFullYear()}`;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PublicationsManager();
}); 