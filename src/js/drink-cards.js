// const drink1 = require('../images/bijou.jpg');
// const drink2 = require('../images/negroni.jpg');
// const drink3 = require('../images/mojito.jpg');
// const drink4 = require('../images/rattlesnake.jpg');
// const drink5 = require('../images/eggnogg.jpg');
// const drink6 = require('../images/zinger.jpg');

const drinksData = [
    {
        name: 'Bijou',
        image: '../images/bijou.jpg'
    },
    {
        name: 'Negroni',
        image: '../images/negroni.jpg'
    },
    {
        name: 'Mojito',
        image: '../images/mojito.jpg'
    },
    {
        name: 'Texas Rattlesnake',
        image: '../images/rattlesnake.jpg'
    },
    {
        name: 'Egg Nogg',
        image: '../images/eggnogg.jpg'
    },
    {
        name: 'Zinger',
        image: '../images/zinger.jpg'
    },
];

const renderDrinkCards = () => {
    return drinksData.map(({ name, image }) => {
        const card = document.createElement('div');
        const cardWrapper = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardName = document.createElement('span');
        const cardBorder = document.createElement('div');

        card.classList.add('card');
        cardWrapper.classList.add('card__image-wrapper');
        cardImage.classList.add('card__image');
        cardName.classList.add('card__name');
        cardBorder.classList.add('card__border');

        cardImage.setAttribute('src', image);
        cardImage.setAttribute('alt', name);
        cardName.innerText = name;

        cardWrapper.appendChild(cardImage);
        card.appendChild(cardWrapper);
        card.appendChild(cardName);
        card.appendChild(cardBorder);

        return card;
    })
};


export default () => {
    const main = document.querySelector('.main');
    const drinkCards = document.createElement('div');
    drinkCards.classList.add('main__drink-cards');
    const cards = renderDrinkCards();
    cards[1].classList.add('card--selected');
    cards.forEach(el => {
        drinkCards.appendChild(el);
    });
    main.appendChild(drinkCards);
};