//Declare and Invoke a Function

function greet(name = 'Nour') {
    return console.log(`Hello ${name}! Please give me a good grade on this lab`);
}

greet('Dor');

//Work With Parameters and Returning Values

function addNumbers(num1, num2) {
    return num1 + num2
}

let total = addNumbers(87, 71);
console.log(total);

//Function Scope

let x = 10;
 
function changeValue() {
    let x = 58;
    return console.log(x);
}

console.log(x);
changeValue();

//Closures

function outerFunction() {
    let count = 0;
    return {
        innerFunction() {
        count++;
        return count;
        },
    };
};

let countUp = outerFunction();
console.log(countUp.innerFunction());
console.log(countUp.innerFunction());
console.log(countUp.innerFunction());
console.log(countUp.innerFunction());
console.log(countUp.innerFunction());