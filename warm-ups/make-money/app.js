var money = 123456789;

function makeItRain(money) {
    money = money.toString();
    money = money.split("");
    money.splice(-2, 0, ".");

    var posOfFirst = money.length % 3;

    for (var i = (posOfFirst - 1); i < money.length; i + 3) {
        money = money.splice(i - 1, 0, ",");
    }
    money = money.splice(0, 0, "$");
    money = money.toString();
    console.log(money);
}


==================================

//let money = 123456789;
//
//money = money.toLocaleString("en-US", {
//    style: "currency",
//    currency: "USD"
//})
//console.log(money);
