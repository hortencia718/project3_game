let scoreValue = document.querySelector(".score");
scoreValue.textContent = 0;
let highScoreValue = document.querySelector(".highScore");
highScoreValue.textContent = 0;
const secretNumber = Math.floor(Math.random() * 5)
console.log(secretNumber);

document.querySelector('.play').addEventListener('click', function reset() {

   // first change the reset bg color onclick ,

   //  then reset the score 

   document.location.reload()
   // reset guessing history
   console.log('play')
})

// guessing the number here function is where we hold the number 




// check function 
// lets start guessing func here 

document.querySelector('.check').addEventListener('click', function checkNumber() {

   let clue = document.getElementById('clue')
   let inputValue = Number(document.querySelector('input').value);
   console.log(inputValue)

   if (secretNumber === inputValue) {
      scoreValue.textContent++
      clue.innerText = "your a winner boo"

   } else if (secretNumber < inputValue) {
      clue.innerText = "your close but your cup is overflowed"
      scoreValue.textContent--

   } else {
      scoreValue.textContent--
      clue.innerText = "fill her up"
   }


   // grab the value the person as put in and match it to the secret number .

   // compare the value to the sercet number
   // console.log(inputValue)
   let newTag = document.createElement("li");
   let child = document.getElementById("history").appendChild(newTag);
   child.innerText = inputValue;

})


   //  history
