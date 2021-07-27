// Stat variables 
let won = 0;
let loss = 0;
let tie = 0;


function computerPlay() {
    let choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Adds an event listener to each button
for (let i = 0; i < 3; i++){
    const rps = document.getElementsByTagName('img')[i];
    rps.addEventListener('click', function() {
        if ($('img').hasClass('style')){
            $(this).removeClass('style');
        }else{
        $(this).addClass('style'); 
        }
    });
}
const btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function() {
    const inp = findChoice();
    const comp = computerPlay();

    const msg = document.getElementById('message');
    if (inp.length > 10){
        msg.innerText = 'Please choose an option.';
    }else if (inp === comp){
        msg.innerText = 'This round was a tie!';
        tie++;
        document.getElementById('tie').innerText = tie;
    }else if (inp === 'rock' && comp === 'paper' || inp === 'paper' && comp === 'rock') {
        if (comp === 'paper'){
            msg.innerText = 'Paper beats rock. You lose.';
            loss++;
            document.getElementById('loss').innerText = loss;
        }else {
            msg.innerText = 'Paper beats rock. You win.';
            won++;
            document.getElementById('won').innerText = won;
        }
    }else if (inp === 'scissors' && comp === 'paper' || inp === 'paper' && comp === 'scissors') {
        if (comp === 'scissors'){
            msg.innerText = 'Scissors beats paper. You lose.';
            loss++;
            document.getElementById('loss').innerText = loss;
        }else{
            msg.innerText = 'Scissors beats paper. You win.';
            won++;
            document.getElementById('won').innerText = won;
        }
    }else if (inp === 'scissors' && comp === 'rock' || inp === 'rock' && comp === 'scissors') {
        if (comp === 'rock'){
            msg.innerText = 'Rock beats scissors. You lose.';
            loss++;
            document.getElementById('loss').innerText = loss;
        }else{
            msg.innerText = 'Rock beats scissors. You win.';
            won++;
            document.getElementById('won').innerText = won;
        }
    }
    $('img')[0].classList.remove('style');
    $('img')[1].classList.remove('style');
    $('img')[2].classList.remove('style');
        
    


});

function findChoice() {
    const rock = $('img')[0].classList.contains('style');
    const paper = $('img')[1].classList.contains('style');
    const scissors = $('img')[2].classList.contains('style');
    if (rock){
        return 'rock';
    }
    else if (paper){
        return 'paper';
    }else if (scissors){
        return 'scissors';
    }
    else{
        return 'You did not select an option.';
    }
}

