const game = ()=>{
  let pScore =0;
  let cScore =0;
  const startGame = () =>{
      const playBtn = document.querySelector('.intro button');
      const introScreen = document.querySelector('.intro');
      const match = document.querySelector('.match');
      playBtn.addEventListener('click',() => {
           // removing the intro Screen 
           introScreen.classList.add('fadeOut');
            // adding the match screen
           match.classList.add('fadeIn');

      })
  }
  const playMatch = ()=>{
    // fetching the option buttons for player choice
      const options = document.querySelectorAll('.options button');
      // this is player hand 
      const playerHand = document.querySelector('.player-hand');
      // this is computer hand
      const computerHand= document.querySelector('.computer-hand')
      //computer options
      const computerOptions = ['rock','paper','scissors']
        const hands = document.querySelectorAll('.hands img');
       
        // As everytime player runs the animation gets updated , animation runs in background to stop 
        //that we need to run this 
       hands.forEach(hand=>{
        hand.addEventListener('animationend',function(){
           this.style.animation='';
        })
      })
      
    // if user presses any of buttons(rock, paper and scissors)
      options.forEach(option=>{
        option.addEventListener('click',function(){
            console.log(this);
           
            const computerNumber=Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber]
            //here is we call compare Hands'
            compareHands(this.textContent,computerChoice)
            //Update Images after 1s not immediately when the animation ends
            setTimeout(()=>{
              playerHand.src=`./assets/${this.textContent}.png`
              computerHand.src=`./assets/${computerChoice}.png`
            },1000)
            // setting the animation 
            playerHand.style.animation = 'shakePlayer 1s ease';
            computerHand.style.animation='shakeComputer 1s ease'

           

            // calling updateScore
            updateScore();
        })
      })
    }
    const updateScore=()=>{
      const playerScore = document.querySelector('.player-score p');
      const computerScore = document.querySelector('.computer-score p');
      playerScore.textContent=pScore;
      computerScore.textContent=cScore;
    }
    const compareHands = (playerChoice,computerChoice)=>{
      //update text
      const winner = document.querySelector('.winner');
      // if player and computer choices are same 
      if(playerChoice===computerChoice){
        winner.textContent = "It is a tie";
        return;
      }
      // if player is rock and computer is paper/scissors
       else if(playerChoice ==='rock'){
         if(computerChoice==='scissors'){
           winner.textContent = 'You wins'
           pScore++;
           return;
         }else if(computerChoice==='paper'){
           winner.textContent = 'Computer Wins'
           cScore++;
           return;
         }
       }
       //if player is paper and computer is scissors/rock
       else if(playerChoice ==='paper'){
        if(computerChoice==='scissors'){
          winner.textContent = 'Computer Wins'
          cScore++;
          return;
        }else if(computerChoice==='rock'){
          winner.textContent = 'You Wins'
          pScore++;
          return;
        }
      }
      // if player is scissors and computer is paper/rock
      else if (playerChoice==='scissors'){
        if(computerChoice==='paper'){
           winner.textContent = 'You wins'
           pScore++;
           return;
        }else if(computerChoice === 'rock'){
          cScore++;
          winner.textContent = 'Computer wins'
          return;
        }
      }
    }
  // call all inner functions 
  startGame();
  playMatch();
}
// start the game function
game();