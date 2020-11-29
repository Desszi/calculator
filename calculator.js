const addClickListener = () => {
    document
        .querySelectorAll('.btn')
        .forEach(element => {
            element.addEventListener('click', handleClick);
        });
}
const handleClick = (event) => {
    modifyInput(event.target);
}

const modifyInput = (element) => {
    const input= document
        .querySelector('.in');
    input.textContent = element.data;
}