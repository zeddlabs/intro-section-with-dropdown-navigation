const menuBtn = document.querySelector('.menu-btn');
const navRight = document.querySelector('.nav-right');
const closeBtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.backdrop');

menuBtn.addEventListener('click', () => {
    navRight.classList.add('show');
    backdrop.classList.remove('hidden');
});
closeBtn.addEventListener('click', () => {
    navRight.classList.remove('show');
    backdrop.classList.add('hidden');
});

const dropdown = document.querySelectorAll('.dropdown');

function dropdownAction() {
    dropdown.forEach(d => d.classList.add('collapsed'));
    this.classList.remove('collapsed');
}

dropdown.forEach(d => {
    d.addEventListener('click', dropdownAction);
});

const navLink = document.querySelectorAll('.nav-link');

function navLinkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    dropdown.forEach(d => d.classList.add('collapsed'));
    this.classList.add('active');
    navRight.classList.remove('show');
    backdrop.classList.add('hidden');
}

navLink.forEach(n => {
    n.addEventListener('click', navLinkAction);
});