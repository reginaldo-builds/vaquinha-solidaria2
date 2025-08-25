<style>
        /* Reset e Base */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --laranja-pastel: #F6A76E;
            --laranja-pastel-alt: #F7B267;
            --verde-pastel: #A8D5BA;
            --verde-pastel-alt: #8FD694;
            --branco: #FFFFFF;
            --cinza-claro: #F4F4F4;
            --cinza-claro-alt: #EAEAEA;
            --cinza-escuro: #333333;
            --sombra-suave: 0 4px 20px rgba(0, 0, 0, 0.1);
            --transicao: all 0.3s ease;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--cinza-escuro);
            overflow-x: hidden;
        }

        /* Utilitários */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .btn {
            display: inline-block;
            padding: 12px 24px;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            text-decoration: none;
            text-align: center;
            cursor: pointer;
            transition: var(--transicao);
            font-size: 16px;
            box-shadow: var(--sombra-suave);
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--verde-pastel), var(--verde-pastel-alt));
            color: var(--branco);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(143, 214, 148, 0.4);
        }

        .btn-secondary {
            background: var(--branco);
            color: var(--cinza-escuro);
            border: 2px solid var(--cinza-claro-alt);
        }

        .btn-secondary:hover {
            background: var(--cinza-claro);
            transform: translateY(-1px);
        }

        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Header */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            padding: 15px 0;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 20px;
            font-weight: 700;
            color: var(--laranja-pastel);
        }

        .logo svg {
            width: 32px;
            height: 32px;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--laranja-pastel), var(--laranja-pastel-alt));
            color: var(--branco);
            padding: 120px 0 80px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
            animation: float 20s infinite linear;
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-100px); }
        }

        .hero-content {
            position: relative;
            z-index: 2;
        }

        .hero h1 {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 800;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .hero p {
            font-size: clamp(1.1rem, 3vw, 1.3rem);
            margin-bottom: 40px;
            opacity: 0.95;
        }

        .hero-image {
            width: 100%;
            max-width: 400px;
            height: 300px;
            object-fit: cover;
            border-radius: 20px;
            margin: 30px auto;
            box-shadow: var(--sombra-suave);
        }

        .pix-section {
            background: var(--branco);
            padding: 40px;
            border-radius: 20px;
            margin: 40px auto 0;
            max-width: 500px;
            box-shadow: var(--sombra-suave);
        }

        .pix-key {
            background: var(--cinza-claro);
            padding: 15px;
            border-radius: 10px;
            font-family: monospace;
            font-size: 14px;
            margin: 20px 0;
            word-break: break-all;
            position: relative;
        }

        .qr-code {
            text-align: center;
            margin: 30px 0;
        }

        .qr-code img {
            width: 200px;
            height: 200px;
            border-radius: 15px;
            box-shadow: var(--sombra-suave);
        }

        /* Versículo */
        .versiculo {
            background: var(--cinza-claro);
            padding: 80px 0;
            text-align: center;
        }

        .versiculo blockquote {
            font-size: clamp(1.2rem, 3vw, 1.5rem);
            font-style: italic;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.8;
            color: var(--cinza-escuro);
        }

        .versiculo cite {
            display: block;
            margin-top: 20px;
            font-weight: 600;
            color: var(--laranja-pastel);
        }

        /* Galeria */
        .galeria {
            padding: 80px 0;
            background: var(--branco);
        }

        .section-title {
            text-align: center;
            font-size: clamp(2rem, 4vw, 2.5rem);
            font-weight: 700;
            margin-bottom: 50px;
            color: var(--cinza-escuro);
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 40px;
        }

        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 15px;
            box-shadow: var(--sombra-suave);
            transition: var(--transicao);
        }

        .gallery-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .gallery-item img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            transition: var(--transicao);
        }

        .gallery-item:hover img {
            transform: scale(1.05);
        }

        /* Sobre */
        .sobre {
            background: var(--cinza-claro);
            padding: 80px 0;
        }

        .sobre-content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: center;
        }

        .sobre-text {
            font-size: 1.1rem;
            line-height: 1.8;
        }

        .sobre-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: var(--sombra-suave);
        }

        /* Como Doar */
        .como-doar {
            padding: 80px 0;
            background: var(--branco);
        }

        .steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }

        .step {
            text-align: center;
            padding: 30px 20px;
            background: var(--branco);
            border-radius: 15px;
            box-shadow: var(--sombra-suave);
            transition: var(--transicao);
        }

        .step:hover {
            transform: translateY(-5px);
        }

        .step-number {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--verde-pastel), var(--verde-pastel-alt));
            color: var(--branco);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: 700;
            margin: 0 auto 20px;
        }

        .step h3 {
            margin-bottom: 15px;
            color: var(--cinza-escuro);
        }

        /* Contato */
        .contato {
            background: var(--cinza-claro);
            padding: 80px 0;
            text-align: center;
        }

        .contato-info {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            margin-top: 40px;
        }

        /* WhatsApp Fixo */
        .whatsapp-float {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--verde-pastel), var(--verde-pastel-alt));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--sombra-suave);
            z-index: 1000;
            transition: var(--transicao);
            animation: pulse 2s infinite;
        }

        .whatsapp-float:hover {
            transform: scale(1.1);
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(168, 213, 186, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(168, 213, 186, 0); }
            100% { box-shadow: 0 0 0 0 rgba(168, 213, 186, 0); }
        }

        .whatsapp-float svg {
            width: 30px;
            height: 30px;
            fill: var(--branco);
        }

        /* Footer */
        .footer {
            background: linear-gradient(135deg, var(--laranja-pastel), var(--laranja-pastel-alt));
            color: var(--branco);
            padding: 40px 0;
            text-align: center;
        }

        .footer p {
            opacity: 0.9;
            margin-bottom: 10px;
        }

        /* Responsivo */
        @media (min-width: 768px) {
            .container {
                padding: 0 40px;
            }

            .sobre-content {
                grid-template-columns: 1fr 1fr;
            }

            .pix-section {
                display: grid;
                grid-template-columns: 1fr 200px;
                gap: 30px;
                align-items: center;
                text-align: left;
            }

            .qr-code {
                margin: 0;
            }
        }

        /* Mensagem de Sucesso */
        .success-message {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--verde-pastel);
            color: var(--branco);
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: var(--sombra-suave);
            z-index: 1001;
            transform: translateX(400px);
            transition: var(--transicao);
        }

        .success-message.show {
            transform: translateX(0);
        }

        /* Acessibilidade */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        /* Focus styles */
        .btn:focus,
        button:focus {
            outline: 3px solid var(--verde-pastel-alt);
            outline-offset: 2px;
        }
    </style>


     <script>
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
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9747b2c7938ff617',t:'MTc1NjA4OTM1MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>