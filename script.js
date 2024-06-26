let inputs = document.querySelectorAll(".input")
let screen = document.querySelector(".screen")
let equals = document.querySelector(".equals")
let backspace = document.querySelector(".backspace")

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

let numA
let numB
let operator

function operate(numA, operator, numB) {
    if (operator === "plus") {
        return add(numA, numB)
    }
    else if (operator === "minus") {
        return subtract(numA, numB)
    }
    else if (operator === "multiply") {
        return multiply(numA, numB)
    }
    else if (operator === "divide") {
        return divide(numA, numB)
    }
}

let firstNum = []
let secondNum = []
let operation
let result
let currentDisNum
let operations = ["plus", "minus", "multiply", "divide"]


function updateFirstNum(keyPressed) {
    let input = keyPressed.textContent
    if (input === "." && firstNum.includes(".")) {
        return
    }
    if (firstNum.length > 10) {
        return
    }
    firstNum.push(input)
    screen.textContent = firstNum.join("")
}

function updateSecondNum(keyPressed) {
    let input = keyPressed.textContent
    if (input === "." && secondNum.includes(".")) {
        return
    }
    if (secondNum.length > 10) {
        return
    }
    secondNum.push(input)
    screen.textContent = secondNum.join("")
}

function clearDisplay() {
    firstNum = []
    secondNum = []
    operation = null
    result = null
    screen.textContent = ""
}

function operationSelected(keyPressed) {
    if (firstNum.length === 0 || secondNum.length === 0) {
        screen.textContent = ""
    }
    operation = keyPressed.id
}

function getResult(firstNum, secondNum, operation) {
    if (firstNum == "0" && secondNum == "0" && operation === "divide") {
        return "ȩ̷͒̕ṟ̴͖̆r̴̞̻̀ô̷͈̐r̴̢͚̿"
    }
    currentDisNum = "result"
    let longNum = operate(Number(firstNum.join("")), operation, Number(secondNum.join("")))
    let longNumLength = Math.floor(longNum).toString().length
    let roundFactor = 10 ** (11 - longNumLength)
    return Math.round(longNum * roundFactor) / roundFactor
}

function backspaceNum(display) {
    if (display === "first") {
        firstNum.pop()
        screen.textContent = firstNum.join("")
    }
    if (display === "second") {
        secondNum.pop()
        screen.textContent = secondNum.join("")
    }
    if (display === "result") {
        return
    }
}

inputs.forEach(button => {
    button.addEventListener("click", e => {
        if (button.textContent === "AC") {
            clearDisplay()
        }
        else if (operations.includes(button.id)) {
            if (result) {
                firstNum = [result]
                result = null
                screen.textContent = ""
            }
            else if (firstNum.length != 0 && secondNum.length != 0) {
                result = getResult(firstNum, secondNum, operation)
                screen.textContent = result
                firstNum = [result]
                result = null
            }
            operationSelected(button)
            secondNum = []
        }
        else if (button.classList.contains("number") && !operation) {
            result = null
            updateFirstNum(button)
            currentDisNum = "first"
        }
        else if (button.classList.contains("number")) {
            result = null
            updateSecondNum(button)
            currentDisNum = "second"
        }
    })
});

backspace.addEventListener("click", e => {
    backspaceNum(currentDisNum)
})

equals.addEventListener("click", e => {
    if (firstNum.length < 1 || secondNum.length < 1) {
        return
    }
    result = getResult(firstNum, secondNum, operation)
    operation = null
    firstNum = []
    secondNum = []
    screen.textContent = result
});
