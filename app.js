const possible = ['rock', 'paper', 'scissors'];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const pScoreDisplay = document.getElementById("playerDisplay")
const cScoreDisplay = document.getElementById("computerDisplay")
const dScoreDisplay = document.getElementById("drawsDisplay")

const startOver = document.getElementById("reset");

const winningScore = 5;

let pScore = 0;
let cScore = 0;
let dScore = 0;
let isGameOver = false;


computerChoice = () => {
    const choice = possible[Math.floor(Math.random()*3)];
    return choice;
}

playerWin = () => {
    if(!isGameOver){
        pScore += 1;
        pScoreDisplay.textContent = pScore;
        if(pScore == winningScore){
            isGameOver = true;
            pScoreDisplay.classList.add("text-success")
        }
    }
}

compWin = () => {
    if(!isGameOver){
        cScore += 1;
        cScoreDisplay.textContent = cScore;
        if(cScore == winningScore){
            isGameOver = true;
            cScoreDisplay.classList.add("text-danger")
        }
    }
}


drawEvent = () =>{
    if(!isGameOver){
        dScore += 1;
        dScoreDisplay.textContent = dScore;
}}


playerRock = () => {
    const player = 'rock';
    if(player == computerChoice()) {
        drawEvent();
    } else if (computerChoice() == 'scissors') {
        playerWin();
    } else {
        compWin();
    }
    
}

playerScissors = () => {
    const player = 'scissors';
    if(player == computerChoice()) {
        drawEvent();
    } else if (computerChoice() == 'paper') {
        playerWin()
    } else {
        compWin();
    }
    
}

playerPaper = () => {
    const player = 'paper';
    if(player == computerChoice()) {
        drawEvent();
    } else if (computerChoice() == 'rock') {
        playerWin()
    } else {
        compWin();
    }
    
}


rock.addEventListener('click', () => {
    playerRock();
})

paper.addEventListener('click', () => {
    playerPaper();
})

scissors.addEventListener('click', () => {
    playerScissors();
})

startOver.addEventListener('click', () => {
    pScore = 0;
    pScoreDisplay.textContent = pScore;
    cScore = 0;
    cScoreDisplay.textContent = cScore;
    dScore = 0;
    dScoreDisplay.textContent = dScore;
    isGameOver = false;
    cScoreDisplay.classList.remove("text-danger")
    pScoreDisplay.classList.remove("text-success")
})