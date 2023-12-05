let rgb = 0;

let lightenScreen = setInterval ( () => {
if (rgb < 255){
rgb++;
} else {
clearInterval(lightenScreen)
}
document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`

}, 100 ); 
