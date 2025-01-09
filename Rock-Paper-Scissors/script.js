let humanScore = 0;
let ComputerScore = 0;



function getComputerChoice(){
    let list = ["Rock","Paper","Scissors"];
    let rand = Math.floor(Math.random() * list.length);
    return list[rand];
}


function getHumanChoice(){
    let choice = prompt("Enter Rock Paper or Scissors to play");
    //console.log(choice,choice.includes("Scissors"));
    //console.log((choice.localeCompare('rock', undefined, { sensitivity: 'accent' })))

    if(((choice.localeCompare('rock', undefined, { sensitivity: 'accent' })) === -1) && ((choice.localeCompare('paper', undefined, { sensitivity: 'accent' })) === -1) && ((choice.localeCompare('scissors', undefined, { sensitivity: 'accent' })) === -1)){
        //alert("You need to enter Rock Paper or Scissors to play");
        throw new Error("You need to enter Rock Paper or Scissors to play");  
        //choice = prompt("Enter Rock Paper or Scissors to play");      
    }
    return choice;

}




function playRound(computerChoice, humanChoice){
    let res ;
    
    switch(true){
        case(humanChoice === 'rock' && computerChoice === 'scissors'):
            res = console.log("You won! You chose",humanChoice,"and computer chose", computerChoice);
            break;
        case(humanChoice === 'scissors' && computerChoice === 'paper'):
            res = console.log("You won! You chose",humanChoice,"and computer chose", computerChoice);
            break;
        case(humanChoice === 'rock' && computerChoice === 'paper'):
            res =console.log("You won! You chose",humanChoice,"and computer chose", computerChoice);
            break;
        case(humanChoice === 'paper' && computerChoice === 'scissors'):
            res = console.log("You won! You chose",humanChoice,"and computer chose", computerChoice);
            break;
        default :
            res = console.log("Draw, you both choose ", humanChoice);
        }
    
    return res;
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice() ;

humanChoice.toLowerCase();
computerChoice.toLowerCase();

console.log(humanChoice);

playRound();
//console.log(getHumanChoice());
//console.log(getComputerChoice());


