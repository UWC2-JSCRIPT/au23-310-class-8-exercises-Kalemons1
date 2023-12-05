let rgb = 255;

let darkenBackground = setInterval(() => {
    if (rgb > 0) {
        rgb--;
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`
    } else {
        clearInterval(darkenBackground);
    }
}, 100) 