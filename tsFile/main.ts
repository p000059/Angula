let myFvar = 'My first var';

function myFunctionTypeScript(x, y) {

    return x + y;
}

//ES6 or ES 2015
let numberOne = 10;
const PI = 3.14;

let numberTwo = [1,2,3];

numberTwo.map(function(valueOne) {

    return valueOne * 2;
});

numberTwo.map(valueOne => valueOne * 2);

class cMath{

    rWord(firstName, lastName){

        firstName = 'Lucas';
        lastName = ' Lima';

        return firstName + lastName;
    }
}

let numberThree: String = 'number 3';
numberThree = '3';