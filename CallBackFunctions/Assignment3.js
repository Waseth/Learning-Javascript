// Assignment 3
function prepareOrder(order, callbacks){
    console.log('Preparing ' + order + '...')
    for(let i = 0; i < callbacks.length; i++){
        callbacks[i](order);
    }
}
function cookFood(order){
    console.log('Cooking ' + order + '...')
}
function serveFood(order){
    console.log('Serving ' + order + '...')
}
function collectPayment(order){
    console.log('Payment collected for ' + order + '.')
}
prepareOrder('Burger',[cookFood, serveFood, collectPayment]);

// function myCallback(someNumber){
//     return someNumber * 2;
// }

// function mainFunction(randomNumber, shouldCall, callBack){
//     let result = randomNumber;
//     if(shouldCall){
//         result = callBack(randomNumber);
//     }
//     return result;
// }
// mainFunction(20, true, myCallback)

