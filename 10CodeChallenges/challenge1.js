function filter_list(arr) {
  const newList = arr.filter((arrItem) => {
    return typeof arrItem  === "number"
  })
  return newList;
}