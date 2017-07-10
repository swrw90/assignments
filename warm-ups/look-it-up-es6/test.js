let addWord = () => {

}

let lookItUp = () => {
    var dictionary = ['a', 'b', 'c'];

function isWordInDictionary(word,
    dictionary) {
    var val = false;
    dictionary.forEach(function (currentWord) {
        if (word === currentWord) {
            val = true;
        }
    })
    return val;
}

concole.log(isWordInDictionary('b', dictionary));


}

module.exports = {
    addWord,
    lookItUp
};