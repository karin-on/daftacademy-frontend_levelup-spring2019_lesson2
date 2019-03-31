export default () => {
    const container = document.querySelector('.container');
    const main = document.createElement('main');
    main.classList.add('main-content');
    container.appendChild(main);
}