let state = {};


let input = document.getElementById('first-name');
input.addEventListener('change', handleInputChange);

let button = document.getElementById('reverse-btn');
button.addEventListener('click', handleBtnClick);

function handleBtnClick(event) {
    state.firstName = state.firstName.split('').reverse().join('');
    state.clicks++;
    render();
}

function handleInputChange(event) {
    state.firstName = event.target.value;
}

function render() {
    document.getElementById('output').textContent = state.firstName;
    document.getElementById('clicks-output').textContent = state.clicks;
}

function init() {
    state.clicks = 0;
    state.firstName = 'Omar';
    render();
}

init();