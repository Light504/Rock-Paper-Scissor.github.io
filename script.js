let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let status1 = document.getElementById("status")

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1; // Random integer between 1 and 3
}

function chooseRock(){
    let computer = getComputerChoice();
    if(computer === 2){
        status1.textContent="Computer chooses Paper, You Lose!"
    }
    else if(computer === 3){
        status1.textContent="Computer chooses Scissor, You Win!"
    } 
    else{
        status1.textContent="Computer chooses Rock, It's a Tie!"
    }
}

function choosePaper(){
    let computer = getComputerChoice();
    if(computer === 2){
        status1.textContent="Computer chooses Paper, It's a Tie!"
    }
    else if(computer === 3){
        status1.textContent="Computer chooses Scissor, You Lose!"
    } 
    else{
        status1.textContent="Computer chooses Rock, You Win!"
    }
}

function chooseScissor(){
    let computer = getComputerChoice();
    if(computer === 2){
        status1.textContent="Computer chooses Paper, You Win!"
    }
    else if(computer === 3){
        status1.textContent="Computer chooses Scissor, It's a Tie!"
    } 
    else{
        status1.textContent="Computer chooses Rock, You Lose!"
    }
}

function retry(){
    status1.textContent="Ready...?"
}
//rock = 1, paper = 2, scissor = 3
console.log(computer);
