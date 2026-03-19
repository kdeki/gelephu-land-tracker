document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const footerUrlElement = document.getElementById('footer-url');

    // Toggle mobile navigation menu
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Dynamically set the GitHub Pages URL in the footer
    // This assumes your site is hosted on GitHub Pages in a repository
    // like 'https://yourusername.github.io/your-repo-name/'
    if (footerUrlElement) {
        const hostname = window.location.hostname;
        const pathname = window.location.pathname;

        if (hostname.includes('github.io')) {
            // Extract username and repository name from the URL
            // Example: "yourusername.github.io/gelephu-land-tracker/"
            const parts = pathname.split('/');
            const repoName = parts[1] || ''; // 'gelephu-land-tracker'
            const githubUser = hostname.split('.')[0]; // 'yourusername'

            if (githubUser && repoName) {
                const liveUrl = `https://${githubUser}.github.io/${repoName}/`;
                footerUrlElement.href = liveUrl;
                footerUrlElement.textContent = liveUrl;
            }
        }
    }
});