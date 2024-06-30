// Change Text Content
const changeTextButton = document.getElementById('changeTextButton');
const textElement = document.getElementById('textElement');

changeTextButton.addEventListener('click', function () {
    textElement.textContent = 'This is the new text content.';
});

// Change HTML Content
const changeHtmlButton = document.getElementById('changeHtmlButton');
const htmlElement = document.getElementById('htmlElement');

changeHtmlButton.addEventListener('click', function () {
    htmlElement.innerHTML = '<strong>This is the new HTML content.</strong>';
});

// Change Styles
const changeStyleButton = document.getElementById('changeStyleButton');
const styleElement = document.getElementById('styleElement');

changeStyleButton.addEventListener('click', function () {
    styleElement.style.backgroundColor = 'lightgreen';
    styleElement.style.color = 'darkgreen';
    styleElement.textContent = 'New Style Applied';
});
