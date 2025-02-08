let score = JSON.parse(localStorage.getItem('score'))
/* and this is also a shortcut by using OR operator || {
wins: 0,
losses: 0,
tie: 0
};...... For below if statement.........and we use this to simplify our code*/
/* if(!score){
  score = {
     wins: 0,
         losses: 0,
         tie: 0
};
} is same as*/
     
if( score === null) {
  score = {
       wins: 0,
         losses: 0,
         tie: 0			   
  };
} 

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if(playerMove === 'rock') {
    if(computerMove === 'rock') {
      result = 'Tie.';
    } else if(computerMove === 'paper') {
       result = 'You lose.';
    } else if(computerMove === 'scissor') {
       result = 'You win.';
    }
  } else if(playerMove === 'paper') {
      if(computerMove === 'paper') {
       result = 'Tie.';
    } else if(computerMove === 'rock') {
       result = 'You win.';
    } else if(computerMove === 'scissor') {
      result = 'You loose.';
    }
  } else if(playerMove === 'scissor') {
      if(computerMove === 'scissor') {
         result = 'Tie.';
      } else if(computerMove === 'rock') {
         result = 'You loose.';
      } else if(computerMove === 'paper') {
         result = 'You win.';
      }
  }

if(result === 'You win.') {
  score.wins += 1;			
} else if(result === 'You loose.') {
    score.losses += 1;
} else if(result === 'Tie.') {
    score.tie += 1;
}

localStorage.setItem('score',JSON.stringify(score));

   updateScoreElement();

   document.querySelector('.js-result').innerHTML= result;
   
   document.querySelector('.js-moves').innerHTML= `You <img src="Emojies/${playerMove}-emoji.jpg" class="move-icon"> <img src="Emojies/${computerMove}-emoji.jpg" class="move-icon"> computer`;		 

/*alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}
Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`);*/
}

function updateScoreElement() {

 document.querySelector('.js-score').innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`;

}

/* A function can be runned in two ways:
1.By using function name.
2.By using RETURN keyword.
.....In the below code we've already created a function of name
    pickComputerMove and runned it by using RETURN statement
But here the we can also crate a function and run if eith out return statememt
  example: 
           function pickComputerMove() {
           const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3 )  {
           computerMove = 'rock';  
    } else if (randomNumber >=1/3 && randomNumber <2/3) {
           computerMove = 'paper' ;
  } else if(randomNumber >=2/3 && randomNumber < 1) {
            computerMove = 'scissor';
    }
       
    }
function pickComputerMove();
*/


function pickComputerMove() {
   const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3 )  {
           computerMove = 'rock';  
    } else if (randomNumber >=1/3 && randomNumber <2/3) {
           computerMove = 'paper' ;
    } else if(randomNumber >=2/3 && randomNumber < 1) {
            computerMove = 'scissor';
    }
  
 return computerMove;
 
}
