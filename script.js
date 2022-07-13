'use strict';
const secretNumber = Math.trunc(Math.random()*20+1) ;
let score=20;
let highScore=0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    console.log(document.querySelector('.message').value);
    document.querySelector('.message').textContent = 'No Number 🤷‍♂️';
  }
  else if(guess==secretNumber){
    
document.querySelector('.number').textContent=secretNumber;
highScore=score;

    document.querySelector('body').style.backgroundColor= '#60b347';
    document.querySelector('.number').style.width= '30rem';
    document.querySelector('.message').textContent = 'Correct Number 👌🎉';
    // highScore++;
    document.querySelector('.highscore').textContent=highScore;
    
  }
  else if(guess>secretNumber){
    if(score>1){
        document.querySelector('.message').textContent = ' Number is Too High 😜';
        score--;
        document.querySelector('.score').textContent= score;
    }else{
        document.querySelector('.message').textContent = ' You Lost The Game 🤦‍♂️';
        document.querySelector('.score').textContent= 0;
    }
    
  }
  else if(guess<secretNumber){
    if(score>1){
        document.querySelector('.message').textContent = ' Number is Too Low 😉';   
        score--;
        document.querySelector('.score').textContent= score;
    }
    else{
        document.querySelector('.message').textContent = ' You Lost The Game 🤦‍♂️';
        document.querySelector('.score').textContent= 0;

    }
  }
});
// let againbtn = function (){
//     document.querySelector('body').style.backgroundColor= '#58043f';
//     document.querySelector('.message').textContent = ' finish start guessing....!';  
//     document.querySelector('.number').style.width= '15rem';
//     document.querySelector('.score').textContent= 20;
  
// }
document.querySelector('.again').addEventListener('click',function (){
    document.querySelector('body').style.backgroundColor= '#58043f';
    document.querySelector('.message').textContent = ' finish start guessing....!';  
    document.querySelector('.number').style.width= '15rem';
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent= 20;
  
});
