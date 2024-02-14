
function oneX(numb1) {
    answer = 1 / numb1;
    return Number(answer.toFixed(2));
}
function xSquared(numb1) {
    answer = numb1 * numb1;
    return answer;
}
function squareRoot(numb1) {
    answer = Math.sqrt(numb1);
    return Number(answer.toFixed(2));
}
function division(numb1, numb2) {
    answer = numb1 / numb2;
    return Number(answer.toFixed(2));
}
function multiplication(numb1, numb2) {
    answer = numb1 * numb2;
    return answer;
}
function subtraction(numb1, numb2) {
    answer = numb1 - numb2;
    return answer;
}
function addition(numb1, numb2) {
    answer = numb1 + numb2;
    return answer;
}
function modulo(numb1, numb2) {
    answer = numb1 % numb2;
    return answer;
}
function clear() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    output.innerHTML = '';
}

// document.addEventListener('DOMContentLoaded', function () {

//     let number1 = '';
//     let numeber2 = '';
//     let operand = '';
//     let resultDisplay = false;

//     function Display(value) {
//         $(".b1 h1").text(value);
//     }

//     function append(characters) {
//         number1 += characters;
//         Display(number1);
//     }

//     function clear() {
//         number1 = '';
//         number2 = '';
//         operand = '';
//         resultDisplay = false;
//         Display('|');
//     }

//     function calculate() {
//         let result;
//         if (operand !== '' && number1 !== '') {
//             if (operand === 'x²') {
//                 result = xSquared((number1));
//             } else if (operand === '✓x') {
//                 result = squareRoot(Number(number1));
//             } else if (operand === '1/x') {
//                 result = oneX(Number(number1));
//             }
//         } else if (operand !== '' && number2 !== '') {
//             if (operand === '+') {
//                 result = addition(Number(number1), Number(number2));
//             } else if (operand === '-') {
//                 result = subtraction(Number(number1), Number(number2));
//             } else if (operand === '/') {
//                 result = division(Number(number1), Number(number2));
//             } else if (operand === '*') {
//                 result = multiplication(Number(number1), Number(number2));
//             } else if (operand === '%') {
//                 result = modulo(Number(number1), Number(number2));
//             }
//         }
//         Display(result);
//         number1 = result;
//         resultDisplay = true;
//     }

//     document.querySelectorAll('.number').forEach(function (button){
//         button.addEventListener('click', function(){
//             append(button.textContent);
//         });
//     })

//     document.querySelectorAll('.operator').forEach(function (button){
//         button.addEventListener('click', function(){
//             operand = button.textContent;
//             if (operand === 'x²' || operand === '✓x' || operand === '1/x') {
//                 calculate();
//             }else{
//                 calculate();
//             }
//         });
//     })

//     document.querySelector('.result').addEventListener('click', function(){
//         if (number1 !== '' && operand !== '') {
//             calculate();
//         }
//     });

//     document.querySelector('.c22').addEventListener('click', clear);
// })
const buttons = document.querySelectorAll('button');
const output = document.getElementById('output');

let firstNumber = '';
let secondNumber = '';
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        const value = button.innerHTML;
        
        if(value >= 0 && value <= 9 || value ==='.'){
            if(operator === ''){
                firstNumber += value;
                output.innerHTML = firstNumber;
            }else{
                secondNumber += value;
                output.innerHTML = secondNumber;
            }
        // }else if(value === '/' || value === '*' || value === '-' || value === '+' || value === '%'){
        //     // output.innerHTML = value;
        //     if(firstNumber !== ''){
        //         operator = value;
        //         secondNumber = '';             
        //     }
        // }else if(value === '='){
        //     if (operator !== '=' || secondNumber !== '') {
        //         firstNumber = Number(firstNumber);
        //         secondNumber = Number(secondNumber);
        //         let result = 0;

        //         switch (operator) {
        //             case '+':
        //                 result = addition(firstNumber, secondNumber);
        //                 break;
        //             case '-':
        //                 result = subtraction(firstNumber, secondNumber);
        //                 break;
        //             case '*':
        //                 result = multiplication(firstNumber, secondNumber);
        //                 break;
        //             case '%':
        //                 result = modulo(firstNumber, secondNumber);
        //                 break;
        //             case '/':                        
        //                 result = division(firstNumber, secondNumber);
        //             default:
        //                 break;
        //         }

        //         output.innerHTML = result;
        //         firstNumber = result;
        //         secondNumber = '';
        //     }
        // }else if(value === 'AC'){
        //     clear;
        // }
    });
});