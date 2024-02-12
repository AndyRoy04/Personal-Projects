
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

const result = document.getElementsByClassName('result');

setTimeout(function() {
    document.getElementsByClassName('slash').innerHTML = '|';
  }, 1000);



















































































const operators = ["1/x", "x²", "✓x", "/", "*", "-", "+", "±", ".", "%", "AC", "="];
var Clicked = [];
$("button").click(function () {
    // var buttonClicked = $(this).text();
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

});

function operation(value, numb1) {
    switch (value) {
        case "1/x":
            $("h1").text(oneX(numb1));
            break;
        case "x²":
            $("h1").text(xSquared(numb1));
            break;
        case "✓x":
            $("h1").text(squareRoot(numb1));
            break;
        case "/":
            $("h1").text(division(numb1));
            break;
        case "*":
            $("h1").text(multiplication(numb1));
            break;
        case "-":
            $("h1").text(subtraction(numb1));
            break;
        case "+":
            $("h1").text(addition(numb1));
            break;
        case "%":
            $("h1").text(modulo(numb1));
            break;
        case "±":
            // $("h1").text((numb1));
            break;
        case "AC":
            // $("h1").text(oneX(numb1));
            break;
        case "=":
            // $("h1").text(xSquared(numb1));
            break;


        default:
            break;
    }
}
