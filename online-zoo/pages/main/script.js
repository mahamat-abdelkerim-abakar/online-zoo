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


// ...........TESTIMONIALS SLIDER........... //

const testimonialsContainer = document.querySelector('.testimonials__container');
const testimonialsInput = document.querySelector('.testimonials__input');

testimonialsInput.addEventListener('input', () => {
    if (document.documentElement.clientWidth > 1281) {
        testimonialsContainer.style.transform = `translateX(-${testimonialsInput.value * 297}px)`;
    } else {
        testimonialsInput.setAttribute('max', '8')
        testimonialsContainer.style.transform = `translateX(-${testimonialsInput.value * 323}px)`;
    };
});

// ...........TESTIMONIALS POPUP........... //

const feedback = document.querySelectorAll('.feedback')
const feedbackImage = document.querySelectorAll('.feedback__image')
const feedbackImagePopup = document.querySelector('.feedback__image_popup')
const feedbackTitle = document.querySelectorAll('.feedback__title')
const feedbackTitlePopup = document.querySelector('.feedback__title_popup')
const feedbackDesc = document.querySelectorAll('.feedback__desc')
const feedbackDescPopup = document.querySelector('.feedback__desc_popup')
const feedbackText = document.querySelectorAll('.feedback__text')
const feedbackTextPopup = document.querySelector('.feedback__text_popup')
const wrapperPopup = document.querySelector('.popup__wrapper')
const feedbackСlosePopup = document.querySelector('.feedback__close_popup')

function createFeedback(element) {
    feedbackImagePopup.src = feedbackImage[element].src
    feedbackTitlePopup.innerHTML = feedbackTitle[element].textContent
    feedbackDescPopup.innerHTML = feedbackDesc[element].textContent
    feedbackTextPopup.innerHTML = feedbackText[element].textContent
};

feedback.forEach((element) => {
    element.addEventListener('click', () => {
        wrapperPopup.classList.add('popup__hidden')
        body.classList.add('scroll')
        createFeedback(element.id)
    });
});

feedbackСlosePopup.addEventListener('click', () => {
    wrapperPopup.classList.toggle('popup__hidden')
    body.classList.toggle('scroll')
});

wrapperPopup.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup__hidden')) {
        wrapperPopup.classList.toggle('popup__hidden')
        body.classList.toggle('scroll')
    };
});


// ...........PETS SLIDER........... //

import petsCards from "../../assets/js/const.js";

const arrowPrev = document.querySelector('.arrow__prev')
const arrowNext = document.querySelector('.arrow__next')
const itemsLayouts = document.querySelectorAll('.cards__layout');

let currentLayout = 0;
let isEnabled = true;
let countCard = 6;

function createPetsCard(index) {
    const cardImage = document.createElement('img');
    cardImage.classList.add('card__image');
    cardImage.src = petsCards[index].image;

    const cardTitle = document.createElement('p');
    cardTitle.classList.add('card__title');
    cardTitle.innerHTML = petsCards[index].title;

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card__description');
    cardDescription.innerHTML = petsCards[index].description;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');
    cardContent.append(cardTitle, cardDescription);

    const cardFood = document.createElement('div');
    cardFood.classList.add('card__icon', petsCards[index].foodIcon);

    const cardContentWrapper = document.createElement('div');
    cardContentWrapper.classList.add('card__content_wrapper');
    cardContentWrapper.append(cardContent, cardFood);

    const petsCard = document.createElement('div');
    petsCard.classList.add('card');
    petsCard.append(cardImage, cardContentWrapper);

    return petsCard;
};

function updateCountCard() {
    if (document.documentElement.clientWidth > 980) {
        countCard = 6;
    } else {
        countCard = 4;
    };
};

function getRandomNumber() {
    return Math.floor(Math.random() * petsCards.length);
};

function getRandomArray(countCard) {
    let randomArray = [];
    let randomNum = getRandomNumber();
    for (let i = 0; i < countCard; i++) {
        while (randomArray.includes(randomNum)) {
            randomNum = getRandomNumber();
        };
        randomArray.push(randomNum);
    };
    return randomArray;
};

function addCardsLayouts(itemsLayouts) {
    updateCountCard();
    for (let cardsLayout of itemsLayouts) {
        cardsLayout.innerHTML = '';
    };
    for (let cardsLayout of itemsLayouts) {
        // let randomArray = getRandomArray(countCard); 
        for (let i = 0; i < countCard; i++) {
            // cardsLayout.append(createPetsCard(randomArray[i]));
            cardsLayout.append(createPetsCard([i]));
        };
    };
};

addCardsLayouts(itemsLayouts);

window.addEventListener("resize", function () {
    addCardsLayouts(itemsLayouts);
});

function getCardsLayoutsNotActive() {
    const layoutsNotActive = [];
    for (let cardsLayout of itemsLayouts) {
        if (!cardsLayout.classList.contains('active')) {
            layoutsNotActive.push(cardsLayout);
        };
    };
    return layoutsNotActive;
};

function changeCurrentLayout(n) {
    currentLayout = (n + itemsLayouts.length) % itemsLayouts.length;
};

function hideLayout(direction) {
    isEnabled = false;
    itemsLayouts[currentLayout].classList.add(direction);
    itemsLayouts[currentLayout].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
};

function showLayout(direction) {
    itemsLayouts[currentLayout].classList.add('next', direction);
    itemsLayouts[currentLayout].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
};

function nextLayout(n) {
    hideLayout('to-left');
    changeCurrentLayout(n + 1);
    showLayout('from-right');
};

function previousLayout(n) {
    hideLayout('to-right');
    changeCurrentLayout(n - 1);
    showLayout('from-left');
};

arrowNext.addEventListener('click', function () {
    if (isEnabled) {
        nextLayout(currentLayout);
        addCardsLayouts(getCardsLayoutsNotActive());
    };
});

arrowPrev.addEventListener('click', function () {
    if (isEnabled) {
        previousLayout(currentLayout);
        addCardsLayouts(getCardsLayoutsNotActive());
    };
});