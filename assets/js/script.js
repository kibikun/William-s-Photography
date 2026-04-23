const nav = document.querySelector('.nav__list');
const openBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.modal__btn');

openBtn.addEventListener('click', () => {
    nav.classList.remove('pop');
    nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
    nav.classList.add('pop');
});