var goombaCount = 0;
var bombCount = 0;
var cheepCount = 0;


const goombaPrice = 5;
const bombPrice = 7;
const cheepPrice = 11;

function goombaClick() {
    goombaCount++;
    $('#Goomba-Box').val("Count Is " + goombaCount + " " + "Price Is " + (goombaCount * goombaPrice));
    getTotal();
}

function bombClick() {
    bombCount++;
    $("#Bomb-Box").val("Count Is " + bombCount + " " + "Price Is " + (bombCount * bombPrice));
    getTotal();
}

function cheepClick() {
    cheepCount++;
    $("#Cheep-Box").val("Count Is " + cheepCount + " " + "Price Is " + (cheepCount * cheepPrice));
    getTotal();
}

function getTotal() {
    $("#Total-Box").val("Grand Total Is " + ((goombaCount * goombaPrice) + (bombCount * bombPrice) + (cheepCount * cheepPrice)) + " Coins!!");
}
