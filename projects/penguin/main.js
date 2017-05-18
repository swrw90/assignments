/*This is an RPG called Penguins Vs. Communists*/
console.log(`The year is 1950 during the Cold War. The Soviet communists are making plans to invade Antarctica. The penguins of the south aren't going down without a fight.\n`);


var switchParty;

var testModule = require("./app.js");
console.log(testModule);


//Constructs two opposing Parties
function Party(population, name) {
    this.population = population;
    this.name = name;
    this.alive = function () {
        return this.population > 0;
    }
}
var penguins = new Party(1000000, "penguins");
var communists = new Party(1000000, "communists");

function createRandomNum(min, max) {
    return (Math.floor((Math.random() * max)) + min);
}

//Determines which party will attack first
function coinFlip() {
    var chance = createRandomNum(1, 2);
    if (chance === 1) {
        sendNuke(penguins);
        console.log("Communist attack first")
    } else {
        sendNuke(communists);
        console.log("Penguins attack first")
    }
}

//A random algorithm to determine if the attack is a miss or a hit.
function sendNuke(party, onHit, onMiss) {
    var chance = createRandomNum(1, 2);
    if (chance === 1) {
        onHit(party);
    } else {
        onMiss(party);
    }
}


//Determines damage or population loss from attack
function onHit(party) {
    var populationLoss = createRandomNum(200000, 100000);
    party.population -= populationLoss; //victim population decreases by random number within this amount.
    console.log(`\nIt's a hit!\n`);
    console.log(`${party.name} Population Loss: ${populationLoss}\nRemaining Population: ${party.population}`)
    switchParty = !switchParty
}

//Informs user which party missed the attack, opposing party now gets to attack.
function onMiss(party) {
    console.log(`${party.name} Missed the attack missed!`);
    switchParty =!switchParty;
}


//Start logic*/
var chance = createRandomNum(1, 2);
if (chance === 1) {
    switchParty = true;
    sendNuke(communists, onHit, onMiss);
} else {
    switchParty = false;
    sendNuke(penguins, onHit, onMiss);
}

while (penguins.alive() && communists.alive()) {
    if (switchParty){
        sendNuke(communists, onHit, onMiss);
    }else{
        sendNuke(penguins, onHit, onMiss);
    }  
}










/* J Query Intro Notes */

//Normal
//document.getElementById("text").textContent = "Whatever I want"

/* JQ uses .text method to set text to the string
$("#text").text("This is from jQuery"); or
console.log($("text"));

$("#text).append("This is my new text);

----------
console.log($(".nvabar")); 
"ID comes back as an object, class as array because there can be multiple things in a class. 


$("ul.navbar") specific class within a list
$("ul#navbar") specific id within a list

$(input[type="text"])


select all list items with class navbar
$("ul.navbar li)

can save as var for later use

var = navbarLis = $("ul.navbar li"); //


$("ul.navbar li").parent() Grab the parent(s) of selected element(s)

--------------

$("#say-name").click(function() {
console.log("My name is stupid, I'm a button);
});


$("#say-name").on("mouseenter mouseleave click",(function() {
console.log("My name is stupid, I'm a button);
});



$("#say-name").on({
click: function() {console.log("Clicked!")},
mouseover: function() 
console.log("Hovered!")}
});

---------

$("ul.navbar li").click(function() {
    console.log($(this.text())
});


$("ul.navbar li").click(function() {
    var text = $(this).text();
    if (text === "Clicked!) {
    $(this).text("Unclicked")
    } else {
    $(this).text("Clicked!);
    }
    });


---------------
$("#todos").html("<input type="checkbox"/><span>Thing to do </span);


$("#todos").html("<input type="checkbox"/><span>Thing to do </span);

select button
add a click handler
when clicked: select the div of todos
append some new HTML

$("#add-todo").click(function() {
    $("#todos").append("<div><input type="checkbox"/><span>New todo item</span></div>");
})



$("#add-todo").click(function() {
    $("#todos").append("<div><input type="checkbox"/><span> +$(#"new-todo").val(Empty Parenth gets the value of input) + "</span></div>");
    $("#new-todo").val("");
    $("#new-todo").focus;
});

---------

$("#para").click(function() {
 $(this).css("color", "red");
});


$("#para).click(function(){
$(this).addClass("red");
// $(this).removeClass("blue");
// $(this).toggleClass("red");

}) 

----------
