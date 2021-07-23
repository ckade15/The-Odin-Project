let num = generateNumber();
let count = 0;
// Generate a random number between 1 and 10
function generateNumber() {
    return Math.floor(Math.random() * 10 + 1);
}
// Creates event listener when all of the DOM content is loaded
document.addEventListener('DOMContentLoaded', addEvt, false);
function addEvt(){
    const button = document.getElementById('btn').addEventListener('click', function() {guessNumber(num);});
}

document.addEventListener('DOMContentLoaded', add, false);
function add() {
    window.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            guessNumber(num);
        }
    })
}

 // Button that guesses the number
 function guessNumber(num) {
     count++;
     let input = document.getElementById('input').value;
     let int = parseInt(input);
     let p = document.getElementById('message');
     let over = false;
     
     if (num === int) {
         p.innerText = 'You correctly guessed the number in ' + count + ' tries!';
     }
     else if (int < 1 || int > 10) {
         p.innerText = 'Please enter a number within 1 and 10.';
     }
     else {
         p.innerText = 'Sorry! Try again. You have used ' + count + ' guesses.';
     }
     
 }