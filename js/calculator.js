// calculator script
let displayNum = "0";
let firstSum = null;
let secondSum = null;
let firstOperator = null;
let secondOperator = null;
let total = null;

function updateDisplay() {
	const display = document.getElementById("display");
	display.innerText = displayNum;
	//cutoff display at > 19 digits
	if (displayNum.length > 19) {
		display.innerText = displayNum.substring(0, 19);
	}
}

updateDisplay();

const operandButton = document.getElementsByClassName("operand");
const operatorButton = document.getElementsByClassName("operator");

//listens for operand buttons
function storeValue() {
	for (let i = 0; i < operandButton.length; i++) {
		operandButton[i].addEventListener("click", function () {
			if (operandButton[i].classList.contains("operand")) {
				inputNumber(operandButton[i].value);
				updateDisplay();
			}
		});
	}
}

storeValue();

//listens for operator buttons
function clickOperator() {
	for (let i = 0; i < operatorButton.length; i++) {
		operatorButton[i].addEventListener("click", function () {
			if (operatorButton[i].classList.contains("operator")) {
				inputOperator(operatorButton[i].value);
			}
		});
	}
}

clickOperator();

//update value of displayNum depending on button value, loops into storeValue
function inputNumber(value) {
	if (displayNum == "0" || displayNum == 0) {
		displayNum = value;
	} else {
		displayNum += value;
	}
}

//update first and second operator, loops into storeOperator
function inputOperator(operator) {
	if (firstOperator == null) {
		firstOperator == operator;
	} else {
		secondOperator == operator;
	}
}

function storeOperator() {
	for (let i = 0; i < operatorButton.length; i++) {
		operatorButton[i].addEventListener("click", function () {
			if (firstOperator == null && secondOperator === null) {
				firstOperator = operatorButton[i].value;
				firstSum = displayNum;
			}

			if (firstSum != null) {
				displayNum = "";
			}

			if (firstOperator != null && firstOperator != firstOperator) {
				secondOperator = operatorButton[i].value;
				displayNum = "";
			}
		});
	}
}

storeOperator();

function equals() {
	if (firstOperator === null) {
		displayNum = displayNum;
	} else if (secondOperator != null) {
		secondSum = displayNum;
		total = operate(Number(firstSum), Number(secondSum), secondOperator);
		firstSum = displayNum;

		//reset operation
		secondSum = null;
		firstOperator = null;
		secondOperator = null;
		total = null;
	} else {
		secondSum = displayNum;
		total = operate(Number(firstSum), Number(secondSum), firstOperator);
		displayNum = total;
		updateDisplay();

		//reset operation
		secondSum = null;
		firstOperator = null;
		secondOperator = null;
		total = null;
		displayNum = "0";
	}
}

function operate(a, b, operator) {
	switch (operator) {
		case "add":
			return a + b;
			break;
		case "subtract":
			return a - b;
			break;
		case "product":
			return a * b;
			break;
		case "division":
			if (b === 0) {
				return "boom";
			} else {
				return a / b;
				break;
			}
	}
}

function clearAll() {
	displayNum = 0;
	firstSum = null;
	secondSum = null;
	firstOperator = null;
	secondOperator = null;
	total = 0;
	updateDisplay();
}
