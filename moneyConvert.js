const usInput = document.querySelector('.usDollar');
const pound_btn = document.querySelector('.pound');
const can_btn = document.querySelector('.canDollar');
const swiss_btn = document.querySelector('.swiss');
const peso_btn = document.querySelector('.peso');
const yen_btn = document.querySelector('.yen');
const euro_btn = document.querySelector('.euro');

const finalOutput = document.querySelector('.output');

pound_btn.addEventListener('click', pound);
can_btn.addEventListener('click', can);
swiss_btn.addEventListener('click', swiss);
peso_btn.addEventListener('click', peso);
yen_btn.addEventListener('click', yen);
euro_btn.addEventListener('click', euro);

function isValid() {
    finalOutput.innerHTML = 'Please enter a numeric value';
}

function pound() {
    if(usInput.value === '') {
        isValid();
    } else {
        const result = parseInt(usInput.value) * 0.74;
        finalOutput.innerHTML = "£" + result;
    }
    
    console.log(result);
}

function can() {
    if(usInput.value === '') {
        isValid();
    } else {
    const result = parseInt(usInput.value) * 0.78;
    finalOutput.innerHTML = "C$" + result;
    }
    console.log(result);
}

function swiss() {
    if(usInput.value === '') {
        isValid();
    } else {
    const result = parseInt(usInput.value) * 1.12;
    finalOutput.innerHTML = "Fr" + result;
    }
    console.log(result);
}


function peso() {
    if(usInput.value === '') {
        isValid();
    } else {
    const result = parseInt(usInput.value) * 20.03;
    finalOutput.innerHTML = "₱" + result;
    }
    console.log(result);
}


function yen() {
    if(usInput.value === '') {
        isValid();
    } else {
    const result = parseInt(usInput.value) * 104.14;
    finalOutput.innerHTML = "¥" + result;
    }
    console.log(result);
}

function euro() {
    if(usInput.value === '') {
        isValid();
    } else {
    const result = parseInt(usInput.value) * 0.82;
    finalOutput.innerHTML = "€" + result;
    }
    console.log(result);
}



