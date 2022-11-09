var myFvar = 'My first var';
function myFunctionTypeScript(x, y) {
    return x + y;
}
//ES6 or ES 2015
var numberOne = 10;
var PI = 3.14;
var numberTwo = [1, 2, 3];
numberTwo.map(function (valueOne) {
    return valueOne * 2;
});
numberTwo.map(function (valueOne) { return valueOne * 2; });
var cMath = /** @class */ (function () {
    function cMath() {
    }
    cMath.prototype.rWord = function (firstName, lastName) {
        firstName = 'Lucas';
        lastName = ' Lima';
        return firstName + lastName;
    };
    return cMath;
}());
var numberThree = 'number 3';
numberThree = '3';
