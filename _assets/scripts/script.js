// Smooth scrolling for navigation links
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

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Intersection Observer for animation triggers
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.innovation-card, .step, .solution-item, .problem-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Demo Modal Functions
function openDemoModal() {
    const modal = document.getElementById('demoModal');
    const video = document.getElementById('demoVideo');
    video.src = 'https://www.youtube.com/embed/3asNuNMlHhY?autoplay=1';
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeDemoModal() {
    const modal = document.getElementById('demoModal');
    const video = document.getElementById('demoVideo');
    video.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDemoModal();
    }
});

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Find the clicked icon and add subtle click animation
        const icons = document.querySelectorAll('.copy-icon');
        icons.forEach(icon => {
            if (icon.onclick.toString().includes(text.substring(0, 20))) {
                icon.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 100);
            }
        });
    }).catch(function(err) {
        console.error('Failed to copy: ', err);
    });
}

function initializeCopyButtons() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        // Skip if copy button already exists
        if (block.querySelector('.copy-icon')) return;
        
        const codeElement = block.querySelector('code');
        if (!codeElement) return;
        
        const codeText = codeElement.textContent;
        
        // Create copy span exactly like your current format
        const copySpan = document.createElement('span');
        copySpan.className = 'copy-icon';
        copySpan.setAttribute('onclick', `copyToClipboard('${codeText.replace(/'/g, "\\'")}')`);
        copySpan.title = 'Copy to clipboard';
        copySpan.textContent = 'Copy';
        
        // Insert the span before the code element (same position as your HTML)
        block.insertBefore(copySpan, codeElement);
    });
}
// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeCopyButtons);

// Also provide a function to reinitialize if you add code blocks dynamically
window.reinitializeCopyButtons = initializeCopyButtons;



let slideIndex = 3;
let slideInterval;
const SLIDE_DURATION = 5000; // 3 seconds

function showSlides(n) {
    const slides = document.getElementsByClassName("screenshot-slide");
    const dots = document.getElementsByClassName("dot");
    
    // Bounds checking
    if (n > slides.length) { 
        slideIndex = 1;
    } else if (n < 1) { 
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }
    
    // Remove active class from all
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Add active class to current
    if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add("active");
        dots[slideIndex - 1].classList.add("active");
    }
}

function currentSlide(n) {
    stopAutoSlide(); // Always stop first
    showSlides(n);
    startAutoSlide(); // Then restart
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function startAutoSlide() {
    stopAutoSlide(); // Prevent multiple intervals
    slideInterval = setInterval(nextSlide, SLIDE_DURATION);
}

function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    startAutoSlide();
    
    // Pause on hover
    const slideshow = document.querySelector('.screenshot-slideshow');
    if (slideshow) {
        slideshow.addEventListener('mouseenter', stopAutoSlide);
        slideshow.addEventListener('mouseleave', startAutoSlide);
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', stopAutoSlide);
