// Do the following two blocks of code result in the same answer?
// If not, which one would you recommend using and why?

// SNIPPET 1

// const firstNumber = 20;
// const secondNumber = '20';

// const result = firstNumber === secondNumber;

// console.log(result);

// SNIPPET 2

// const firstNumber = 20;
// const secondNumber = '20';

// const result = firstNumber == secondNumber;

// console.log(result);

// No!They don't. Because the first one results to false and the second results to true.
// I'd recommend the first one because the use of === also covers and checks the data type
