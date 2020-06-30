const colorChange = document.getElementById('colorChange')
const colorNum = document.getElementById('colorNum');
const body = document.body;

colorChange.addEventListener('click',ChangeColor);

function ChangeColor(){
    const color1 = GetColor();
    const color2 = GetColor();
    const color3 = GetColor();


    const colorString = `rgb(${color1},${color2},${color3})`;
    console.log(colorString);
    body.style.background = colorString;
    colorNum.innerText = colorString;
}

function GetColor() {
     return Math.floor(Math.random()*256);
}
