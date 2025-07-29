// H4xScripts JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Script to copy to clipboard
    const scriptCode = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/H4xScripts/Loader/refs/heads/main/loader.lua", true))()';
    
    // Copy script functionality for VS Code style interface
    const copyButton = document.getElementById('copyScriptButton');
    const successMessage = document.getElementById('copySuccessMessage');
    
    if (copyButton) {
        copyButton.addEventListener('click', async function() {
            try {
                await navigator.clipboard.writeText(scriptCode);
                showSuccessMessage();
                
                // Add visual feedback to button
                copyButton.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    copyButton.style.transform = 'scale(1)';
                }, 150);
                
            } catch (err) {
                // Fallback for older browsers
                fallbackCopyTextToClipboard(scriptCode);
                showSuccessMessage();
            }
        });
    }
    
    // Fallback copy function for older browsers
    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        
        document.body.removeChild(textArea);
    }
    
    // Show success message function for VS Code interface
    function showSuccessMessage() {
        if (successMessage) {
            successMessage.classList.remove('hidden');
            successMessage.classList.add('show');
            
            setTimeout(() => {
                successMessage.classList.remove('show');
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 300);
            }, 2500);
        }
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Advanced Scroll Animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add staggered delay for elements in the same section
                const delay = getElementDelay(element);
                
                setTimeout(() => {
                    // Determine animation type based on element type
                    const animationType = getAnimationType(element);
                    element.classList.add(animationType);
                    element.classList.add('animate');
                }, delay);
                
                // Unobserve after animation
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    function getAnimationType(element) {
        // Different animation types based on element class
        if (element.classList.contains('script-card')) {
            return 'fade-in-up';
        } else if (element.classList.contains('step-card')) {
            return 'slide-in-rotate';
        } else if (element.classList.contains('code-editor-container')) {
            return 'fade-in-scale';
        } else if (element.tagName === 'H2') {
            return 'fade-in-up';
        } else {
            return 'fade-in-up';
        }
    }
    
    function getElementDelay(element) {
        // Create staggered animation delays
        if (element.classList.contains('script-card')) {
            // Script cards animate in waves
            const cardIndex = Array.from(element.parentNode.children).indexOf(element);
            return cardIndex * 100;
        } else if (element.classList.contains('step-card')) {
            // Step cards animate sequentially
            const stepIndex = Array.from(element.parentNode.children).indexOf(element);
            return stepIndex * 200;
        } else {
            return 0;
        }
    }
    
    // Add glitch effect to logo periodically
    const logo = document.querySelector('.logo-glow');
    setInterval(() => {
        logo.style.filter = 'hue-rotate(180deg) brightness(1.2)';
        setTimeout(() => {
            logo.style.filter = 'none';
        }, 100);
    }, 5000);
    
    // Parallax effect for background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const codeRain = document.querySelector('.code-rain');
        if (codeRain) {
            codeRain.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Add typing effect to motto
    const motto = document.querySelector('.motto');
    const mottoText = 'Inject. Exploit. Exit.';
    let mottoIndex = 0;
    
    function typeMotto() {
        if (mottoIndex < mottoText.length) {
            motto.textContent = mottoText.slice(0, mottoIndex + 1);
            mottoIndex++;
            setTimeout(typeMotto, 100);
        } else {
            setTimeout(() => {
                mottoIndex = 0;
                motto.textContent = '';
                setTimeout(typeMotto, 2000);
            }, 3000);
        }
    }
    
    // Start typing effect after page load
    setTimeout(() => {
        motto.textContent = '';
        typeMotto();
    }, 1000);
    
    // Mobile menu toggle (if needed)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Add hover sound effect simulation (visual feedback)
    const allButtons = document.querySelectorAll('.glow-button');
    allButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 40px rgba(255, 0, 0, 0.8), 0 0 80px rgba(255, 0, 0, 0.6)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.3)';
        });
    });
    
    // Add random glitch effects to cards
    function addRandomGlitch() {
        const cards = document.querySelectorAll('.script-card, .step-card');
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        
        randomCard.style.transform = 'translateX(2px)';
        randomCard.style.filter = 'hue-rotate(180deg)';
        
        setTimeout(() => {
            randomCard.style.transform = '';
            randomCard.style.filter = '';
        }, 150);
    }
    
    // Trigger random glitch effects
    setInterval(addRandomGlitch, 8000);
    
    // Preload Discord widget
    const discordWidget = document.querySelector('iframe[src*="discord.com"]');
    if (discordWidget) {
        discordWidget.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    }
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            console.warn('Failed to load image:', this.src);
        });
    });
});

// Add custom cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'custom-cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(255,0,0,0.3) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
        `;
        document.body.appendChild(newCursor);
    }
    
    const actualCursor = document.querySelector('.custom-cursor');
    if (actualCursor) {
        actualCursor.style.left = e.clientX - 10 + 'px';
        actualCursor.style.top = e.clientY - 10 + 'px';
    }
});

// Performance optimization - throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations here
}, 16)); // ~60fps
