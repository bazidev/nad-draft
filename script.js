// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeProgress();
    loadCompletionState();
    setupSmoothScrolling();
    setupActiveNavigation();
    animateSteps();
    loadSidebarState();
});

// Toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const contentWrapper = document.querySelector('.content-wrapper');
    const toggleButton = document.getElementById('sidebarToggle');
    
    sidebar.classList.toggle('hidden');
    contentWrapper.classList.toggle('sidebar-hidden');
    
    // Save state to localStorage
    const isHidden = sidebar.classList.contains('hidden');
    localStorage.setItem('sidebarHidden', isHidden);
    
    // Add accessibility
    toggleButton.setAttribute('aria-expanded', !isHidden);
    toggleButton.setAttribute('aria-label', isHidden ? 'Show sidebar' : 'Hide sidebar');
}

// Load sidebar state from localStorage
function loadSidebarState() {
    const sidebarHidden = localStorage.getItem('sidebarHidden') === 'true';
    const sidebar = document.getElementById('sidebar');
    const contentWrapper = document.querySelector('.content-wrapper');
    const toggleButton = document.getElementById('sidebarToggle');
    
    if (sidebarHidden) {
        sidebar.classList.add('hidden');
        contentWrapper.classList.add('sidebar-hidden');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.setAttribute('aria-label', 'Show sidebar');
    }
}

// Initialize progress tracking
function initializeProgress() {
    const steps = document.querySelectorAll('.step');
    const totalCount = steps.length;
    document.getElementById('totalCount').textContent = totalCount;
    updateProgress();
}

// Toggle step completion
function toggleStep(event, stepId) {
    event.preventDefault();
    event.stopPropagation();
    
    const step = document.querySelector(`[data-step="${stepId}"]`);
    const button = event.currentTarget;
    
    if (step.classList.contains('completed')) {
        step.classList.remove('completed');
        // Reopen the step
        step.setAttribute('open', '');
    } else {
        step.classList.add('completed');
        // Add celebration animation
        createConfetti(button);
        // Close the details after a short delay
        setTimeout(() => {
            step.removeAttribute('open');
        }, 500);
    }
    
    updateProgress();
    saveCompletionState();
}

// Update progress bar and counts
function updateProgress() {
    const steps = document.querySelectorAll('.step');
    const completedSteps = document.querySelectorAll('.step.completed');
    const total = steps.length;
    const completed = completedSteps.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('progressPercent').textContent = percentage + '%';
    document.getElementById('progressFill').style.width = percentage + '%';
    
    // Update sidebar nav items to show section completion
    updateSectionCompletion();
}

// Update section completion indicators in sidebar
function updateSectionCompletion() {
    const sections = document.querySelectorAll('section[data-section]');
    
    sections.forEach(section => {
        const sectionId = section.getAttribute('data-section');
        const navLink = document.querySelector(`a[data-section="${sectionId}"]`);
        const sectionSteps = section.querySelectorAll('.step');
        const completedSteps = section.querySelectorAll('.step.completed');
        
        if (navLink && sectionSteps.length > 0) {
            const isComplete = sectionSteps.length === completedSteps.length;
            
            if (isComplete) {
                navLink.classList.add('section-complete');
                if (!navLink.querySelector('.section-check')) {
                    const checkIcon = document.createElement('span');
                    checkIcon.className = 'section-check';
                    checkIcon.innerHTML = '✓';
                    navLink.appendChild(checkIcon);
                }
            } else {
                navLink.classList.remove('section-complete');
                const checkIcon = navLink.querySelector('.section-check');
                if (checkIcon) {
                    checkIcon.remove();
                }
            }
        }
    });
}

// Save completion state to localStorage
function saveCompletionState() {
    const completedSteps = [];
    document.querySelectorAll('.step.completed').forEach(step => {
        const stepId = step.getAttribute('data-step');
        if (stepId) {
            completedSteps.push(stepId);
        }
    });
    localStorage.setItem('nadWorkshopProgress', JSON.stringify(completedSteps));
}

// Load completion state from localStorage
function loadCompletionState() {
    const saved = localStorage.getItem('nadWorkshopProgress');
    if (saved) {
        const completedSteps = JSON.parse(saved);
        completedSteps.forEach(stepId => {
            const step = document.querySelector(`[data-step="${stepId}"]`);
            if (step) {
                step.classList.add('completed');
            }
        });
        updateProgress();
    }
}

// Copy value to clipboard
function copyValue(button, text) {
    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        const originalHTML = button.innerHTML;
        button.classList.add('copied');
        button.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        
        setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Create confetti animation
function createConfetti(element) {
    const colors = ['#0176D3', '#06A59A', '#2E844A', '#FFB75D'];
    const confettiCount = 15;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        const rect = element.getBoundingClientRect();
        confetti.style.left = rect.left + rect.width / 2 + 'px';
        confetti.style.top = rect.top + rect.height / 2 + 'px';
        
        document.body.appendChild(confetti);
        
        const angle = (Math.PI * 2 * i) / confettiCount;
        const velocity = 100 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        confetti.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${tx}px, ${ty}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        }).onfinish = () => confetti.remove();
    }
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('.sidebar-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup active navigation highlighting
function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
    
    function highlightNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation();
}

// Animate steps on scroll
function animateSteps() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.setProperty('--animation-order', index);
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.step').forEach(step => {
        observer.observe(step);
    });
}

// Sidebar toggle for mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Clear all progress (utility function)
function clearProgress() {
    if (confirm('Are you sure you want to clear all progress?')) {
        localStorage.removeItem('nadWorkshopProgress');
        document.querySelectorAll('.step.completed').forEach(step => {
            step.classList.remove('completed');
        });
        updateProgress();
    }
}

// Export progress (utility function)
function exportProgress() {
    const progress = {
        date: new Date().toISOString(),
        completed: []
    };
    
    document.querySelectorAll('.step.completed').forEach(step => {
        const stepId = step.getAttribute('data-step');
        if (stepId) {
            progress.completed.push(stepId);
        }
    });
    
    const dataStr = JSON.stringify(progress, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'nad-workshop-progress.json';
    link.click();
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + C to clear progress
    if (e.altKey && e.key === 'c') {
        clearProgress();
    }
    // Alt + E to export progress
    if (e.altKey && e.key === 'e') {
        exportProgress();
    }
});

