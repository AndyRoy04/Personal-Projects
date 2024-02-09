// Run on browser

var number = Number(prompt("Enter max range : "));
var randomNumber = Math.floor(Math.random()*number);
// console.log(randomNumber);
let guess = false;

while(!guess){
    var userGuess = Number(prompt("Enter your guess : "));
    if(userGuess === randomNumber){
        alert("Your Guess matches...");
        guess = true;
    }else if(userGuess < randomNumber){
        alert("Your Guess is Lower!!");
    }else{
        alert("Your Guess is Higher!!")
    }
}
