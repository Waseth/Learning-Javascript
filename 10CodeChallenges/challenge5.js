function validatePIN (pin) {
  if(pin.length !== 4 && pin.length !== 6){
      return false;
    }
  for(let i = 0; i < pin.length; i++){
      let checkDigit = pin[i];
   if(checkDigit < '0' || checkDigit > '9'){
     return false
   }
    }
    return true;
}