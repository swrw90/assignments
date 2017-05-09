var goombaCount = 0;
var bombCount = 0;
var cheepCount = 0;


const goombaPrice = 5;
const bombPrice = 7;
const cheepPrice = 11;

function goombaClick() {
    goombaCount++;
    document.getElementById("Goomba-Box").value = "Count Is " + goombaCount + " " + "Price Is " + (goombaCount * goombaPrice);
    getTotal();
}

function bombClick() {
    bombCount++;
    document.getElementById("Bomb-Box").value = "Count Is " + bombCount + " " + "Price Is " + (bombCount * bombPrice);
    getTotal();
}

function cheepClick() {
    cheepCount++;
    document.getElementById("Cheep-Box").value = "Count Is " + cheepCount + " " + "Price Is " + (cheepCount * cheepPrice);
    getTotal();
}

function getTotal() {
    document.getElementById("Total-Box").value = "Grand Total Is " + ((goombaCount * goombaPrice) + (bombCount * bombPrice) + (cheepCount * cheepPrice)) + " Coins!!";
}
