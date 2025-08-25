function getCount(str) {
  let newArr = str.split('');
  let count = 0;
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] === 'a' || newArr[i]=== 'e' || newArr[i] === 'i' || newArr[i] ==='o' || newArr[i] ==='u'){
       count++;
    }
  }
  return count;
}
