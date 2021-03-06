import buttonsTxt from '../data/filters-buttons';


const renderFilterButtons = () => {
    return buttonsTxt.map(el => {
        const button = document.createElement('button');
        button.classList.add('filters__button');
        button.innerText = el;
        return button;
    });
};

export default () => {
    const main = document.querySelector('.main-content');
    const filters = document.createElement('div');
    filters.classList.add('main-content__filters');

    const buttons = renderFilterButtons();
    buttons.forEach(el => {
        filters.appendChild(el);
    });
    buttons[0].classList.add('filters__button--selected');

    main.appendChild(filters);
}