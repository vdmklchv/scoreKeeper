const scores = [0, 0];
const buttonDiv = document.querySelector('.buttons');
const maxScoreSelect = document.querySelector("#max-score");
const heading = document.querySelector('h1');
const headingHTML = '<span id="score0" class="score">0</span> to <span id="score1" class="score">0</span>'
let maxScore = 3;

maxScoreSelect.addEventListener('change', () => {
    maxScore = Number(maxScoreSelect.value);
    initializeGame();
})

buttonDiv.addEventListener('click', (event) => {
    if (event.target === buttonDiv.children.p1btn) {
        incrementScore(0);
        updateUI();
    } else if (event.target === buttonDiv.children.p2btn) {
        incrementScore(2);
        updateUI();
    } else if (event.target === buttonDiv.children.reset) {
        initializeGame();
    }
    if (scores[0] === maxScore) {
        endGame(0);
    } else if (scores[1] === maxScore) {
        endGame(1);
    }
})

function initializeGame() {
    scores[0] = 0;
    scores[1] = 0;
    heading.innerHTML = headingHTML;
    heading.classList.remove('text-success');
    heading.classList.remove('text-primary');
    updateUI();
}

function incrementScore(player) {
    player === 0 ? scores[0] += 1 : scores[1] += 1;
}

function updateUI() {
    document.querySelector('#score0').innerText = scores[0];
    document.querySelector('#score1').innerText = scores[1];
}

function endGame(player) {
    heading.innerText = `Game over! Player ${player + 1} won!`
    if (player === 0) {
        heading.classList.add('text-success');
    } else {
        heading.classList.add('text-primary');
    }
}