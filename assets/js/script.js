

var calcArr = [];
// Display elements
let topDisplay = document.querySelector('.display__input');
let bottomDisplay = document.querySelector('.display__output');

// Scientific buttons container
let sciBtn = document.querySelector('.scientific-btn');
let trigger = document.querySelector('.trigger');

let toggleSciBtn = () => sciBtn.classList.toggle('scientific-btn--open');

trigger.addEventListener('click', toggleSciBtn);
/* bod.addEventListener('click',() => sciBtn.classList.remove('scientific-btn--open')); */
// Buttons
let calcBtns = document.querySelectorAll('.btn-holder button'); // All buttons
let ac = calcBtns[0]
let leftBracket = calcBtns[1]
let rightBracket = calcBtns[2]
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

//Scientific Buttons
let sciBtns = document.querySelectorAll('.scientific-btn button');
let radBtn = sciBtns[0];
let degBtn = sciBtns[1];
let negate = sciBtns[2];
let percent = sciBtns[3];
let cosBtn = sciBtns[4];
let sinBtn = sciBtns[5];
let tanBtn = sciBtns[6];
let powerBtn = sciBtns[7];
let acosBtn = sciBtns[8];
let asinBtn = sciBtns[9];
let atanBtn = sciBtns[10];
let sqrtBtn = sciBtns[11];
let cubeRootBtn = sciBtns[12];
let lnBtn = sciBtns[13];
let logBtn = sciBtns[14];
let factorialBtn = sciBtns[15];
let fibBtn = sciBtns[16];
let primeBtn = sciBtns[17];
let eulerBtn = sciBtns[18];
let piBtn = sciBtns[19];

// Button functions
let showInput = (input) => { topDisplay.innerHTML += input; calcArr.push(input); console.log(calcArr); }
let allClear = () => { topDisplay.innerHTML = ""; bottomDisplay.innerHTML = ""; calcArr = []; }
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
let showdot = () => {
    if (topDisplay.innerHTML.slice(-1) == '.') {

    } else {
        showInput('.');
    }
}

let delLastInput = () => {
    topDisplay.innerHTML = topDisplay.innerHTML.slice(0, topDisplay.innerHTML.length - 1);
    calcArr.pop();
}



let showAnswer = () => {
    calcStr = calcArr.join('')
    let powerSearch = search(calcArr, 'power(');
    let factorialSearch = search(calcArr, 'factorial');

    // Get power base
    const base = getPowerBase(calcArr, powerSearch);
    base.forEach(base => {
        let toReplace = base + 'power(';
        let replacement = 'Math.pow(' + base + ',';
        calcStr = calcStr.replace(toReplace, replacement);
    })

    // Get factorial numbers
    const facNums = getFacNums(calcArr, factorialSearch);
    facNums.forEach(factElement => {
        calcStr = calcStr.replace(factElement.toReplace, factElement.replacement);
    })

    try {
        bottomDisplay.innerHTML = eval(calcStr);
    } catch (error) {
        if (error instanceof SyntaxError) {
            bottomDisplay.innerHTML = "Syntax Error"
        }
    }

    if (topDisplay.innerHTML == '') {
        bottomDisplay.innerHTML = '';

    }
    if ((bottomDisplay.innerHTML === 'Infinity' && topDisplay.innerHTML.includes('/0')) || (bottomDisplay.innerHTML === 'NaN' && topDisplay.innerHTML.includes('/0'))) {
        bottomDisplay.innerHTML = 'undefined';
    }


    /*if (topDisplay.innerHTML.includes('fib')) {

        //topDisplay.innerHTML += ')';
         let str = topDisplay.innerHTML;
        let match = str.match(/[0-9]/);
        let fisrtIndex = str.indexOf(match[0]);
        let lastIndex = str.lastIndexOf(match[match.length - 1]);

        let num = topDisplay.innerHTML.substring(topDisplay.innerHTML.search(/[0-9]/), topDisplay.innerHTML.sub); 
        //bottomDisplay.innerHTML = match;
        //bottomDisplay.innerHTML = fib(num);
    }
    if (topDisplay.innerHTML.includes('cos')) {
        topDisplay.innerHTML.substring(0, topDisplay.innerHTML.length - 3);
        bottomDisplay.innerHTML = eval(topDisplay.innerHTML);
    } else {
       

    }*/


}

let getFacNums = (formula, fsearch) => {
    let numbers = [];
    let operatorsArr = ['+', '-', '/', '*'];
    let factorialseq = 0;
    fsearch.forEach(factIndex => {
        let number = []; //current factorial number

        let nextIndex = factIndex + 1;
        let nextInput = formula[nextIndex];

        if (nextInput == 'factorial') {
            factorialseq += 1;
            return;
        }

        let firstFactIndex = factIndex - factorialseq;

        let prevIndex = firstFactIndex - 1;
        let parenthesisCount = 0;

        while (prevIndex >= 0) {
            if (formula[prevIndex] == '(') { parenthesisCount-- }
            if (formula[prevIndex] == ')') { parenthesisCount++ }
            let isOperator = false;
            operatorsArr.forEach(operator => {
                if (formula[prevIndex] == operator) { isOperator = true; }
            })
            if (isOperator && parenthesisCount == 0) { break; }
            number.unshift(formula[prevIndex]);
            prevIndex--;
        }

        let numberStr = number.join('');
        let factorial = 'factorial(', closeParenthesis = ')';
        let times = factorialseq + 1;
        let toReplace = numberStr + 'factorial'.repeat(times);
        let replacement = factorial.repeat(times) + numberStr + closeParenthesis.repeat(times);

        numbers.push({
            toReplace: toReplace,
            replacement: replacement
        })

        // Reset factorial sequence
        factorialseq = 0;
    })
    return numbers;
}

let getPowerBase = (formula, psearch) => {
    let pbase = [];
    let operatorsArr = ['+', '-', '/', '*'];
    psearch.forEach(powerIndex => {
        let currentBase = [];
        let parenthesisCount = 0;
        let prevIndex = powerIndex - 1;
        while (prevIndex >= 0) {
            if (formula[prevIndex] == '(') { parenthesisCount-- }
            if (formula[prevIndex] == ')') { parenthesisCount++ }
            let isOperator = false;
            operatorsArr.forEach(operator => {
                if (formula[prevIndex] == operator) { isOperator = true; }
            })
            let isPower = formula[prevIndex] == 'power(';
            if ((isOperator && parenthesisCount == 0) || isPower) { break; }
            currentBase.unshift(formula[prevIndex]);
            prevIndex--;
        }
        pbase.push(currentBase.join(''));
    });
    return pbase;
}




let search = (array, keyword) => {
    let searchresult = [];
    array.forEach((element, index) => {
        if (element === keyword) {
            searchresult.push(index);
        }
    })
    return searchresult;
}

// Scientific buttons functions

// Angle unit toggle
let radian = true;

radBtn.classList.add('angle-unit--active');
let toggleAngleUnit = () => {
    radBtn.classList.toggle('angle-unit--active');
    degBtn.classList.toggle('angle-unit--active');
}

let radUnitOn = () => {
    radian = true;
    toggleAngleUnit();
}

let degUnitOn = () => {
    radian = false;
    toggleAngleUnit();

}

let showLeftBracket = () => showInput('(');
let showRightBracket = () => showInput(')');

let cos = () => {
    topDisplay.innerHTML += 'cos('
    if (radian) {
        calcArr.push('Math.cos(');
    } else {
        calcArr.push('Math.cos((Math.PI / 180)*');
    }
}

let sin = () => {
    topDisplay.innerHTML += 'sin('
    if (radian) {
        calcArr.push('Math.sin(');
    } else {
        calcArr.push('Math.sin((Math.PI / 180)*');
    }
}

let tan = () => {
    topDisplay.innerHTML += 'tan('
    if (radian) {
        calcArr.push('Math.tan(');
    } else {
        calcArr.push('Math.tan((Math.PI / 180)*');
    }
}

let power = () => {
    topDisplay.innerHTML += '^(';
    calcArr.push('power(');
}


let acos = () => {
    topDisplay.innerHTML += 'cos<sup>-1</sup>('
    if (radian) {
        calcArr.push('Math.acos(');
    } else {
        calcArr.push('(180 / Math.PI)*Math.acos(');
    }
}

let asin = () => {
    topDisplay.innerHTML += 'sin<sup>-1</sup>('
    if (radian) {
        calcArr.push('Math.asin(');
    } else {
        calcArr.push('(180 / Math.PI)*Math.asin(');
    }
}

let atan = () => {
    topDisplay.innerHTML += 'tan<sup>-1</sup>('
    if (radian) {
        calcArr.push('Math.atan(');
    } else {
        calcArr.push('(180 / Math.PI)*Math.atan(');
    }
}

let sqrt = () => {
    topDisplay.innerHTML += '&Sqrt;('
    calcArr.push('Math.sqrt(');
}

let cubeRootCaller = () => {
    topDisplay.innerHTML += '&#8731;('
    calcArr.push('Math.cbrt(');
}

let naturalLog = () => { //base e
    topDisplay.innerHTML += 'ln('
    calcArr.push('Math.log(');
}

let base10Log = () => {
    topDisplay.innerHTML += 'log('
    calcArr.push('Math.log10(');
}

let factorialCaller = () => {
    topDisplay.innerHTML += '!'
    calcArr.push('factorial');
}

let factorial = (num) => {
    if (num % 1 != 0) { return gamma(num + 1); }
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
        if (result === Infinity) {
            return Infinity;
        }
    }
    return result;
}

// GAMMA FUNCTINON
let gamma = (n) => {  // accurate to about 15 decimal places
    //some magic constants 
    var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if (n < 0.5) {
        return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    }
    else {
        n--;
        var x = p[0];
        for (var i = 1; i < g + 2; i++) {
            x += p[i] / (n + i);
        }
        var t = n + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
    }
}

let fibCaller = () => {
    showInput('fib(');
}

let fib = (num) => {
    let fibArr = [1, 1];
    if (num == 1) {
        fibArr = [1];
    } else if (num == 2) {
        fibArr = [1, 1];
    } else {

        for (let i = 0; i < num; i++) {
            fibArr[i + 2] = fibArr[i] + fibArr[i + 1];

            if (fibArr.length == num) {
                break;
            }
        }
    }
    return fibArr;
}

let primeCaller = () => {
    showInput('isPrime(');
}

let isPrime = (x) => {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) return false;
    }
    return x !== 1 && x !== 0;
}

let eulerNum = () => {
    topDisplay.innerHTML += 'e'
    calcArr.push(Math.E);
}

let piNum = () => {
    topDisplay.innerHTML += '&pi;'
    calcArr.push(Math.PI);
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

// Scientific listeners
radBtn.addEventListener('click', radUnitOn);
degBtn.addEventListener('click', degUnitOn)
leftBracket.addEventListener('click', showLeftBracket);
rightBracket.addEventListener('click', showRightBracket);
cosBtn.addEventListener('click', cos);
sinBtn.addEventListener('click', sin);
tanBtn.addEventListener('click', tan);
powerBtn.addEventListener('click', power);
acosBtn.addEventListener('click', acos);
asinBtn.addEventListener('click', asin);
atanBtn.addEventListener('click', atan);
sqrtBtn.addEventListener('click', sqrt);
cubeRootBtn.addEventListener('click', cubeRootCaller);
lnBtn.addEventListener('click', naturalLog);
logBtn.addEventListener('click', base10Log);
factorialBtn.addEventListener('click', factorialCaller)
fibBtn.addEventListener('click', fibCaller);
primeBtn.addEventListener('click', primeCaller);
eulerBtn.addEventListener('click', eulerNum);
piBtn.addEventListener('click', piNum);