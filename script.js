let buttons = document.querySelectorAll(".number")
let screen = document.querySelector(".screen")

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

let currNum = []

function updateDisplay(keyPressed) {
    input = keyPressed.textContent
    if (input != "AC") {
        currNum.push(input)
        screen.textContent = currNum.join("")
    }

    else {
        currNum = []
        screen.textContent = ""
    }
}

buttons.forEach(button => {
    button.addEventListener("click", event => {
        updateDisplay(button)
    })
});

console.log(operate(8, "divide", 4))