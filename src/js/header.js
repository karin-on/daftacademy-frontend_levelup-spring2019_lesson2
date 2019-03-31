export default () => {
    const container = document.querySelector('.container');
    const header = document.createElement('header');
    // const innerContainer = document.createElement('div');
    const headerLogo = document.createElement('h1');

    header.classList.add('header');
    headerLogo.classList.add('header__logo');
    headerLogo.innerText = "d'inks";

    header.appendChild(headerLogo);
    container.appendChild(header);
}