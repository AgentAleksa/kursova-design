const menuBtn = document.getElementById('menuBtn');
const navOverlay = document.getElementById('navOverlay');
const header = document.querySelector('.header');

// Відкриття/закриття меню
menuBtn.addEventListener('click', () => {
    navOverlay.classList.toggle('open');
});

// Закриття меню при кліку на посилання
document.querySelectorAll('.nav-overlay__link').forEach(link => {
    link.addEventListener('click', () => {
        navOverlay.classList.remove('open');
    });
});

// Зміна кольору шапки при скролі
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});