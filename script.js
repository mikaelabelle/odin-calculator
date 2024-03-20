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

console.log(operate(8, "divide", 4))