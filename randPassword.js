// Run on browser

const passwordLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}","|",":","<",">","/","?"]
//ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+-=[]\{}|;:<>/?
var passwordLength = Number(prompt("Enter the length : "))%passwordLetters.length;
var password = "";

for (let i = 0; i < passwordLength; i++) {
    var randomWord = Math.floor(Math.random()*passwordLetters.length);
    password += passwordLetters[randomWord]; 
}
alert(`Your Password is : ${password}`);
console.log(typeof(password));