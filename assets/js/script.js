// Display elements
let topDisplay = document.querySelector('.display__input');
let bottomDisplay = document.querySelector('.display__output');

// Buttons
let calcBtns = document.querySelectorAll('button'); // All buttons
let ac = calcBtns[0]
let negate = calcBtns[1]
let percent = calcBtns[2]
let division = calcBtns[3]
let seven = calcBtns[4]
let eight = calcBtns[5]
let nine = calcBtns[6]
let multiplication = calcBtns[7]
let four = calcBtns[8]
let five = calcBtns[9]
let six = calcBtns[10]
let subtraction = calcBtns[11]
let one = calcBtns[12]
let two = calcBtns[13]
let three = calcBtns[14]
let addition = calcBtns[15]
let zero = calcBtns[16]
let decimal = calcBtns[17]
let backspace = calcBtns[18]
let equals = calcBtns[19]

let showInput = (input) => topDisplay.innerHTML += input;
// Button functions
let allClear = () => { topDisplay.innerHTML = ""; bottomDisplay.innerHTML = ""; }
let toggleNegative = () => topDisplay.innerHTML = topDisplay.innerHTML * (-1);
let percentage = () => {
    if (bottomDisplay.innerHTML == '') {
        bottomDisplay.innerHTML = topDisplay.innerHTML / 100;
    } else {
        bottomDisplay.innerHTML /= 100;
    }
}

let divide = () => {
    currentOperator = '/';
    if (bottomDisplay.innerHTML == '') {
        let lastOperator = topDisplay.innerHTML.slice(-1);
        if (lastOperator == currentOperator) {
            return
        } else if (lastOperator == '*' || lastOperator == '-' || lastOperator == '+') {
            topDisplay.innerHTML = topDisplay.innerHTML.substring(0, topDisplay.innerHTML.length - 1);
            showInput(currentOperator);
        } else {
            showInput(currentOperator);
        }
    } else {
        topDisplay.innerHTML = bottomDisplay.innerHTML;
        showInput(currentOperator);
    }
}

let multiply = () => {
    currentOperator = '*';
    if (bottomDisplay.innerHTML == '') {
        let lastOperator = topDisplay.innerHTML.slice(-1);
        if (lastOperator == currentOperator) {
            return
        } else if (lastOperator == '/' || lastOperator == '-' || lastOperator == '+') {
            topDisplay.innerHTML = topDisplay.innerHTML.substring(0, topDisplay.innerHTML.length - 1);
            showInput(currentOperator);
        } else {
            showInput(currentOperator);
        }
    } else {
        topDisplay.innerHTML = bottomDisplay.innerHTML;
        showInput(currentOperator);
    }
}

let minus = () => {
    currentOperator = '-';
    if (bottomDisplay.innerHTML == '') {
        let lastOperator = topDisplay.innerHTML.slice(-1);
        if (lastOperator == currentOperator) {
            return
        } else if (lastOperator == '*' || lastOperator == '/' || lastOperator == '+') {
            topDisplay.innerHTML = topDisplay.innerHTML.substring(0, topDisplay.innerHTML.length - 1);
            showInput(currentOperator);
        } else {
            showInput(currentOperator);
        }
    } else {
        topDisplay.innerHTML = bottomDisplay.innerHTML;
        showInput(currentOperator);
    }
}

let add = () => {
    currentOperator = '+';
    if (bottomDisplay.innerHTML == '') {
        let lastOperator = topDisplay.innerHTML.slice(-1);
        if (lastOperator == currentOperator) {
            return
        } else if (lastOperator == '*' || lastOperator == '-' || lastOperator == '/') {
            topDisplay.innerHTML = topDisplay.innerHTML.substring(0, topDisplay.innerHTML.length - 1);
            showInput(currentOperator);
        } else {
            showInput(currentOperator);
        }
    } else {
        topDisplay.innerHTML = bottomDisplay.innerHTML;
        showInput(currentOperator);
    }
}

let show9 = () => showInput(9);
let show8 = () => showInput(8);
let show7 = () => showInput(7);
let show6 = () => showInput(6);
let show5 = () => showInput(5);
let show4 = () => showInput(4);
let show3 = () => showInput(3);
let show2 = () => showInput(2);
let show1 = () => showInput(1);
let show0 = () => showInput(0);
let showdot = () => showInput('.');
let delLastInput = () => topDisplay.innerHTML = topDisplay.innerHTML.slice(0, topDisplay.innerHTML.length - 1);
let showAnswer = () => {
    bottomDisplay.innerHTML = eval(topDisplay.innerHTML);
    if (bottomDisplay.innerHTML === 'Infinity' || bottomDisplay.innerHTML === 'NaN') {
        bottomDisplay.innerHTML = 'undefined';
    }
}
/*
let getFormattedValue = (num) => { // returns the output as a comma separated value
    
    let n = Number(num);
    let value = n.toLocaleString('en');
    return value;
}
 
let reverseNumFormat = (num) => {
    return Number(num.replace(/,/g, ''))
}
 */

// Listeners
ac.addEventListener('click', allClear);
negate.addEventListener('click', toggleNegative);
percent.addEventListener('click', percentage);
division.addEventListener('click', divide);
multiplication.addEventListener('click', multiply);
subtraction.addEventListener('click', minus);
addition.addEventListener('click', add);
nine.addEventListener('click', show9);
eight.addEventListener('click', show8);
seven.addEventListener('click', show7);
six.addEventListener('click', show6);
five.addEventListener('click', show5);
four.addEventListener('click', show4);
three.addEventListener('click', show3);
two.addEventListener('click', show2);
one.addEventListener('click', show1);
zero.addEventListener('click', show0);
decimal.addEventListener('click', showdot);
backspace.addEventListener('click', delLastInput);
equals.addEventListener('click', showAnswer);
