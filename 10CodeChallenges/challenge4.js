function persistence(num) {
  let count = 0;
  while(num >= 10){
    let product = 1;
    let numStr = num.toString();
    for(let i = 0; i < numStr.length; i++){
      product = product * Number(numStr[i]);
    }
    num = product;
    count++
  }
   return count;
}