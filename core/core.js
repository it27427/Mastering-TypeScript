function addTwoNumber(n1, n2, bool1, phrase) {
    var result = n1 + n2;
    if (bool1) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 3.14159;
var bool1 = true;
var phrase = 'The result is: ';
addTwoNumber(number1, number2, bool1, phrase);
// console.log(sum);
