// Run on browser

var userNumber = prompt("Enter a number : ");
var numList = userNumber.split('');
var listLength = numList.length;
var numberList = [];
var result = 0;

for (let i = 0; i < listLength; i++) {
    numberList.push(Number(numList[i]));
}
// console.log(numberList);
for (let i = 0; i < listLength; i++) {
    result += Math.pow(numberList[i], listLength);
}
// console.log(`Number entered : ${userNumber}, Arms Value : ${result}`)
if(result == userNumber){
    alert(`Number is an Armstrong Number : ${userNumber} = ${result}`);
}else{
    alert(`Number is not an Armstrong Number : ${userNumber} ≠ ${result}`);
}