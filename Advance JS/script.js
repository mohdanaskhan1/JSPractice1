const body = document.body;
const button = document.querySelector('.btn');

const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    console.log(rgb);
    body.style.backgroundColor = rgb;
}, 1000);


button.addEventListener('click', () => {
    clearInterval(intervalId);
    button.textContent = body.style.backgroundColor;
});


