function points(resultArray) {
  let totalPoints = 0;
  for(let i = 0; i < resultArray.length; i++){
    let scores = resultArray[i];
    let splitScores = scores.split(':');
    let x = splitScores[0];
    let y = splitScores[1];

    if(x > y){
      totalPoints = totalPoints + 3;
    }else if(x < y){
      totalPoints = totalPoints + 0;
    }else{
      totalPoints = totalPoints + 1;
    }
  }
  return totalPoints
}