import drinksData from '../data/drinks-data';


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
    const main = document.querySelector('.main-content');
    const drinkCards = document.createElement('div');
    drinkCards.classList.add('main-content__drink-cards');
    const cards = renderDrinkCards();
    cards[1].classList.add('card--selected');
    cards.forEach(el => {
        drinkCards.appendChild(el);
    });
    main.appendChild(drinkCards);
};