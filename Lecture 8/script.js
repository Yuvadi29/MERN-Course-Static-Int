// Event handling for the button click
const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', function () {
    alert('Button was clicked!');
});

// Event handling for input text change
const changeText = document.getElementById('changeText');
changeText.addEventListener('input', function () {
    console.log(`Input changed to: ${changeText.value}`);
});

// Event handling for mouse hover
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', function () {
    hoverBox.style.backgroundColor = 'lightgreen';
    hoverBox.textContent = 'You are hovering!';
});

hoverBox.addEventListener('mouseout', function () {
    hoverBox.style.backgroundColor = 'lightblue';
    hoverBox.textContent = 'Hover over me!';
});
