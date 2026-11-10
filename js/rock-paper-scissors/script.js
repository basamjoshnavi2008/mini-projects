let totalRounds = 0;
let currentRound = 0;
let playerScore = 0;
let compScore = 0;
const choices = { 1: "ROCK", 2: "PAPER", 3: "SCISSORS" };

// Screen switching elements
const levelScreen = document.getElementById('level-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');

// Game UI update elements
const playerScoreEl = document.getElementById('player-score');
const compScoreEl = document.getElementById('comp-score');
const roundTitleEl = document.getElementById('round-title');
const gameLogsEl = document.getElementById('game-logs');
const finalStatusEl = document.getElementById('final-status');
const finalScoreEl = document.getElementById('final-score');

// Set up event listeners for Level Buttons
document.getElementById('btn-easy').addEventListener('click', () => startGame(3));
document.getElementById('btn-medium').addEventListener('click', () => startGame(5));
document.getElementById('btn-diff').addEventListener('click', () => startGame(9));

// Set up event listeners for Game Choices
document.getElementById('btn-rock').addEventListener('click', () => playRound(1));
document.getElementById('btn-paper').addEventListener('click', () => playRound(2));
document.getElementById('btn-scissors').addEventListener('click', () => playRound(3));

// Restart Button
document.getElementById('btn-restart').addEventListener('click', resetGame);

function startGame(rounds) {
    totalRounds = rounds;
    currentRound = 0;
    playerScore = 0;
    compScore = 0;
    
    playerScoreEl.innerText = '0';
    compScoreEl.innerText = '0';
    roundTitleEl.innerText = `Round 1 of ${totalRounds}`;
    gameLogsEl.innerText = "Shoot when ready!";

    levelScreen.classList.remove('active');
    gameScreen.classList.add('active');
}

function playRound(playerChoice) {
    currentRound++;
    let compChoice = Math.floor(Math.random() * 3) + 1;
    let logText = `Round ${currentRound}: You chose ${choices[playerChoice]}, Compiler chose ${choices[compChoice]}. `;

    if (playerChoice === compChoice) {
        logText += "It's a tie!";
    } else if ((playerChoice === 2 && compChoice === 1) || 
               (playerChoice === 1 && compChoice === 3) || 
               (playerChoice === 3 && compChoice === 2)) {
        playerScore++;
        logText += "You win this round!";
    } else {
        compScore++;
        logText += "Compiler wins this round!";
    }

    playerScoreEl.innerText = playerScore;
    compScoreEl.innerText = compScore;
    gameLogsEl.innerText = logText;

    if (currentRound >= totalRounds) {
        setTimeout(endGame, 1000);
    } else {
        roundTitleEl.innerText = `Round ${currentRound + 1} of ${totalRounds}`;
    }
}

function endGame() {
    if (playerScore > totalRounds / 2) {
        finalStatusEl.innerText = "🏆 You have won the game!";
    } else {
        finalStatusEl.innerText = "❌ OOPS.. You lost the game";
    }

    finalScoreEl.innerText = `YOU: ${playerScore} | COMPILER: ${compScore}`;
    gameScreen.classList.remove('active');
    resultScreen.classList.add('active');
}

function resetGame() {
    resultScreen.classList.remove('active');
    levelScreen.classList.add('active');
}
