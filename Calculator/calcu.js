
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
}

const buttons = document.querySelectorAll('button');
const output = document.getElementById('output');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.innerHTML;

        if (value >= 0 && value <= 9 || value === '.') {
            if (operator === '') {
                firstNumber += value;
                output.innerHTML = firstNumber;
            } else {
                secondNumber += value;
                output.innerHTML = secondNumber;
            }
        } else if (value === '÷' || value === '*' || value === '-' || value === '+' || value === '%') {
            output.innerHTML = value;
            if (firstNumber !== '') {
                operator = value;
            }
        } else if (value === '1/x' || value === 'x²' || value === '✓x' || value === '±') {
            if (firstNumber !== '') {
                operator = value;
                firstNumber = Number(firstNumber);

                switch (operator) {
                    case '1/x':
                        result = oneX(firstNumber);
                        break;
                    case 'x²':
                        result = xSquared(firstNumber);
                        break;
                    case '✓x':
                        result = squareRoot(firstNumber);
                        break;
                    case '±':
                        firstNumber *= -1;
                        result = firstNumber;
                        break;
                    default:
                        break;
                }
                output.innerHTML = result;
                firstNumber = result;
            }
        } else if (value === '=') {
            if (operator !== '=' && secondNumber !== '') {
                firstNumber = Number(firstNumber);
                secondNumber = Number(secondNumber);

                switch (operator) {
                    case '+':
                        result = addition(firstNumber, secondNumber);
                        break;
                    case '-':
                        result = subtraction(firstNumber, secondNumber);
                        break;
                    case '*':
                        result = multiplication(firstNumber, secondNumber);
                        break;
                    case '%':
                        result = modulo(firstNumber, secondNumber);
                        break;
                    case '÷':
                        result = division(firstNumber, secondNumber);
                    default:
                        break;
                }

                output.innerHTML = result;
                firstNumber = result;
                secondNumber = '';
                operator = '';
            } else if (operator === '=' && firstNumber !== '' && secondNumber === '') {
                result = Number(firstNumber);
                output.innerHTML = result;
                firstNumber = '';
            }
        } else if (value === 'AC') {
            clear();
            output.innerHTML = '|';
        }
    });
});