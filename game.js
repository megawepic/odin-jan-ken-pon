function getComputerChoice () {
    let rand = Math.random()

    if (rand <= 0.33){
        return "scissors"
    } else if (rand <= 0.66) {
        return "paper"
    } else {
        return "stone"
    }
}

function getHumanChoice(){

    const selection = prompt("Scissors, paper or stone")

    return selection.toUpperCase()
}

let humanScore = 0
let computerScore = 0

const scissors = document.querySelector("#Scissors")
const paper = document.querySelector("#Paper")
const stone = document.querySelector("#Stone")

scissors.addEventListener("click", function(){
    playRound("SCISSORS", getComputerChoice())
})
paper.addEventListener("click", function(){
    playRound("PAPER", getComputerChoice())
})
stone.addEventListener("click", function(){
    playRound("STONE", getComputerChoice())
})


function playRound(humanChoice, computerChoice) {
    const score = document.getElementById("score")

    score.textContent += humanChoice
    score.textContent += " " + computerChoice
    
    
    if((humanChoice == "STONE" && computerChoice == "paper") || (humanChoice == "SCISSORS" && computerChoice == 
        "stone") || (humanChoice == "PAPER" && computerChoice == "scissors")){
        computerScore ++
        score.textContent = `CPU played ${computerChoice}. You lose. Computer gains a point. Current score is ${humanScore} - ${computerScore}`
    } else if ((humanChoice == "STONE" && computerChoice == "scissors") || (humanChoice == "SCISSORS" && computerChoice == "paper") || (humanChoice == "PAPER" && computerChoice == "stone")) {
        humanScore ++
        score.textContent = `CPU played ${computerChoice}. You win. You gain a point. Current score is ${humanScore} - ${computerScore}`
    } else{
        score.textContent = `CPU played ${computerChoice}. Draw play again. Current score is ${humanScore} - ${computerScore}`
    }
    
    if(humanScore == 5){
        score.textContent = "You have won. LFFGGGG. Continue to play another game"
        computerScore = 0
        humanScore = 0
    } else if (computerScore == 5){
        score.textContent = "CPU won this round. Get your revenge. Continue to play another game"
        computerScore = 0
        humanScore = 0
    }
}