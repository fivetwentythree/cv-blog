// Theme toggle functionality
function initThemeToggle() {
    // Check for saved user preference, first in localStorage, then in system setting
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Add theme toggle button styles
    const style = document.createElement('style');
    style.textContent = `
        .theme-toggle-container {
            display: inline-flex;
            align-items: center;
            margin-left: 10px;
        }

        @media screen and (max-width: 768px) {
            .theme-toggle-container {
                margin: 0;
                position: absolute;
                right: 60px;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        .theme-toggle {
            position: relative;
            width: 36px;
            height: 20px;
            background: rgba(120, 120, 128, 0.32);
            border-radius: 10px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
            -webkit-tap-highlight-color: transparent;
            margin: 0;
            vertical-align: middle;
            display: inline-flex;
            align-items: center;
        }
        
        .theme-toggle::after {
            content: '';
            position: absolute;
            left: 2px;
            top: 2px;
            width: 16px;
            height: 16px;
            background-color: #FFFFFF;
            border-radius: 50%;
            transition: transform 0.3s;
        }
        
        .theme-toggle[aria-checked="true"] {
            background: var(--accent);
        }
        
        .theme-toggle[aria-checked="true"]::after {
            transform: translateX(16px);
        }
    `;
    document.head.appendChild(style);
    
    // Create and add the toggle button
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.setAttribute('role', 'switch');
    toggle.setAttribute('aria-checked', savedTheme === 'dark' ? 'true' : 'false');
    toggle.setAttribute('aria-label', 'Theme toggle');
    
    // Add the toggle to the navigation
    const navList = document.getElementById('navlist');
    const toggleContainer = document.createElement('li');
    toggleContainer.className = 'alignable pull-left nav-list';
    toggleContainer.appendChild(toggle);
    navList.appendChild(toggleContainer);
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Toggle theme function
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        toggle.setAttribute('aria-checked', newTheme === 'dark' ? 'true' : 'false');
        localStorage.setItem('theme', newTheme);
    }
    
    // Add click event listener
    toggle.addEventListener('click', toggleTheme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            toggle.setAttribute('aria-checked', e.matches ? 'true' : 'false');
        }
    });
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', initThemeToggle);