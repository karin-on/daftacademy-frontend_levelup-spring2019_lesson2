export default () => {
    const { body } = document;
    const div = document.createElement('div');
    div.classList.add('container');
    body.appendChild(div);
};