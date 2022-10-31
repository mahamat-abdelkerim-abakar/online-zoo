// ...........BURGER MENU........... //

const openBurger = document.querySelector('.hamburger__open')
const closeBurger = document.querySelector('.hamburger__close')
const shadow = document.querySelector('.shadow')
const burgerMenu = document.querySelector('.burger__menu')
const navigationLink = document.querySelectorAll('.navigation__link')
const body = document.querySelector('body')

openBurger.addEventListener('click', () => {
    burgerMenu.classList.add('burger__menu_open')
    shadow.classList.add('shadow_open')
    body.classList.add('scroll')
});

closeBurger.addEventListener('click', closeMenu)
shadow.addEventListener('click', closeMenu)
navigationLink.forEach((link) => {
    link.addEventListener('click', closeMenu)
});

function closeMenu() {
    burgerMenu.classList.remove('burger__menu_open')
    shadow.classList.remove('shadow_open')
    body.classList.remove('scroll')
};


// ...........AMOUNT........... //

const donateInput = document.querySelector('.donate__input')
const amount = document.querySelectorAll('.progress-bar__input')
const donateForm = document.querySelector('.donate__form')

donateInput.addEventListener('input', () => {
    if (donateInput.value.length > 4) {
        donateInput.value = donateInput.value.slice(0, 4);
    };
    donateInput.value = donateInput.value.replace(/[e,+,-,',','.']/g, '');
});

donateForm.addEventListener('click', () => {
    for (let i = 0; i < amount.length; i++) {
        if (amount[i].checked) {
            donateInput.value = amount[i].value;
            break
        };
    };
});

donateInput.addEventListener('input', () => {
    for (let i = 0; i < amount.length; i++) {
        if (donateInput.value === amount[i].value) {
            amount[i].checked = true;
        } else {
            amount[i].checked = false;
        };
    };
});

function defaultInput() {
    donateInput.value = amount[5].value;
};

window.addEventListener('load', defaultInput);