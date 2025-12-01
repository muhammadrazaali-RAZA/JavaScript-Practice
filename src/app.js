let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const id = choice.getAttribute("id");
        console.log(`Choice id is ${id}.`);
    });
});