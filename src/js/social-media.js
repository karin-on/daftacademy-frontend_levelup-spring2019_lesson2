const links = [
    {
        href: 'https://dribbble.com/',
        icon: `<i class="fab fa-dribbble"></i>`
    },
    {
        href: 'https://www.instagram.com/',
        icon: `<i class="fab fa-instagram"></i>`
    },
    {
        href: 'https://www.facebook.com/',
        icon: `<i class="fab fa-facebook-f"></i>`
    }
];

const renderLinks = () => {
    return links.map(({ href, icon }) => {
        const iconsLink = document.createElement('a');
        iconsLink.classList.add('icons__link');
        iconsLink.setAttribute('href', href);
        iconsLink.innerHTML = icon;
        return iconsLink;
    });
};


export default () => {
    const footer = document.querySelector('.footer');
    const socialMedia = document.createElement('div');
    const socialMediaTxt = document.createElement('div');
    const socialMediaIcons = document.createElement('div');
    const links = renderLinks();

    socialMedia.classList.add('footer__social-media');
    socialMediaTxt.classList.add('social-media__text');
    socialMediaIcons.classList.add('social-media__icons');
    socialMediaTxt.innerText = 'Follow us';

    links.forEach(el => {
        socialMediaIcons.appendChild(el);
    });
    socialMedia.appendChild(socialMediaTxt);
    socialMedia.appendChild(socialMediaIcons);

    footer.appendChild(socialMedia);
};
