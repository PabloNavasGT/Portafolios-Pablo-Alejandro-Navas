document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle Modo Oscuro / Claro
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        if (themeLabel) {
            themeLabel.textContent = theme.toUpperCase();
        }
        localStorage.setItem('portfolio-theme', theme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // 1. Filtrado de Habilidades Técnicas (#habilidades)
    const techFilterBtns = document.querySelectorAll('#habilidades .skill-filter-btn');
    const techCards = document.querySelectorAll('#skillsGrid .skill-card-port');

    techFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            techFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            techCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 2. Filtrado de Habilidades Adaptativas (#habilidades-adaptativas)
    const adaptiveFilterBtns = document.querySelectorAll('#habilidades-adaptativas .skill-filter-btn');
    const adaptiveCards = document.querySelectorAll('#adaptiveSkillsGrid .skill-card-port');

    adaptiveFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            adaptiveFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            adaptiveCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Scroll Suave para los enlaces del menú
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
            // Filtrado de Habilidades Adaptativas
const adaptiveFilterBtns = document.querySelectorAll('#habilidades-adaptativas .skill-filter-btn');
const adaptiveCards = document.querySelectorAll('#adaptiveSkillsGrid .skill-card-port');

adaptiveFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        adaptiveFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        adaptiveCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
        });
        });