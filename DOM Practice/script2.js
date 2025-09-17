const mainButton = document.querySelector('button');
const body = document.body;
const currentColor = document.querySelector('.current-color');

console.log(currentColor);


function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

mainButton.addEventListener('click', () => {
    console.log('Button clicked!');
    const randomColor = randomColorGenerator() ;
    console.log(randomColor);
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
});

