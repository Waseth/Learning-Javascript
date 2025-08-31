# Learning-Javascript

In this repo, I'll be mainly sharing my **JavaScript learning progress** from a frontend development course by [freeCodeCamp on YouTube](https://www.youtube.com/watch?v=zJSY8tbf_ys).

## Progress Log

### Day 1 – Getting Started(18th August 2025 - 19th August 2025)
Today, I learned about **data types** and **variables** in JavaScript.

#### Data Types (so far)
- **String** → `"Hello, world!"`
- **Number** → `42`
- **Boolean** → `true`, `false`
- **Object** → `{ name: "Waseth", age: 20 }`

#### Variables
- **`var`** → function-scoped, older way of declaring variables.
  ```js
  var name = "Alice";
  name = "Bob"; // reassigns, works fine


* **`let`** → block-scoped, can be reassigned but not re-declared in the same scope.

  ```js
  let age = 21;
  age = 22; // works
  // let age = 23; error
  ```

* **`const`** → block-scoped, cannot be reassigned.

  ```js
  const country = "Kenya";
  // country = "Uganda"; error
  ```

  ---

  - I have also complete these five challenges: https://github.com/zachgoll/fullstack-roadmap-series/tree/main/code-challenges.
  - You can check out my solutions on the various JS files I have created on this repo under the Variables and data types folder.


# Learning JavaScript – Day 2 (August 21st)

Today, I focused on **operators in JavaScript**, specifically:

1. **Arithmetic Operators**
2. **Assignment Operators**
3. **Comparison Operators**
4. **Logical Operators**

---

##  1. Arithmetic Operators
Used to perform basic math operations:

```js
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333
console.log(x % y); // 1
console.log(x ** y); // 1000
````

---

## 2. Assignment Operators

Assignment operators are used to **assign values to variables**, often combining assignment with other operations:

| Operator | Explanation                                                        | Example      | Result           |
| -------- | ------------------------------------------------------------------ | ------------ | ---------------- |
| `=`      | Assigns a value to a variable                                      | `let a = 5;` | `a` is `5`       |
| `+=`     | Adds a value to the variable and assigns the result                | `a += 3;`    | `a = a + 3 → 8`  |
| `-=`     | Subtracts a value from the variable and assigns the result         | `a -= 2;`    | `a = a - 2 → 6`  |
| `*=`     | Multiplies the variable by a value and assigns the result          | `a *= 2;`    | `a = a * 2 → 12` |
| `/=`     | Divides the variable by a value and assigns the result             | `a /= 4;`    | `a = a / 4 → 3`  |
| `%=`     | Takes the remainder of division and assigns it                     | `a %= 2;`    | `a = a % 2 → 1`  |
| `**=`    | Raises the variable to the power of a value and assigns the result | `a **= 3;`   | `a = a ** 3 → 1` |

Example in practice:

```js
let a = 5;

a += 3;  // a = 8
a -= 2;  // a = 6
a *= 2;  // a = 12
a /= 4;  // a = 3
a %= 2;  // a = 1
a **= 3; // a = 1
```

---

## 3. Comparison Operators

Used to compare values, returning `true` or `false`:

```js
console.log(5 == '5');  // true (loose equality)
console.log(5 === '5'); // false (strict equality)
console.log(10 != 5);   // true
console.log(10 !== '10'); // true
console.log(7 > 3);     // true
console.log(3 < 7);     // true
console.log(5 >= 5);    // true
console.log(4 <= 2);    // false
```

---

## 4. Logical Operators

Used to combine or invert conditions:

```js
let isSunny = true;
let isWarm = false;

console.log(isSunny && isWarm); // false (AND)
console.log(isSunny || isWarm); // true (OR)
console.log(!isSunny);          // false (NOT)
```

- There are five challenges I have completed.You can find them under the Operators folder

---


### Day 3 – Conditionals, Loops & Functions (22nd August 2025)

Today, I learned **conditionals, loops, and functions** in JavaScript.

#### 1. Conditionals
- **If-else** (basic syntax and formatting)
- **Else if** chains for multiple conditions
- **Switch statements** for cleaner multi-condition logic

Example:

```js
let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else {
  console.log("C");
}

// Switch example
let fruit = "apple";
switch(fruit) {
  case "apple":
    console.log("Red fruit");
    break;
  case "banana":
    console.log("Yellow fruit");
    break;
  default:
    console.log("Unknown fruit");
}
````

---

#### 2. Loops

* Learned **for loops** (structure and formatting)

```js

for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}
```

---

#### 3. Functions

* **Function format & syntax**
* **How to call functions**
* **Immediately Invoked Functions (IIFE)**
* **Parameters & arguments**
* **Scopes** (global vs local)
* **Anonymous functions stored in variables**
* **Arrow functions**
* **Return values** (I initially confused this with `console.log`but I later came to understand the difference)
* **Built-in JS functions** (found in documentation)

Examples:

```js
// Regular function
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Waseth"));

// Immediately invoked function
(function() {
  console.log("This runs immediately!");
})();

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

---

 ### Day 4 - Code challenges(Code wars)

- Here is a link to a collection of all the 25 challenges:https://www.codewars.com/collections/lesson-5-practice-challenges-number-fullstackroadmap
- Check out my solutions in the CodeWars 25 challenges folder

---

### Day 5

- I am through with the 25 challenges. I have to admit some of them were challenging but I realised looking up things from Google, Stack Overflow or Chatgpt isn't actually cheating. It is through looking them up that I understood most of the concepts especially the built-in Javascript methods.
- Stay tuned for day 6 as I will be learning more about **"BUILT-IN JAVASCRIPT UTILITY METHODS"**

### Day 6 (August 29th 2025)

- I went through how to read Documentations specifically [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
- In this lesson the tutor really emphasized on understanding how callbacks work so I asked chatgpt and it gave me real life examples on how they work and I asked it to give me assignments which I did and they solidified my understanding on callbacks.You can check out my solutions inside the CallBackFunctions folder
- Callbacks are functions passed into other functions to be executed later.
They’re super important because many **built-in JavaScript utility methods** depend on them.

### Day 7 (August 30th 2025)

## Callback Functions
**Why do we need callbacks?**
- For **reusability** (same logic, different outcomes).
- For **asynchronous programming** (wait for something to finish before running the next thing).

---

## JavaScript Primitives
- **Primitive data type** → the most basic building blocks in JS (string, number, boolean, null, undefined, symbol, bigint).
- Learned how the **`new` operator** works (e.g. `new Date()` creates a date object).

---

## JavaScript Dates
- Basics of writing dates in JS (`new Date()` etc.).
- Practiced built-in methods:
  - `.getFullYear()`
  - `.getMonth()`
  - `.getDate()`
  - `.getDay()`
  - `.getHours()`

---

## Regular Expressions (Regex)
- **What they mean:** a way to match text patterns.
- Learned about **Identifiers** and **Quantifiers**.
- Important note: I don’t need to memorize them, but I should know they exist and when to use them.

---

## JS String Methods
- Explored useful built-in methods:
  - `.replaceAll()`
  - `.toUpperCase()`
  - `.substring()`
  - `.trim()`
  - `.match()`

---

Got you 👍 — your snippet broke because the code blocks weren’t closed properly and the section headers were inside code fences.
Here’s a **clean, valid Markdown README** with all array methods formatted properly:


#  JavaScript Array Methods - Day 8(August 31st 2025)

Arrays are one of the most important data structures in JS. I practiced the **most common and useful methods** that I’ll need almost every day.

---

## 🔹 push() / pop()
- `push()` → adds item(s) at the end.
- `pop()` → removes item from the end.

```js
let arr = [1, 2, 3];
arr.push(4);      // [1,2,3,4]
arr.pop();        // [1,2,3]
```

---

## 🔹 shift() / unshift()

* `shift()` → removes first item.
* `unshift()` → adds item(s) at the start.

```js
let arr = [2, 3, 4];
arr.unshift(1);   // [1,2,3,4]
arr.shift();      // [2,3,4]
```

---

## 🔹 slice()

* Returns a **shallow copy** of part of the array (non-destructive).

```js
let arr = [10, 20, 30, 40];
console.log(arr.slice(1,3)); // [20,30] (end index not included)
console.log(arr);            // [10,20,30,40] (unchanged)
```

---

## 🔹 splice()

* Adds or removes elements **in place** (destructive).

```js
let arr = [1,2,3,4];
// remove 2 elements starting at index 1
arr.splice(1,2);
console.log(arr); // [1,4]

// insert at index 1
arr.splice(1,0,2,3);
console.log(arr); // [1,2,3,4]
```

---

## 🔹 findIndex() / indexOf()

* `indexOf(value)` → find index of value.
* `findIndex(callback)` → find index based on condition.

```js
let arr = [5, 10, 15];

console.log(arr.indexOf(10));          // 1
console.log(arr.findIndex(n => n > 10)); // 2
```

---

## 🔹 map()

* Transforms each element → returns **new array**.

```js
let nums = [1,2,3];
let doubled = nums.map(n => n*2);
console.log(doubled); // [2,4,6]
```

---

## 🔹 forEach()

* Runs a function on each element, **no return value**.

```js
let nums = [1,2,3];
nums.forEach(n => console.log(n*2));
// logs: 2, 4, 6
```

---

## 🔹 includes()

* Checks if array has an element → returns `true`/`false`.

```js
let arr = ["apple","banana","orange"];
console.log(arr.includes("banana")); // true
console.log(arr.includes("grape"));  // false
```

---

## 🔹 filter()

* Returns new array with elements that **pass a condition**.

```js
let nums = [1,2,3,4,5];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2,4]
```

---

## 🔹 reduce()

* Reduces array to a single value (sum, product, etc).

```js
let nums = [1,2,3,4];
let sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
```

---

## 🔹 Math Utilities
JavaScript has a built-in `Math` object with tons of useful functions.
It’s not a constructor → you don’t do `new Math()`. You just call its methods.

```js
console.log(Math.PI);          // 3.141592653589793
console.log(Math.sqrt(16));    // 4
console.log(Math.pow(2,3));    // 8
console.log(Math.floor(4.7));  // 4
console.log(Math.ceil(4.2));   // 5
console.log(Math.random());    // random number between 0 and 1
```

**Use cases**: rounding numbers, generating randoms, math-heavy logic in games/animations.

---

## 🔹 JavaScript Errors

Errors are part of coding. JavaScript gives you several built-in error types:

* **`ReferenceError`** → using a variable that’s not defined.
* **`TypeError`** → wrong type of operation (like calling something that’s not a function).
* **`SyntaxError`** → typo or invalid code.
* **`RangeError`** → number outside expected range.

```js
// ReferenceError
console.log(x); // x is not defined

// TypeError
let num = 5;
num(); // not a function
```

---

## 🔹 Undefined, Null, and NaN

* **`undefined`** → default value for variables that haven’t been assigned.
* **`null`** → intentional empty value.
* **`NaN`** → “Not-a-Number”, happens when math goes wrong.

```js
let a;
console.log(a);       // undefined

let b = null;
console.log(b);       // null

let c = "abc" * 3;
console.log(c);       // NaN
```

**Note:**

* `undefined` = JS doesn’t know the value yet.
* `null` = dev *explicitly* said “this is empty”.
* `NaN` = invalid math.

---

## 🔹 try...catch

Error handling in JavaScript.
`try` lets you test a block of code.
`catch` lets you handle errors gracefully.

```js
try {
  let result = JSON.parse("{ bad json }");
  console.log(result);
} catch (error) {
  console.log("Something went wrong:", error.message);
}
```

- Prevents your program from completely crashing.
- Useful in async code (APIs, file reading, etc.).

---

## 🔹 Lodash Library (overview)

Lodash is a utility library that makes working with arrays, objects, and functions easier.
It gives shortcuts for things you’d normally write a lot of code for.

```js
// Example: _.chunk splits array into groups
let _ = require("lodash");
console.log(_.chunk([1,2,3,4,5], 2));
// [[1,2], [3,4], [5]]

// Example: _.debounce (rate-limit a function)
const log = _.debounce(() => console.log("typing..."), 500);
log(); log(); log(); // only logs once after 500ms
```

**I noted that:** You don’t *need* Lodash (modern JS has many built-ins),
but it can make your life way easier for complex utilities.







