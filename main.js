window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.padding = '0.5rem 2rem';
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        nav.style.padding = '1rem 2rem';
        nav.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            mobileNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
});

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');

mobileMenuToggle.addEventListener('click', function() {
    console.log("clicked");
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

const heroBackgrounds = document.querySelectorAll('.hero-bg');
let currentBgIndex = 0;

function rotateBackgrounds() {
    heroBackgrounds.forEach(bg => bg.classList.remove('active'));
    heroBackgrounds[currentBgIndex].classList.add('active');
    currentBgIndex = (currentBgIndex + 1) % heroBackgrounds.length;
}

heroBackgrounds[0].classList.add('active');
setInterval(rotateBackgrounds, 5000);