const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');
const add = document.querySelector('.add');
const sub = document.querySelector('.subtract');
const mult = document.querySelector('.multiply');
const div = document.querySelector('.divide');
const output = document.querySelector('.finalOutput');

const clearAll = document.querySelector('.clear');


add.addEventListener('click', addition);
sub.addEventListener('click', subtraction);
mult.addEventListener('click', multiply);
mult.addEventListener('click', multiply);
div.addEventListener('click', divide);
clearAll.addEventListener('click', clear);




function addition() {
    const result = parseInt(inputOne.value) + parseInt(inputTwo.value);

    output.innerHTML = 'Sum: ' + result;
    console.log(result);
}

function subtraction() {
    const result = parseInt(inputOne.value) - parseInt(inputTwo.value);

    output.innerHTML = 'Difference: ' + result;
    console.log(result);
}

function multiply() {
    const result = parseInt(inputOne.value) * parseInt(inputTwo.value);

    output.innerHTML = 'Product: ' + result;
    console.log(result);
}

function divide() {
    const result = parseInt(inputOne.value) / parseInt(inputTwo.value);

    output.innerHTML = 'Quotient: ' + result;
    console.log(result);
}

function clear() {
    inputOne.value = "";
    inputTwo.value = "";
    output.innerHTML = "0.0";
}