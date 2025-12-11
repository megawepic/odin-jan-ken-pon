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



function playRound(humanChoice, computerChoice) {
    if((humanChoice == "STONE" && computerChoice == "paper") || (humanChoice == "SCISSORS" && computerChoice == 
        "stone") || (humanChoice == "PAPER" && computerChoice == "scissors")){
        computerScore ++
        console.log(`CPU played ${computerChoice}. You lose. Computer gains a point`)
    } else if ((humanChoice == "STONE" && computerChoice == "scissors") || (humanChoice == "SCISSORS" && computerChoice == "paper") || (humanChoice == "PAPER" && computerChoice == "stone")) {
        humanScore ++
        console.log(`CPU played ${computerChoice}. You win. You gain a point`)
    } else{
        console.log(`CPU played ${computerChoice}. Draw play again`)
    }
}

let humanScore = 0
let computerScore = 0

function playGame() {


    for (let i = 0; i < 5; i++){

        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)

    }

    const results =  `You score ${humanScore} and the cpu score ${computerScore}`
    humanScore = 0
    computerScore = 0
    return results
}