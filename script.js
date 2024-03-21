let inputs = document.querySelectorAll(".input")
let screen = document.querySelector(".screen")
let equals = document.querySelector(".equals")

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
let operations = ["plus", "minus", "multiply", "divide"]

// TODO: problem when pressing second Num twice


function updateFirstNum(keyPressed) {
    let input = keyPressed.textContent
    firstNum.push(input)
    screen.textContent = firstNum.join("")
}

function updateSecondNum(keyPressed) {
    let input = keyPressed.textContent
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
    return operate(Number(firstNum.join("")), operation, Number(secondNum.join("")))
}

inputs.forEach(button => {
    button.addEventListener("click", e => {
        if (button.textContent === "AC") {
            clearDisplay()
        }
        else if (operations.includes(button.id)) {
            if (firstNum.length != 0 && secondNum.length != 0) {
                result = getResult(firstNum, secondNum, operation)
                screen.textContent = result
                firstNum = [result]

            }

            operationSelected(button)
            secondNum = []

        }
        else if (!operation && firstNum.length === 0) {
            updateFirstNum(button)
        }
        else if (!operations.includes(button.id)) {
            updateSecondNum(button)
        }
        else {
            result = getResult(firstNum, secondNum, operation)
            firstNum = result
            updateSecondNum(button)
        }
        console.log({ operation, firstNum, secondNum, result })
    })
});

equals.addEventListener("click", e => {
    result = getResult(firstNum, secondNum, operation)
    operation = null
    screen.textContent = result
});
