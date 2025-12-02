let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');

const drawGame = () => {
    console.log("Drawing game...");
}

const showWinner = (userWin) => {
    const winner = userWin? `You Win.` : `You Sucks`;
    console.log(winner);
}

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
            userWin =  compChoice !== "paper";
        }else if (userChoice === "paper") {
            userWin = compChoice !== "scissors";
        }else{
            userWin = compChoice !== "rock";
        }
        console.log("User: " + userChoice);
        console.log("comp: " + compChoice);
        console.log(userWin);
    }
    showWinner(userWin);
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
}