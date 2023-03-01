// arrow function
const multiply = (num1, num2) => {
    return num1 * num2;
};
console.log(multiply(5, 5));

const toCelsius = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32);
};
console.log(toCelsius(10));

const padZeros = (num, totallen) => {
    var numStr = num.toString();
    var numZeros = totallen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
};
console.log(padZeros(5, 1));

const power = (base, exponent) => {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
};


