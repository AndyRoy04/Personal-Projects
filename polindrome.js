// Run on browser

var word = prompt("Enter a text to check : ");
var list = word.split("");
var newWord = "";
// console.log(list);
for (let i = (list.length-1); i >= 0; i--) {
    newWord+=list[i];
}
if(word === newWord){
    alert(`${word} is a Polindrome. Output is : ${newWord}`);
}else{
    alert(`${word} is not a Polindrome. Output is : ${newWord}`)
}