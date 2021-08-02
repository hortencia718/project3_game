let scoreValue = document.querySelector(".score");
scoreValue.textContent = 10;
let highScoreValue = document.querySelector(".highScore");
highScoreValue.textContent = 0;
let secretNumber = Math.floor(Math.random() * 5)


document.querySelector('.play').addEventListener('click', function reset() {

   // first change the reset bg color onclick ,

   //  then reset the score 

   document.location.reload()
   // reset guessing history
   console.log('play')
})

// guessing the number here function is where we hold the number 




// check function 
// guessing func here 
// change inner-text, set clues to different scores

document.querySelector('.check').addEventListener('click', function checkNumber() {

   let clue = document.getElementById('clue')
   let inputValue = Number(document.querySelector('input').value);
   console.log(inputValue)

   if (scoreValue.textContent == 1) {
      document.location.reload()
   } else {
      if (secretNumber === inputValue) {
         scoreValue.textContent++
         clue.innerText = "your a winner boo"
         secretNumber = Math.floor(Math.random() * 5)
         console.log(secretNumber)

      } else if (secretNumber < inputValue) {
         clue.innerText = "your close but your cup is overflowed"
         scoreValue.textContent--

      } else {
         scoreValue.textContent--
         clue.innerText = "fill her up"
      }

   }


   // grab the value the person as put in and match it to the secret number .

   // compare the value to the sercet number
   // console.log(inputValue)
   let newTag = document.createElement("li");
   let child = document.getElementById("history").appendChild(newTag);
   child.innerText = inputValue;

})
console.log(secretNumber);


   // on the question mark do display the secert number when when the input number is the same as the secert number , 
   // "if the input is not the same then should go back to its default number "