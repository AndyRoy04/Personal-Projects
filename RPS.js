// Run on browser

const gameList = ['R', 'P', 'S'];
var randomNumber1 = Math.floor(Math.random()*3);
var randomChoice = gameList[randomNumber1];
// console.log(randomChoice)
alert("R = Rock,  P = Paper,  S = Scissors");
var userInput = prompt("Make your choice : ").toUpperCase();

if (userInput === randomChoice) {
    alert("It's s tie---")    
}else if (userInput === 'R' && randomChoice === "S" || userInput === 'S' && randomChoice === "P" || userInput === 'P' && randomChoice === "R") {
    alert(`You Win---. Computer choose : ${randomChoice}`)   
}else if (userInput === 'S' && randomChoice === "R" || userInput === 'P' && randomChoice === "S" || userInput === 'R' && randomChoice === "P") {
    alert(`You Lose, Loserrrrr... Computer choose : ${randomChoice}`)
}else{
    alert("Invalid choice!!!")
}