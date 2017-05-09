var a = ["clothes", "mess", "food", "trash"];

function add(a) {
    var response = "";
    var total = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === "clothes" || a[i] === "trash") {
            total++;
        }
    }
    if (total => 2) {
        return "clean or get out";
    } else {
        return "it's chill";
    }
}
console.log(add(a));