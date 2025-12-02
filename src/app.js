let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const compScoreQry = document.querySelector("#comp-score");
const userScoreQry = document.querySelector("#user-score");

const drawGame = () => {
    msg.innerText = "Draw game !";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {

    if (userWin) {
        msg.innerText = `You WIN.`;
        msg.style.backgroundColor =  "green";
        userScore++;
        userScoreQry.innerText = userScore;
    }else{
        msg.innerText = `You SUCKS.`;
        msg.style.backgroundColor =  "red";
        computerScore++;
        compScoreQry.innerText = computerScore;
    }
};

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();
    let userWin = true;

    // Cases
    if (userChoice === compChoice) {
        // Draw game
        drawGame();
    } else {

        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice !== "paper";
        } else if (userChoice === "paper") {
            userWin = compChoice !== "scissors";
        } else {
            userWin = compChoice !== "rock";
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genComputerChoice = () => {
    let choices = ["rock" , "paper" , "scissors" ];
    let randomNumber =  Math.floor(Math.random() *3);

    return choices[randomNumber];
};