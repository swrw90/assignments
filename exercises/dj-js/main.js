document.getElementById("box").addEventListener("mouseover", makeBoxBlue)

function makeBoxBlue() {
    document.getElementById("box").style.backgroundColor = "#4286f4";
}
document.getElementById("box").addEventListener("mousedown", makeBoxRed);

function makeBoxRed() {
    document.getElementById("box").style.backgroundColor = "#e84040";
}

document.getElementById("box").addEventListener("mouseup", makeBoxYellow);

function makeBoxYellow() {
    document.getElementById("box").style.backgroundColor = "#e2d344";
}

document.getElementById("box").addEventListener("dblclick", makeBoxGreen);

function makeBoxGreen() {
    document.getElementById("box").style.backgroundColor = "#3f9b53";
}

document.getElementById("box").addEventListener("wheel", makeBoxOrange);

function makeBoxOrange() {
    document.getElementById("body").style.backgroundColor = "#d6a035";
}