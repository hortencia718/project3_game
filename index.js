
document.querySelector('.play').addEventListener('click',function reset(){

// first change the reset bg color onclick ,

//  then reset the score 

// reset guessing history
console.log('play')
})
    
// guessing the number here function is where we hold the number 

const secretNumber = Math.floor(Math.random()* 5)
console.log(secretNumber);

// counter
let score = 0;
let highScore = 0;

document.querySelector(".score").textContent = score;
document.querySelector(".highScore").textContent = highScore;


// check function 
// lets start guessing func here 

document.querySelector('.check').addEventListener('click',function checkNumber(){
   
 let clue = document.getElementById('clue') 
 let inputValue = document.querySelector('input').value  
 
 if(secretNumber == inputValue){
    document.querySelector(".score").textContent = score++;
    
    clue.innerText = "your a winner boo"

 } else if(secretNumber < inputValue ){

     clue.innerText = "your close but your cup is overflowed"
  
 } else {
   
    clue.innerText ="fill her up"
 }

 
// grab the value the person as put in and match it to the secret number .
    
// compare the value to the sercet number
    // console.log(inputValue)
    })
