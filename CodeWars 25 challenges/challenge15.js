// Rock vs Rock → Draw
// Paper vs Paper → Draw
// Scissors vs Scissors → Draw
// Rock vs Paper → Paper wins
// Paper vs Rock → Paper wins
// Rock vs Scissors → Rock wins
// Scissors vs Rock → Rock wins
// Paper vs Scissors → Scissors wins
// Scissors vs Paper → Scissors wins

const rps = (p1, p2) => {
  if(p1 === p2){
    return 'Draw!'
  }else if(p1 === 'rock' && p2 === 'paper'){
    return 'Player 2 won!'
  }else if(p1 === 'paper' && p2 === 'rock'){
    return 'Player 1 won!'
  }else if(p1 === 'rock' && p2 === 'scissors'){
    return 'Player 1 won!'
  }else if(p1 === 'scissors' && p2 === 'rock'){
    return 'Player 2 won!'
  }else if(p1 === 'paper' && p2 === 'scissors'){
    return 'Player 2 won!'
  }else{
    return 'Player 1 won!'
  }
};