function getComputerChoice(){
    let randomNumber=Math.random();
    if(randomNumber<1/3){
        return "rock";
    } else if(randomNumber<2/3){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice=prompt("Enter a choice: rock, paper or scissors? ");
    return choice.toLowerCase();
}

function playGame(){
    let humanScore=0;
    let computerScore=0;
    function playRound(humanChoice, computerChoice){
        if(humanChoice===computerChoice){
            return "IT IS A TIE";
        } else if(humanChoice==="rock"&&computerChoice==="paper"){
            computerScore++;
            return "Paper covers rock! You lose!";
        }else if(humanChoice==="paper"&&computerChoice==="scissors"){
            computerScore++;
            return "Scissors cuts paper! You lose!";
        }else if(humanChoice==="scissors"&&computerChoice==="rock"){
            computerScore++;
            return "Rock beats scissors! You lose!";
        }else{
            humanScore++;
            return "YOU WIN!";
        }
    }
for (let i = 0; i < 5; i++) {
    const humanChoice=getHumanChoice();
    const computerChoice=getComputerChoice();
    console.log(playRound(humanChoice,computerChoice));
}
console.log(`Final score — You: ${humanScore}, Computer: ${computerScore}`);
}
playGame();


