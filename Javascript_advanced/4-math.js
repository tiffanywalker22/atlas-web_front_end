function divideBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber / SecondNumber;
    };
}

function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + SecondNumber;
    };
}

var divideBy10 = divideBy(10);
var divideBy100 = divideBy(100);
var addBy100 = addBy(100);
var addBy1000 = addBy(1000);