const destination = document.getElementById("scores");
const scoreDiv1 = document.createElement("div");
const scoreDiv2 = document.createElement("div");

var p1Score = 0;
var cScore = 0;
//Selection function
function selection(event) {

    let playerChoice = event.target;
    let p1 = parseInt(playerChoice.id);

    let compChoice = Math.ceil(Math.random() * 3);
    let c = compChoice;

    let text;

    // Chacks to see who wins, then sends the correct text to the page
    if (p1 == 3 && c == 1) {
        text = "Rock beats Scissors. You win!";
        p1Score++;
    } else if (p1 == 1 && c == 3) {
        text = "Rock beats Scissors. Computer wins...";
        cScore++;
    } else if (p1 == 2 && c == 3) {
        text = "Paper beats Rock. You win!";
        p1Score++;
    } else if (p1 == 3 && c == 2) {
        text = "Paper beats Rock. Computer wins...";
        cScore++;
    } else if (p1 == 1 && c == 2) {
        text = "Scissors beats Paper. You win!";
        p1Score++;
    } else if (p1 == 2 && c == 1) {
        text = "Scissors beats Paper. Computer wins...";
        cScore++;
    } else if (p1 == c) {
        text = "Draw!";
    }

    document.getElementById("winner").innerHTML = text;

    // Adds the correct image to the computer's choice
    let element = document.getElementById("computerWin");
    if (c == 1) {
        element.style.backgroundImage = 'url(assets/scissors.png)';
    } else if (c == 2) {
        element.style.backgroundImage = 'url(assets/paper.png)';
    } else {
        element.style.backgroundImage = 'url(assets/rock.png)';
    }

    scoreDiv1.textContent = "Your Score: " + p1Score;
    destination.appendChild(scoreDiv1);

    scoreDiv2.textContent = "Computer Score: " + cScore;
    destination.appendChild(scoreDiv2);
}

// Click event for choices.
var choices = document.querySelectorAll("div");

for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', selection);
}