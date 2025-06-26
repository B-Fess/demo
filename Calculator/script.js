let resultText = document.getElementsByClassName("result-text")[0];
let storedValue = null
let storedOperation = null
let displayingResult = false

function onNumberPressed(number) {
    if (displayingResult === true){
        resultText.innerHTML = ""
        displayingResult = false
    }
    if (number === "."){
        if (resultText.innerHTML.length === 0 || resultText.innerHTML.includes(".")) 
            return;
    }

    resultText.innerHTML += number.toString()
}


function operate(number){
    let result;

    switch (storedOperation){
        case "+":
            result = storedValue + number
            break;        
        case "-":
            result = storedValue - number
            break       
        case "X":
            result = storedValue * number
            break       
        case "/":
            result = storedValue / number
            break
        case "=":
            result = storedValue
            break
    }
    resultText.innerHTML = result;
    storedOperation = null
    storedValue = result
}

function canOperate(){
    return resultText.innerHTML.length >= 1;
}

function onOperationPressed(operation) {
    const number = parseFloat(resultText.innerHTML);
    
    if (!canOperate()) return;

    if (operation === "=" && storedOperation !== null) {
        return operate(number)
    }else if (operation === "C"){
        resultText.innerHTML = ""
        storedOperation = null
        storedValue = null
    }else {

        storedOperation = operation
        storedValue = number
    }
    resultText.innerHTML = ""
    
}