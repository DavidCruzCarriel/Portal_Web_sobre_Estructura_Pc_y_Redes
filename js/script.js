// ============================================
// SCRIPT.JS - LÓGICA INTERACTIVA
// ============================================

// ============================================
// 1. MENÚ HAMBURGUESA RESPONSIVO
// ============================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú cuando se hace clic en un enlace
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// ============================================
// 2. DESPLAZAMIENTO SUAVE
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// 3. BOTÓN DE REGRESO AL INICIO
// ============================================

function initBackToTopButton() {
    const backToTopBtn = document.getElementById('back-to-top');

    if (!backToTopBtn) return;

    // Mostrar/ocultar el botón según el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Hacer clic en el botón
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// 4. ANIMACIÓN DEL CICLO FETCH-DECODE-EXECUTE
// ============================================

function initCycleAnimation() {
    const btn = document.getElementById('cycle-animation-btn');
    const animationContainer = document.getElementById('cycle-animation');
    const fetchBox = document.getElementById('fetch-box');
    const decodeBox = document.getElementById('decode-box');
    const executeBox = document.getElementById('execute-box');

    if (!btn || !animationContainer) return;

    btn.addEventListener('click', () => {
        animationContainer.classList.remove('hidden');
        btn.textContent = 'Reanudar Animación';

        // Animar las cajas
        animateBoxSequence([fetchBox, decodeBox, executeBox]);
    });
}

function animateBoxSequence(boxes) {
    boxes.forEach((box, index) => {
        // Remover cualquier animación anterior
        box.classList.remove('active');

        // Agregar animación con un delay
        setTimeout(() => {
            box.classList.add('active');
        }, index * 1500);

        // Remover la clase después de la animación
        setTimeout(() => {
            box.classList.remove('active');
        }, index * 1500 + 1000);
    });

    // Repetir la animación cada 5 segundos
    setTimeout(() => {
        animateBoxSequence(boxes);
    }, 5000);
}

// ============================================
// 5. SELECTOR INTERACTIVO DE ANÁLISIS FORENSE
// ============================================

function initForensicSelector() {
    const buttons = document.querySelectorAll('.forensic-btn');
    const contents = document.querySelectorAll('.forensic-content');

    if (buttons.length === 0) return;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const forensicType = button.getAttribute('data-forensic');

            // Remover clase active de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));

            // Agregar clase active al botón clickeado
            button.classList.add('active');

            // Ocultar todo el contenido
            contents.forEach(content => content.classList.add('hidden'));

            // Mostrar el contenido seleccionado
            const selectedContent = document.getElementById(`forensic-${forensicType}`);
            if (selectedContent) {
                selectedContent.classList.remove('hidden');
            }
        });
    });
}

// ============================================
// 6. ANIMACIONES DE OBSERVACIÓN (REVEAL ON SCROLL)
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionar elementos para animar
    const animatableElements = document.querySelectorAll(
        '.module, .topic, .component-card, .concept-card, .topology-section, .conclusion-card'
    );

    animatableElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ============================================
// 7. EFECTO HOVER EN TARJETAS
// ============================================

function initCardHoverEffects() {
    const cards = document.querySelectorAll(
        '.component-card, .concept-card, .connection-card, .conclusion-card'
    );

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ============================================
// 8. INDICADOR DE PROGRESO DE LECTURA
// ============================================

function initReadingProgress() {
    // Crear barra de progreso si no existe
    let progressBar = document.querySelector('.reading-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #0099ff, #00d4ff, #00ff88);
            width: 0;
            z-index: 1001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }

    // Actualizar barra de progreso
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ============================================
// 9. ANIMACIONES DE ENTRADA STAGGERED
// ============================================

function initStaggeredAnimations() {
    const gridElements = document.querySelectorAll(
        '.components-grid > *, .concepts-grid > *, .conclusions-grid > *, .connections-grid > *'
    );

    gridElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.animation = `slideInUp 0.6s ease ${index * 0.1}s forwards`;
    });

    // Agregar keyframe si no existe
    if (!document.querySelector('style[data-stagger]')) {
        const style = document.createElement('style');
        style.setAttribute('data-stagger', 'true');
        style.innerHTML = `
            @keyframes slideInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// 10. VALIDACIÓN DE ACCESIBILIDAD Y TECLADO
// ============================================

function initKeyboardNavigation() {
    const buttons = document.querySelectorAll('button, a[href^="#"]');
    
    buttons.forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (button.tagName === 'BUTTON' || button.tagName === 'A')) {
                button.click();
            }
        });
    });
}

// ============================================
// 11. EFECTO DE BRILLANTEZ EN ICONOS
// ============================================

function initIconAnimations() {
    const icons = document.querySelectorAll('.card-icon, .btn-icon, .item-icon, .result-icon');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.animation = 'spin 1s ease-in-out';
        });
    });
}

// ============================================
// 12. OBSERVADOR DE ACTIVIDAD EN LA PÁGINA
// ============================================

function initActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -66%'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remover clase active de todos los links
                navLinks.forEach(link => link.style.color = '');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === '#' + entry.target.id) {
                        link.style.color = '#00d4ff';
                        link.style.borderBottomColor = '#00d4ff';
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// ============================================
// 13. INICIALIZACIÓN DE TOOLTIPS
// ============================================

function initTooltips() {
    // Agregar títulos a elementos con clases específicas
    const elements = {
        '.cycle-stage': 'Haz clic para más información',
        '.component-card': 'Componente de CPU',
        '.concept-card': 'Concepto de red',
        '.topology-section': 'Topología de red'
    };

    Object.keys(elements).forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            if (!element.getAttribute('title')) {
                element.setAttribute('title', elements[selector]);
            }
        });
    });
}

// ============================================
// 14. MANEJO DE ENLACES EXTERNOS
// ============================================

function initExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
}

// ============================================
// 15. FUNCIÓN PARA COPIAR CÓDIGO (si es necesario)
// ============================================

function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('code');
    
    codeBlocks.forEach(block => {
        if (block.textContent.length > 10) {
            block.style.cursor = 'pointer';
            block.title = 'Haz clic para copiar';
            
            block.addEventListener('click', () => {
                navigator.clipboard.writeText(block.textContent).then(() => {
                    const originalText = block.textContent;
                    block.textContent = '✓ Copiado!';
                    
                    setTimeout(() => {
                        block.textContent = originalText;
                    }, 2000);
                });
            });
        }
    });
}

// ============================================
// 16. VALIDAR INTEGRIDAD DE LA PÁGINA
// ============================================

function validatePageIntegrity() {
    // Verificar que todos los elementos principales existen
    const requiredElements = [
        'header',
        'main',
        'footer',
        '#inicio',
        '#modulo1',
        '#modulo2',
        '#modulo3',
        '#conclusiones'
    ];

    const missing = [];
    requiredElements.forEach(selector => {
        if (!document.querySelector(selector)) {
            missing.push(selector);
        }
    });

    if (missing.length > 0) {
        console.warn('Elementos faltantes en la página:', missing);
    } else {
        console.log('✓ Página completamente cargada y validada');
    }

    // Verificar que las imágenes tengan alt text
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.getAttribute('alt')) {
            console.warn('Imagen sin alt text:', img.src);
        }
    });

    // Verificar accesibilidad de botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
            console.warn('Botón sin etiqueta accesible:', button);
        }
    });
}

// ============================================
// 17. GESTIÓN DE ESTADO Y PREFERENCIAS
// ============================================

function initUserPreferences() {
    // Cargar preferencias de localStorage si existen
    const preferences = localStorage.getItem('userPreferences');
    
    if (!preferences) {
        // Guardar preferencias iniciales
        const defaultPrefs = {
            theme: 'dark',
            lastVisitedSection: 'inicio',
            accessibilityMode: false
        };
        localStorage.setItem('userPreferences', JSON.stringify(defaultPrefs));
    }

    // Guardar la sección última visitada
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            const prefs = JSON.parse(localStorage.getItem('userPreferences'));
            prefs.lastVisitedSection = section.id;
            localStorage.setItem('userPreferences', JSON.stringify(prefs));
        });
    });
}

// ============================================
// 18. NOTIFICACIONES Y ALERTAS
// ============================================

function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ff1744' : '#0099ff'};
        color: ${type === 'success' || type === 'error' ? '#fff' : '#000'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// ============================================
// 19. RENDIMIENTO Y LAZY LOADING
// ============================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// 20. INICIALIZACIÓN PRINCIPAL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando portal educativo...');

    // Inicializar todas las funciones
    initMobileMenu();
    initSmoothScroll();
    initBackToTopButton();
    initCycleAnimation();
    initForensicSelector();
    initScrollAnimations();
    initCardHoverEffects();
    initReadingProgress();
    initStaggeredAnimations();
    initKeyboardNavigation();
    initIconAnimations();
    initActiveNavigation();
    initTooltips();
    initExternalLinks();
    initCodeCopy();
    initUserPreferences();
    initLazyLoading();

    // Validar integridad
    validatePageIntegrity();

    console.log('✓ Portal completamente inicializado');
});

// ============================================
// 21. MANEJO DE ERRORES GLOBAL
// ============================================

window.addEventListener('error', (e) => {
    console.error('Error global:', e.error);
    // Opcionalmente, mostrar notificación al usuario
    // showNotification('Se ha producido un error. Por favor, recarga la página.', 'error');
});

// ============================================
// 22. FUNCIONES AUXILIARES
// ============================================

/**
 * Función para crear elementos HTML fácilmente
 */
function createElement(tag, className = '', text = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
}

/**
 * Función para verificar si un elemento es visible en el viewport
 */
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Función para hacer throttle de eventos
 */
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Función para hacer debounce de eventos
 */
function debounce(func, wait) {
    let timeout;
    return function () {
        const args = arguments;
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// ============================================
// 23. MONITOREO DE RENDIMIENTO
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⏱️  Tiempo de carga: ${pageLoadTime}ms`);
        }, 0);
    });
}

// ============================================
// FIN DEL SCRIPT
// ============================================
