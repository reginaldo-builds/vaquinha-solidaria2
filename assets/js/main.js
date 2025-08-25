// Animações de Scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Copiar Chave PIX
function copiarPix() {
    const pixKey = document.getElementById('pixKey').textContent;
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(pixKey).then(() => {
            mostrarMensagemSucesso();
        }).catch(() => {
            copiarTextoFallback(pixKey);
        });
    } else {
        copiarTextoFallback(pixKey);
    }
}

function copiarTextoFallback(texto) {
    const textArea = document.createElement('textarea');
    textArea.value = texto;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        mostrarMensagemSucesso();
    } catch (err) {
        console.error('Erro ao copiar:', err);
        alert('Chave PIX: ' + texto);
    }
    
    document.body.removeChild(textArea);
}

function mostrarMensagemSucesso() {
    const message = document.getElementById('successMessage');
    message.classList.add('show');
    
    setTimeout(() => {
        message.classList.remove('show');
    }, 3000);
}

// Scroll Suave
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Lazy Loading para Imagens
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Header Scroll Effect
function initHeaderScroll() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initSmoothScroll();
    initLazyLoading();
    initHeaderScroll();
    
    // Adicionar classe visible aos elementos já visíveis
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 100);
            }
        });
    }, 100);
});

// Acessibilidade - Navegação por teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('gallery-item')) {
            e.target.click();
        }
    }
});

// Performance - Debounce para scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce ao scroll
window.addEventListener('scroll', debounce(() => {
    // Scroll handlers aqui
}, 10));