// Main JavaScript for Diamond Lake Estates Civic League Website

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        
        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }
});

// Load announcements on home page
if (document.getElementById('announcementList')) {
    fetch('data/announcements.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('announcementList');
            
            if (data.announcements.length === 0) {
                container.innerHTML = '<p style="text-align: center; color: var(--color-text-muted);">No current announcements. Check back soon!</p>';
                return;
            }
            
            // Show most recent 3 announcements
            const recent = data.announcements
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 3);
            
            recent.forEach((announcement, index) => {
                const item = document.createElement('div');
                item.className = 'announcement-item';
                item.style.animationDelay = `${index * 0.1}s`;
                item.innerHTML = `
                    <span class="announcement-date">${formatDate(announcement.date)}</span>
                    <h3>${announcement.title}</h3>
                    <p>${announcement.content}</p>
                `;
                container.appendChild(item);
            });
        })
        .catch(error => {
            document.getElementById('announcementList').innerHTML = `
                <p style="text-align: center; color: var(--color-text-muted);">
                    Announcements are being updated. Check our latest newsletter for important information!
                </p>
            `;
        });
}

// Load next meeting info on home page
if (document.getElementById('nextMeetingTitle')) {
    fetch('data/events.json')
        .then(response => response.json())
        .then(data => {
            const today = new Date();
            const upcoming = data.events
                .filter(event => new Date(event.date) >= today)
                .sort((a, b) => new Date(a.date) - new Date(b.date));
            
            if (upcoming.length > 0 && upcoming[0]) {
                const next = upcoming[0];
                document.getElementById('nextMeetingTitle').textContent = next.title;
                document.getElementById('nextMeetingDetails').innerHTML = `
                    <strong>${formatDate(next.date)}</strong> at ${next.time}<br>
                    ${next.location}
                `;
            }
        })
        .catch(error => {
            // Keep default placeholder text
        });
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Animation on scroll (fade in elements)
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

// Observe elements that should fade in
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.content-card, .action-card, .benefit-card');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active state to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
