
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
- Check out my solution in the CodeWars 25 challenges folder




