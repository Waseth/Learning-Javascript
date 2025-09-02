function capitalize(s){
  let evenCaps = "";
  let oddCaps = "";
  for(let i = 0; i < s.length; i++){
    if(i % 2 === 0){
      evenCaps = evenCaps + s[i].toUpperCase();
      oddCaps = oddCaps + s[i];
    }else{
      evenCaps = evenCaps + s[i];
      oddCaps = oddCaps + s[i].toUpperCase();
    }
  }
  return [evenCaps,oddCaps];
};