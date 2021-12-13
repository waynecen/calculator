// calculator script
let displayNum = '0';
let display = document.getElementById("display");
display.innerText = "displayNum";

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayNum;
}

updateDisplay();

let one = document.getElementById("number").value;

function add(a, b) {
    display
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function product(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function operate(operator) {
    switch (operator) {
        case 'add':
            return a + b
            break;
        case 'subtract':
            return a - b
            break;
        case 'product':
            return a * b
            break;
        case 'division':
            if (b === 0) {
                return 'boom';
            } else {
                return a / b
                break;
            }
    }
}
