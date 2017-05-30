var lengthFour = [1, 2, 4, 6]; //arrays to be compared
var lengthFive = [4, 9, 11, 6];
var emptyArray = [];
var dupeArray = [1, 9, 5, 9, 0]; 

//two arrays find what's duplicates and remove
function compareArray(array, arrayTwo) {
    var compareOne;
    var compareTwo;
    for (var i = 0; i < array.length; i++) {
        compareOne = array[i];
        for (var j = 0; j < arrayTwo.length; i++) {
            compareTwo === array[i];
            if (compareOne = compareTwo) {
                arrayTwo.splice(j, 1);
                array.splice(i, 1);
                i--;
                j--;
            }
        }
    }
    var newArray = array.concat(arrayTwo); //two arrays combined new array
    console.log(newArray);
}
compareArray(lengthFour, lengthFive);
compareArray(lengthFour, emptyArray);
compareArray(dupeArray, lengthFive);







//edge case
//length of array may be different
// order
// empty array
// duplicates in one array 

