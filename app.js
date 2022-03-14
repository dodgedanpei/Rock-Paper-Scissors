const possible = ['rock', 'paper', 'scissors'];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultsinfo = document.getElementById("results");


const pScoreDisplay = document.getElementById("playerDisplay")
const cScoreDisplay = document.getElementById("computerDisplay")
const dScoreDisplay = document.getElementById("drawsDisplay")
const startOver = document.getElementById("reset");
const resultText = document.getElementById("results")



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

checkingResults = () => {
    if(isGameOver == true) {
        results.textContent = 'Game is over!';
    }
}

playerRock = () => {
    const player = 'rock';
    const computer = computerChoice();
    if(player == computer) {
        drawEvent();
        results.textContent = 'Player: Rock. Computer: Rock. Result: Draw';
    } else if (computer == 'scissors') {
        playerWin();
        results.textContent = 'Player: Rock. Computer: Scissors. Result: Win';
        checkingResults();
    } else {
        compWin(); 
        results.textContent = 'Player: Rock. Computer: Paper. Result: Lose';
        checkingResults();
    }
    
}

playerScissors = () => {
    const player = 'scissors';
    const computer = computerChoice();
    if(player == computer) {
        drawEvent();
        results.textContent = 'Player: Scissors. Computer: Scissors. Result: Draw';
    } else if (computer == 'paper') {
        playerWin()
        results.textContent = 'Player: Scissors. Computer: Paper. Result: Win';
        checkingResults();
    } else {
        compWin();
        results.textContent = 'Player: Scissors. Computer: Rock. Result: Lose';
        checkingResults();
    }
    
}

playerPaper = () => {
    const player = 'paper';
    const computer = computerChoice();
    if(player == computer) {
        drawEvent();
        results.textContent = 'Player: Paper. Computer: Paper. Result: Draw';
    } else if (computer == 'rock') {
        playerWin();
        results.textContent = 'Player: Paper. Computer: Rock. Result: Win';
        checkingResults();
    } else {
        compWin();
        results.textContent = 'Player: Paper. Computer: Scissors. Result: Lose';
        checkingResults();
    }
    
}


rock.addEventListener('click', () => {
    if(!isGameOver){
        playerRock();
    }})

paper.addEventListener('click', () => {
    if(!isGameOver){
        playerPaper();
    }})

scissors.addEventListener('click', () => {
    if(!isGameOver){playerScissors();
    }})

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
    resultsinfo.textContent = "Awaiting results..."
})