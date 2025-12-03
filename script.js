document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-glass a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 
    };
    
    function removeAllActive() {
        navLinks.forEach(link => {
            link.style.backgroundColor = '';
            link.style.borderRadius = '';
            link.style.padding = '';
        });
    }
    
    function setActiveLink(sectionId) {
        removeAllActive();
        
        let targetLink;
        
        if (sectionId === 'home' || !sectionId) {
            targetLink = navLinks[0];
        } else {
            targetLink = Array.from(navLinks).find(link => 
                link.getAttribute('href') === `#${sectionId}`
            );
        }
        
        if (targetLink) {
            targetLink.style.backgroundColor = '#F44433';
            targetLink.style.borderRadius = '15px';
            targetLink.style.padding = '14px 16px';
        }
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id || 'home';
                setActiveLink(sectionId);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    setActiveLink('home');
});