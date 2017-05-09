var readLine = require("readline-sync");
var userName;
var playerAttackPower;
var playerHp;
var playerCharacter;
var enemyHp;
var enemyAttackPower;
var enemyName;
var ranAway = false;
var inventory = [];
const rewards = ["Schmeckles", "Plumbus", "Mega Seeds"];
const characters = ['Warrior', 'Bird Person', 'Squanchy', 'Reverse Giraffe', 'Krombopulos Michael'];

function playerAttackPowerGenerator() {
    return (Math.floor((Math.random() * 10)) + 25);
};

function hpGenerator() {
    if (userCharacter === "Warrior") {
        return 100;
    } else if (userCharacter === "Bird Person") {
        return 70;
    } else if (userCharacter === "Squanchy") {
        return 85;
    } else if (userCharacter === "Reverse Giraffe") {
        return 100;
    } else if (userCharacter === "Krombopulus Michael") {
        return 100;
    }
};

function configurePlayer() {
    playerHp = hpGenerator();
    playerAttackPower = playerAttackPowerGenerator();
}

function typeGenerator() {
    var randomVillain = Math.floor((Math.random() * 3) + 1);
    if (randomVillain <= 1) {
        return "Gleep Gloop";
    } else if (randomVillain <= 2) {
        return "Cronenberg";
    } else {
        return "King Jellybean";
    }
};

function villainHpGenerator(name) {
    if (name === "Gleep Gloop") {
        return (Math.floor((Math.random() * 20)) + 15);
    } else if (name === "Cronenberg") {
        return (Math.floor((Math.random() * 15)) + 20);
    } else {
        return (Math.floor((Math.random() * 10)) + 30);
    }
};

function villainAttackPowerGenerator() {
    return (Math.floor((Math.random() * 5)) + 20);
};

function configureVillain() {
    enemyName = typeGenerator();
    enemyHp = villainHpGenerator(enemyName);
    enemyAttackPower = villainAttackPowerGenerator();
};

function giveReward() {
    var index = (Math.floor(Math.random() * 3));
    return rewards[index];
}

// Get user input and assigns a character
userName = readLine.question("Welcome traveler. May I have your name? ");
var index = readLine.keyInSelect(characters, 'Choose your character');
var userCharacter = characters[index];
configurePlayer();

// Display the character to the user by console logging.
console.log(`\nOk ${userCharacter} is your character!`);
console.log(`Health Points: ${playerHp} Attack Power: ${playerAttackPower}\nLet's begin!`);

console.log(`\nThe creatures of Galgamek 9 are in great danger. They're under attack by the Gleep Glop army. They've called upon you for help.\n`);

// Asks user for action. And set's the action to variable travel choice
var travel = ['Fly', 'Walk'],
    index = readLine.keyInSelect(travel, `\n${"Will you fly to the planet Galgamek 7 or will you just walk down to the bar and get drunk? "}\n`);
var travelChoice = travel[index];

if (travelChoice === "Fly") {
    console.log(`\n${"You get in your spaceship and fly to the planet Galgamek 12"}\n`);
} else {
    console.log(`\n${"You get drunk and pass out, when you wake up you're on the planet Galgamek 6"}\n`);
}

configureVillain()
console.log(`\n${"Upon your arrival to Galgamek-A-Derp, you're greeted by a"} ${enemyName} ${"from the Gleep Glop Army."}`);


while (playerHp > 0) {
    if (enemyHp <= 0 || ranAway) {
        configureVillain();
        console.log(`${enemyName} appeared!`);
        ranAway = false;
    }
    var combat = ["Fight", "Run"],
        index = readLine.keyInSelect(combat, 'Will you fight or run?');
    var combatChoice = combat[index];


    if (combatChoice === "Fight") {
        enemyHp = enemyHp - playerAttackPower;
        playerHp = playerHp - enemyAttackPower;

        console.log(`${userCharacter} fought bravely, dealing ${playerAttackPower} to ${enemyName}.\n
${enemyName} dealt ${enemyAttackPower} to ${userCharacter}.\n
${userCharacter} remaining HP:${playerHp}. Enemies remaining HP:${enemyHp}`);

    } else {
        var chance = (Math.floor((Math.random() * 2)) + 1);
        if (chance === 1) {
            console.log("Got away safely");
            ranAway = true;;
        } else {
            console.log(`\nYou couldn't escape! ${enemyName} attacks you dealing ${enemyAttackPower} damage.`);
            playerHp = playerHp - enemyAttackPower;

        }
    };
    if (enemyHp <= 0) {
        var reward = giveReward();
        inventory.push(reward);
        console.log(`You won the battle! Add ${reward} to your inventory.\n`);
        console.log(`Inventory: ${inventory}`);
    }
};
console.log("You're dead! Game over!");
