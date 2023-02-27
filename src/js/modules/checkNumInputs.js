const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
            checkInputValue();
        });
    });

    function checkInputValue() {
        let button = document.querySelector('.popup_calc_button');
        let width = document.querySelector('#width');
        let height = document.querySelector('#height');
        if (width.value && height.value) {
            button.removeAttribute('disabled');
        }
    }
};

export default checkNumInputs;