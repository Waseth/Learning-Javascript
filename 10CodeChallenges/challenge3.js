function isValidWalk(walk) {
  if(walk.length !== 10){
    return false;
  }
  let north = 0; let south = 0; let west = 0; let east = 0;
  for(let i = 0; i < walk.length; i++){
    let step = walk[i];
    if(step === 'n'){
      north++
    }
    if(step === 's'){
      south++
    }
    if(step === 'e'){
      east++
    }
    if(step === 'w'){
      west++
    }
  }
  return north === south && west === east;
}