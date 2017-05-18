var string = "ggggggggxkljfvlsjkfg";
var repeatedChar = string[0];

function findRepeat(string) {
    for (i = 0; i < string.length; i++) {
        if (string[i] !== repeatedChar)
            return string[i];
    }
}

console.log(findRepeat(string));
