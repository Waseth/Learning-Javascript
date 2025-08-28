function arrayPlusArray(arr1, arr2) {
  let total = 0
  for(let i = 0; i < arr1.length; i++){
    total = total + arr1[i];
  }
  for(let i = 0; i < arr2.length; i++){
    total = total + arr2[i];
  }
  return total
}