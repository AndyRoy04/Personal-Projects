
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

document.addEventListener('DOMContentLoaded', function () {

    let number1 = '';
    let numeber2 = '';
    let operand = '';
    let resultDisplay = false;

    function Display(value) {
        $(".b1 h1").text(value);
    }

    function append(characters) {
        number1 += characters;
        Display(number1);
    }

    function clear() {
        let number1 = '';
        let number2 = '';
        let operand = '';
        let resultDisplay = false;
        Display('');
    }

    function calculate() {
        let result;
        if (operand !== '' && number1 !== '') {
            if (operand === 'x²') {
                result = xSquared(Number(number1));
            } else if (operand === '✓x') {
                result = squareRoot(Number(number1));
            } else if (operand === '1/x') {
                result = oneX(Number(number1));
            }
        } else if (operand !== '' && number2 !== '') {
            if (operand === '+') {
                result = addition(Number(number1), Number(number2));
            } else if (operand === '-') {
                result = subtraction(Number(number1), Number(number2));
            } else if (operand === '/') {
                result = division(Number(number1), Number(number2));
            } else if (operand === '*') {
                result = multiplication(Number(number1), Number(number2));
            } else if (operand === '%') {
                result = modulo(Number(number1), Number(number2));
            }
        }
    }




    $(".number").click(function () {
        var buttonClicked = $(this).text();
        number1 += buttonClicked;
        $("h1").text(parseFloat(number1));



    });


    $('.result').click(function () {
        var result = $(this).text();
        $("h1").text(result);
    })

    $('.operator').click(function () {
        var operand = $(this).text();
        $("h1").text(operand);
        console.log($('operator'))
    })


    // Clicked.push(buttonClicked);

    // const listString = Clicked.join('');
    // var numb1 = Number(listString);

    // if(numb1 === NaN){
    //     var sign = buttonClicked;
    //     Clicked.pop();
    //     $("h1").text(sign);
    // }else{
    //     $("h1").text(numb1)
    // }

    // for (var i = 0; i < (operators.length-1); i++){
    //     if (buttonClicked === operators[i]){
    //         Clicked.pop();
    //         $("h1").text("|iiii");
    //         operation(buttonClicked, numb1)
    //         console.log(numb1)
    //     }
    // }



    // function operation(value, numb1) {
    //     switch (value) {
    //         case "1/x":
    //             $("h1").text(oneX(numb1));
    //             break;
    //         case "x²":
    //             $("h1").text(xSquared(numb1));
    //             break;
    //         case "✓x":
    //             $("h1").text(squareRoot(numb1));
    //             break;
    //         case "/":
    //             $("h1").text(division(numb1));
    //             break;
    //         case "*":
    //             $("h1").text(multiplication(numb1));
    //             break;
    //         case "-":
    //             $("h1").text(subtraction(numb1));
    //             break;
    //         case "+":
    //             $("h1").text(addition(numb1));
    //             break;
    //         case "%":
    //             $("h1").text(modulo(numb1));
    //             break;
    //         case "±":
    //             // $("h1").text((numb1));
    //             break;
    //         case "AC":
    //             // $("h1").text(oneX(numb1));
    //             break;
    //         case "=":
    //             // $("h1").text(xSquared(numb1));
    //             break;


    //         default:
    //             break;
    //     }
    // }

})
