let boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colors = ['#72c3dc', '#2bbead', '#6998ab', '#bfbfbf', '#2f454e'];
let text = "";

boxes.forEach((i) => {
    text += "<div class='box-wrapper'><div style='background-color : " + colors[Math.floor(Math.random() *
        colors.length)] + "' class='box'>" + i + "</div><div class='box-extend'>" + i + "</div></div>";
})

document.getElementById("demo").innerHTML = text;

document.getElementById("b1").addEventListener("click", shuffle, true);
document.getElementById("b2").addEventListener("click", sortAll, true);

function shuffle() {
    let funcText = '';
    document.getElementById("demo").innerHTML = ''
    for (let i = boxes.length - 1; i > 0; i--) {
        const k = Math.floor(Math.random() * (i + 1));
        [boxes[i], boxes[k]] = [boxes[k], boxes[i]];
    }
    boxes.forEach((i) => {
        funcText += "<div class='box-wrapper'><div style='background-color : " + colors[Math.floor(Math
                .random() * colors.length)] + "' class='box'>" + i + "</div><div class='box-extend'>" + i +
            "</div></div>";
    })

    document.getElementById("demo").innerHTML = funcText;
}

function sortAll() {
    let sortText = '';
    document.getElementById("demo").innerHTML = ''
    boxes = boxes.sort();
    boxes.forEach((i) => {
        sortText += "<div class='box-wrapper'><div style='background-color : " + colors[Math.floor(Math
                .random() * colors.length)] + "' class='box'>" + i + "</div><div class='box-extend'>" + i +
            "</div></div>";
    })
    document.getElementById("demo").innerHTML = sortText;
}