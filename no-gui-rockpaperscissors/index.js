// Variables 
let p1 = 0;
let computer = 0;
let tie = 0;

function computerPlay() {
    let choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log('This round was a tie');
        return tie++;
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper' || playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
        if (computerSelection == 'paper'){
            console.log('Paper beats rock. The computer wins.');
            return computer++;
        }else{
            console.log('Paper beats rock. You win.');
            return p1++;
        }
        
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock' || playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
        if (computerSelection == 'rock'){
            console.log('Rock beats scissors. The computer wins.');
            return computer++;
        }else{
            console.log('Rock beats scissors. You win.');
            return p1++;
        }
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper' || playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
        if (computerSelection == 'scissors') {
            console.log('Scissors beats paper. The computer wins.');
            return computer++;
        }else{
            console.log('Scissors beats paper. You win.');
            return p1++;
        }
    }
}

function findWinner(p1, computer, tie) {
    let lost = 5 - p1;
    if (p1 > computer) {
        console.log('-- You won --   Games won: ' + p1 + '     Games tied: ' + tie + '     Games lost: ' + lost);
    }else{
        console.log('-- You lost --  Games won: ' + p1 + '     Games tied: ' + tie + '     Games lost: ' + lost);
    }
}

for (let i = 0; i < 5; i++){
    const computerSelection = computerPlay();
    const playerSelection = prompt('Choose rock, paper, or scissors');
    playRound(playerSelection, computerSelection);
}
findWinner(p1,computer, tie);

