let myBoolean = true;
let myString = 'hello world';
let firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;
let myArray = [myBoolean,myString];
let sumNumbers = firstNumber + secondNumber;
let myObject = {
    firstProperty: myArray,
    sumProperty: sumNumbers
    };
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);