const moreTextEl = document.getElementById('more-text');
const toggleBtnEl = document.getElementById('toggle-btn');
const hideBtnEl = document.getElementById('hide-btn');
const moreTextEl2 = document.getElementById('more-text2');
const toggleBtnEl2 = document.getElementById('toggle-btn2');
const hideBtnEl2 = document.getElementById('hide-btn2');
const moreTextEl3 = document.getElementById('more-text3');
const toggleBtnEl3 = document.getElementById('toggle-btn3');
const hideBtnEl3 = document.getElementById('hide-btn3');



toggleBtnEl.addEventListener('click', () => {
    moreTextEl.classList.toggle('hidden');
    toggleBtnEl.classList.toggle('hidden');
    hideBtnEl.classList.toggle('hidden');
});

hideBtnEl.addEventListener('click', () => {
    moreTextEl.classList.toggle('hidden');
    toggleBtnEl.classList.toggle('hidden');
    hideBtnEl.classList.toggle('hidden');
});

toggleBtnEl2.addEventListener('click', () => {
    moreTextEl2.classList.toggle('hidden');
    toggleBtnEl2.classList.toggle('hidden');
    hideBtnEl2.classList.toggle('hidden');
});

hideBtnEl2.addEventListener('click', () => {
    moreTextEl2.classList.toggle('hidden');
    toggleBtnEl2.classList.toggle('hidden');
    hideBtnEl2.classList.toggle('hidden');
});

toggleBtnEl3.addEventListener('click', () => {
    moreTextEl3.classList.toggle('hidden');
    toggleBtnEl3.classList.toggle('hidden');
    hideBtnEl3.classList.toggle('hidden');
});

hideBtnEl3.addEventListener('click', () => {
    moreTextEl3.classList.toggle('hidden');
    toggleBtnEl3.classList.toggle('hidden');
    hideBtnEl3.classList.toggle('hidden');
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('body').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
    const navLinks = document.querySelectorAll('#navbar-default .nav-link');
    const navbarToggle = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const nav = document.querySelector('nav');

    let lastScrollTop = 0;
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarToggle.getAttribute('aria-expanded') === 'true') {
                navbarToggle.click();
            }
        });
    });

    window.addEventListener('scroll', function() {
        let currentScroll = window.scrollY;
        if (currentScroll > lastScrollTop) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});
