let scoreH2 = document.getElementById('score');
let timeLeftH2 = document.getElementById('timeLeft');
let startNewGameButton = document.getElementById('startNewGame');
let pauseGameButton = document.getElementById('pauseGame');
let squares = document.querySelectorAll('.square');

let score = 0;
let timeLeft = 0;
let hitPosition = null;
let timerId = null;
let randomMoleId = null;

// Randomly Place Mole
function randomeMole() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * squares.length)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

function countDown() {
    --timeLeft;
    timeLeftH2.innerHTML = `Time Left : ${timeLeft}`;

    if (timeLeft === 0) {
        // clearInterval(timerId);
        // clearInterval(randomMoleId);
    }
}

randomeMole();

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            ++score;
            scoreH2.innerHTML = `Your Score ${score}`;
            hitPosition = null;
        }
    })
})


function startGame() {
    score = 0;
    timeLeft = 60;

    //call back  function
    //setInterval call function at regular interval
    timerId = setInterval(randomeMole, 1000);
    randomMoleId = setInterval(countDown, 1000);
}


startNewGameButton.addEventListener('click', startGame);
startGame();

pauseGameButton.add('click', pauseResumeGame);