//get the input class result
let result = document.getElementById("result");

//function to the Number value
function Number(number) {
result.value += number;
}

//function for clear result to return ZERO
function clearResult() {
result.value = "";
}

//function for backspace with slice method ( const people = [`Allan`,`Mark`,`Jason`]; console.log(people.slice(1)); output:Mark,Jason )
function backspace() {
result.value = result.value.slice(0, -1);
}

//function for operator
function add(operator) {
result.value += operator;
}

function subtract(operator) {
result.value += operator;
}

function multiply(operator) {
result.value += operator;
}

function divide(operator) {
result.value += operator;
}

//function for decimal point using indexOf() method, it returns the first index at which a given element can be found in the array, or -1 pag wala.
function decimal(dot) {
if (result.value.indexOf(".") == -1) {
result.value += dot;
}
}

//using Match() Method for this function ()
//The match() method retrieves the result of matching a string against a regular expression.
function solve() {
let globalExpress = result.value;
//The RegExp object is used for matching text with a pattern. globally using the "g" flag
let numbers = globalExpress.match(/ \d+\.\d+|\d+/g);
//This returns an array called numbers that contains all the numbers found in the expression.
let operators = globalExpress.match(/[+\-*\/]/g)
//This returns an array called operators that contains all the operators found in the expression.

//using Switch case
let total = parseFloat(numbers[0]);
for (let i = 0; i < operators.length; i++) {
let nextNumber = parseFloat(numbers[i + 1]);
switch (operators[i]) {
case "+":
total += nextNumber;
break;
case "-":
total -= nextNumber;
break;
case "*":
total *= nextNumber;
break;
case "/":
total /= nextNumber;
break;
}
}
result.value = total;
}