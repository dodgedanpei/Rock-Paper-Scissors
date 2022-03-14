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
resultText.setAttribute('style', 'white-space: pre;');


const winningScore = 5;

let pScore = 0;
let cScore = 0;
let dScore = 0;
let isGameOver = false;


computerChoice = () => {
    const choice = possible[Math.floor(Math.random()*3)];
    return choice;
}

playerWin = (player,comp) => {
    if(!isGameOver){
        pScore += 1;
        pScoreDisplay.textContent = pScore;
        results.textContent = `You chose ${player}. \r\nComputer chose ${comp}. \r\nYou win a point!`;
        if(pScore == winningScore){
            isGameOver = true;
            pScoreDisplay.classList.add("text-success")
        }
    }
}

compWin = (player,comp) => {
    if(!isGameOver){
        cScore += 1;
        cScoreDisplay.textContent = cScore;
        results.textContent = `You chose ${player}. \r\nComputer chose ${comp}. \r\nComputer wins a point!`;
        if(cScore == winningScore){
            isGameOver = true;
            cScoreDisplay.classList.add("text-danger")
        }
    }
}


drawEvent = (player,comp) =>{
    if(!isGameOver){
        dScore += 1;
        dScoreDisplay.textContent = dScore;
        results.textContent = `You chose ${player}. \r\nComputer also chose ${comp}. \r\nThis round is a tie!`;
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
        drawEvent(player, computer);
    } else if (computer == 'scissors') {
        playerWin(player, computer);
        checkingResults();
    } else {
        compWin(player, computer); 
        checkingResults();
    }
    
}

playerScissors = () => {
    const player = 'scissors';
    const computer = computerChoice();
    if(player == computer) {
        drawEvent(player, computer);
    } else if (computer == 'paper') {
        playerWin(player, computer)
        checkingResults();
    } else {
        compWin(player, computer);
        checkingResults();
    }
    
}

playerPaper = () => {
    const player = 'paper';
    const computer = computerChoice();
    if(player == computer) {
        drawEvent(player, computer);
    } else if (computer == 'rock') {
        playerWin(player, computer);
        checkingResults();
    } else {
        compWin(player, computer);
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