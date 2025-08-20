// What does 'result' evaluate to?

const myObj = {
    prop1: 'first value',
    prop2: 20
};

const myArray = [40,50,2];

const result = myObj.prop2 === (myArray[0] / myArray[2]); // 20 === 20

// It evaluates to true