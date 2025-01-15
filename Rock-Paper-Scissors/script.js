let humanScore = 0;
let ComputerScore = 0;



function getComputerChoice(){
    let list = ["rock","paper","scissors"];
    return list[(Math.floor(Math.random() * list.length))];
}


function getHumanChoice(){
    let choice = prompt("Enter Rock Paper or Scissors to play").toLowerCase();   

    if(((choice.localeCompare('rock', undefined, { sensitivity: 'accent' })) === -1) && ((choice.localeCompare('paper', undefined, { sensitivity: 'accent' })) === -1) && ((choice.localeCompare('scissors', undefined, { sensitivity: 'accent' })) === -1)){
        throw new Error("You need to enter Rock Paper or Scissors to play");      
    }
    return choice;

}


function playRound(humanChoice, computerChoice){
    let res = "";
    
    switch(true){
        case(humanChoice == "rock" && computerChoice == "scissors"):
            res = console.log("You won! You chose",humanChoice,"and computer chose", computerChoice);
            humanScore += 1; 
            break;
        case(humanChoice === "scissors" && computerChoice === "paper"):
            res = console.log("You won! You chose",humanChoice,"and computer chose", computerChoice);
            humanScore += 1; 
            break;
        case(humanChoice === "rock" && computerChoice === "paper"):
            res =console.log("You lose! You chose",humanChoice,"and computer chose", computerChoice);
            ComputerScore += 1;
            break;
        case(humanChoice === "paper" && computerChoice === "scissors"):
            res = console.log("You lose! You chose",humanChoice,"and computer chose", computerChoice);
            ComputerScore += 1;
            break;
        default :
            res = console.log("Draw");
        }
    
    return res;

    
}



function playGame(){
    
    for(let i; i < 6; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice() ;
        playRound(humanSelection, computerSelection);
    }
}

playGame();