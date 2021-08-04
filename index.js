let scoreValue = document.querySelector(".score");
let score = 10;
scoreValue.textContent = score;
let highScoreValue = document.querySelector(".highScore");
let highScore = 0
highScoreValue.textContent = highScore;
let secretNumber = Math.floor(Math.random() * 5);
let newSecretNumber = () => { return Math.floor(Math.random() * 5) };
console.log("secret number", secretNumber);

document.querySelector('.play').addEventListener('click', function reset() {

   //  guessing history lets start guessing ....
   scoreValue.textContent = 10;
   changeBackground("#94A7B3");
   document.querySelector(".reveal").innerText = "?";
   // removeIt();
   let historyQ = document.getElementById("history-container");
   historyQ.removeChild(historyQ.childNodes[2]);
   document.getElementById("clue").innerText = "lets start guessing ...."

   // document.location.reload()
   // reset guessing history
   console.log('play');
})
const removeIt = () => {
   // let historyQ = document.getElementById("history-container");
   // historyQ.removeChild(historyQ.childNodes[2]);
   // const list = document.createElement("ul")
   // list.id = "history";
   // document.getElementById("history-container").appendChild(list)
}
// guessing the number here function is where we hold the number 




// check function 
// guessing func here 
// change inner-text, set clues to different scores

document.querySelector('.check').addEventListener('click', function checkNumber() {

   let clue = document.getElementById('clue')
   let inputValue = Number(document.querySelector('input').value);

   console.log("input Value", inputValue)


   if (score == 1) {
      document.location.reload()
   } else {

      if (secretNumber === inputValue) {
         score++
         clue.innerText = "your a winner boo";
         document.querySelector(".reveal").innerText = secretNumber;
         secretNumber = newSecretNumber();
         console.log("new secret number", secretNumber)
         scoreValue.textContent = score;
         changeBackground("#ff0095");
         if (score > highScore) {
            highScore = score;
            highScoreValue.textContent = highScore;
         }
         console.log("new secret number = ", secretNumber);

      } else if (secretNumber < inputValue) {
         clue.innerText = "your close but your cup is overflowed"
         score--
         scoreValue.textContent = score;
         changeBackground("red");
      } else {
         score--
         scoreValue.textContent = score;
         clue.innerText = "fill her up";
         changeBackground("green");
      }
   }
   console.log("score", score);

   
   // grab the value the person as put in and match it to the secret number .

   // compare the value to the sercet number
   // console.log(inputValue)
   let newTag = document.createElement("li");
   let child = document.getElementById("history").appendChild(newTag);
   child.innerText = inputValue;

})

const changeBackground = (color) => {
   document.body.style.backgroundColor = color;
}
