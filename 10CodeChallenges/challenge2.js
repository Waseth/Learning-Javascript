function arrayDiff(a, b) {
  const newArray = a.filter((aItem)=>{
    return !b.includes(aItem);
  })
  return newArray;
}