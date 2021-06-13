let state = {};

let templateSource = $('#my-template').html();
console.log("templateSource: ", templateSource)
let template = Handlebars.compile(templateSource);
console.log("template : ", template)
$('#first-name').on('change', handleInputChange);
$('#reverse-btn').on('click', handleBtnClick);

function handleBtnClick(event) {
    state.firstName = state.firstName.split('').reverse().join('');
    state.clicks++;
    render();
}

function handleInputChange(event) {
    state.firstName = event.target.value;
}

function render() {
    $('#output').html(template(state));
}

function init() {
    state.clicks = 0;
    state.firstName = 'Omar';
    render();
}

// document.ready 
$(function() {
    console.log("init fnt ...")
    init();
})
