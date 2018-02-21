function selection(event) {

    var playerChoice = event.target;
    var p1 = parseInt(playerChoice.id);

    let compChoice = Math.ceil(Math.random() * 3);
    var c = compChoice;

    var text;

    // Chacks to see who wins, then sends the correct text to the page
    if (p1 == 3 && c == 1) {
        text = "Rock beats Scissors. You win!";
    } else if (p1 == 1 && c == 3) {
        text = "Rock beats Scissors. Computer wins...";
    } else if (p1 == 2 && c == 3) {
        text = "Paper beats Rock. You win!";
    } else if (p1 == 3 && c == 2) {
        text = "Paper beats Rock. Computer wins...";
    } else if (p1 == 1 && c == 2) {
        text = "Scissors beats Paper. You win!";
    } else if (p1 == 2 && c == 1) {
        text = "Scissors beats Paper. Computer wins...";
    } else if (p1 == c) {
        text = "Draw!";
    }
    
    document.getElementById("winner").innerHTML = text;

    // Adds the correct image to the computer's choice
    if (c == 1){
        let element = document.getElementById("computerWin");
        element.style.backgroundImage = 'url(assets/scissors.png)';
    }else if (c == 2){
        let element = document.getElementById("computerWin");
        element.style.backgroundImage = 'url(assets/paper.png)';
    }else {
        let element = document.getElementById("computerWin");
        element.style.backgroundImage = 'url(assets/rock.png)';
    }
}


// Click event for choices.
var choices = document.querySelectorAll("div");

for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', selection);
}
