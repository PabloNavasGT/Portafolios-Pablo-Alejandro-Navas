/**
 * PORTAFOLIO DE CÓDIGO PUERTO - JAVASCRIPT VAINILLA
 * Control de Interacciones, Modo Claro/Oscuro y Guardado Local
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. TOGGLE MODO OSCURO / CLARO CON LOCALSTORAGE
       ========================================================================== */
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');
    const htmlElement = document.documentElement;

    // Verificar preferencia guardada en localStorage o usar tema predeterminado
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    // Aplicar estado inicial
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

    /* ==========================================================================
       2. SCROLL SUAVE Y NAVEGACIÓN
       ========================================================================== */
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* ==========================================================================
       3. EFECTO DE LÍNEA DE COMANDOS EN CONSOLA DEL NAVEGADOR
       ========================================================================== */
    console.log(
        '%c [SYS_INIT] Pablo Navas - Portfolio Loaded Successfully ',
        'background: #080b10; color: #00f0ff; font-family: monospace; font-size: 12px; padding: 4px; border: 1px solid #00f0ff;'
    );
});