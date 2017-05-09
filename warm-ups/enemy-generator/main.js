var enemies = [];

//constructor function === object creator

function Enemy(tp, hp, df) {
    this.type = typeGenerator();
    this.hitPoints = hpGenerator();
    this.defense = (this.hitPoints * 3);

}


function typeGenerator() {
    var randomVillain = Math.floor((Math.random() * 3) + 1);
    if (randomVillain <= 1) {
        return "Ancient Dragon";
    } else if (randomVillain <= 2) {
        return "Prowler";
    } else {
        return "Mighty Grunt";
    }
};

function hpGenerator() {
    var villainHp = typeGenerator();
    if (villainHp === "Ancient Dragon") {
        return (Math.floor((Math.random() * 20)) + 81);
    } else if (villainHp === "Prowler") {
        return (Math.floor((Math.random() * 20)) + 50);
    } else {
        return (Math.floor((Math.random() * 20)) + 20);
    }
};

function dfGenerator() {
    var villainHp = typeGenerator();
    if (villainHp === "Ancient Dragon") {
        return (Math.floor((Math.random() * 20)) + 81);
    } else if (villainHp === "Prowler") {
        return (Math.floor((Math.random() * 20)) + 50);
    } else {
        return (Math.floor((Math.random() * 20)) + 20);
    }
};

for (var i = 0; i < 100; i++) {
    var enemy = new Enemy();
    enemies.push(enemy);
    console.log(enemies);

};
