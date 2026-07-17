const display = document.getElementById("display");
const history = document.getElementById("history");

// ئەگەر لەم پەڕەیە display بوونی نییە، کۆدەکە بوەستێ
if (!display) {
    console.warn("Display not found");
} else {

let current = "0";
let firstNumber = null;
let operatorValue = null;
let waitingForSecond = false;

display.value = current;

function press(number){
    if(waitingForSecond){
        current = number;
        waitingForSecond = false;
    }else{
        current = current === "0" ? number : current + number;
    }
    display.value = current;
}

function dot(){
    if(waitingForSecond){
        current = "0.";
        waitingForSecond = false;
    }else if(!current.includes(".")){
        current += ".";
    }
    display.value = current;
}

function clearDisplay(){
    current = "0";
    firstNumber = null;
    operatorValue = null;
    waitingForSecond = false;
    display.value = current;
    if(history) history.textContent = "";
}

function backspace(){
    if(waitingForSecond) return;
    current = current.length > 1 ? current.slice(0,-1) : "0";
    display.value = current;
}

function plusMinus(){
    if(current === "0") return;
    current = current.startsWith("-") ? current.substring(1) : "-" + current;
    display.value = current;
}

function percent(){
    current = String(parseFloat(current)/100);
    display.value = current;
}

function operator(op){
    firstNumber = parseFloat(current);
    operatorValue = op;
    waitingForSecond = true;
}

function calculate(){
    if(operatorValue === null || firstNumber === null) return;

    const secondNumber = parseFloat(current);
    let answer = 0;

    switch(operatorValue){
        case "+": answer = firstNumber + secondNumber; break;
        case "-": answer = firstNumber - secondNumber; break;
        case "×": answer = firstNumber * secondNumber; break;
        case "÷":
            if(secondNumber === 0){
                display.value = "Error";
                clearDisplay();
                return;
            }
            answer = firstNumber / secondNumber;
            break;
    }

    answer = Number(answer.toFixed(8));

    if(history){
        history.textContent = `${firstNumber} ${operatorValue} ${secondNumber} = ${answer}`;
    }

    current = String(answer);
    display.value = current;

    firstNumber = null;
    operatorValue = null;
    waitingForSecond = false;
}

// فەنکشنەکان بکە Global
window.press = press;
window.dot = dot;
window.clearDisplay = clearDisplay;
window.backspace = backspace;
window.plusMinus = plusMinus;
window.percent = percent;
window.operator = operator;
window.calculate = calculate;

}