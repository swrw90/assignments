let fizzBuzz = () => {
    let result = [];
    for (i = 0; i <= 20; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuzz");
        }
        else if (i % 3 == 0) {
            result.push("Fizz");
        } else if (i % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;

}

module.exports = fizzBuzz;