// What does 'expression5' evaluate to? How could you write this in a single line of code

const expression1 = 100 % 50; // 0
const expression2 = 100 / 50; // 2
const expression3 = expression1 < expression2; // true
const expression4 = expression3 && 300 + 5 === 305; // true
const expression5 = !expression4; // false

console.log(expression5);

// It evaluates to 'false'

const singleLineExpression = !(((100 % 50) < (100 / 50)) && (300 + 5 === 305));
console.log(singleLineExpression);