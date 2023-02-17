const hexColor = document.getElementById("hexInput");
const rgbColor = document.getElementById("rgbClone");
const testColor = document.getElementById("colorTest");

function convertColor() {
    if (hexColor.value.length === 7) {
        let a = hexColor.value[1] + hexColor.value[2];
        b = hexColor.value[3] + hexColor.value[4];
        c = hexColor.value[5] + hexColor.value[6];

        r = parseInt(a, 16);
        g = parseInt(b, 16);
        b = parseInt(c, 16);
        console.log(r.toString() + g.toString() + b.toString());
        const finishRgb = `${r.toString()} , ${g.toString()} , ${b.toString()}`;
        rgbColor.innerText = `rgb(${finishRgb})`;
        testColor.style.backgroundColor = `rgb(${finishRgb})`;
    } else {
        testColor.innerText = "HEX sintax is #FF5733";
    }
}
