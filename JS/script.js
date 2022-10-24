let scoreH2 = document.getElementById('score');
let timeLeftH2 = document.getElementById('timeLeft');
let startNewGameButton = document.getElementById('startNewGame');
let pauseGameButton = document.getElementById('pauseGame');

let squares = document.querySelectorAll('.square');

// Randomly Place Mole
function randomeMole() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let hitPosition = Math.floor(Math.random() * squares.length);
    squares[hitPosition].classList.add('mole');
}

randomeMole();

function startGame() {
    score = 0;
    timeLeftH2 = 60;

    //call back  function
    //setInterval call function at regular interval
    setInterval(randomeMole, 1000);
}


startNewGameButton.addEventListener('click', startGame);
startGame();