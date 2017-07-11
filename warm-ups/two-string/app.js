let middleStr = (str) => {
    if(str.length % 2 != 0) {
        throw "String is odd";
    } else if(str.length <= 0) {
        throw "String is empty";
    }
    let newStr = str.substring((str.length / 2) - 1, (str.length / 2) + 1);
    return newStr;
}
module.exports = middleStr;