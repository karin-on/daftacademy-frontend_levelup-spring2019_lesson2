const renderFilterButtons = () => {
    const buttonsTxt = [
        'Beer',
        'Coffee / Tea',
        'Cocktail',
        'Cocoa',
        'Milk / Float / Shake',
        'Shot',
        'Punch / Party Drink',
        'Homemade Liqueur'
    ];

    return buttonsTxt.map(el => {
        const button = document.createElement('button');
        button.classList.add('filters__button');
        button.innerText = el;
        return button;
    });
};

export default () => {
    const main = document.querySelector('.main');
    const filters = document.createElement('div');
    filters.classList.add('main__filters');

    const buttons = renderFilterButtons();
    buttons.forEach(el => {
        filters.appendChild(el);
    });

    main.appendChild(filters);
}