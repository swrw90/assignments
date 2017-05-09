var rs = require("readline-sync");

var counter = 10;

var scenario = function(){
    var intro = rs.keyInYN("Do you like Rick and Morty?");
    if(intro) {
        counter += 1;
        console.log(counter);
    };
    if(!intro) {
        counter -= 1;
        console.log(counter);
    } 
};

while(counter > 0 || counter <= 15){
    scenario();
};

if(counter === 15){
    console.log("you win!");
};
if(counter === 0){
    console.log("you lose!");
};

