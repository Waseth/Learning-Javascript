function lowercaseCount(str){
    let matches = str.match(/[a-z]/g)
    if(matches){
      return matches.length;
      }
    else{
      return 0;
    }
}