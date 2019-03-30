export default () => {
    const footer = document.querySelector('.footer');
    const contact = document.createElement('div');
    const contactLink = document.createElement('a');

    contact.classList.add('footer__contact');
    contactLink.classList.add('contact__link');

    contact.innerText = 'Say hello! - ';
    contactLink.setAttribute('href', 'mailto:hi@dinks.com');
    contactLink.innerText = 'hi@dinks.com';

    contact.appendChild(contactLink);
    footer.appendChild(contact);
};


