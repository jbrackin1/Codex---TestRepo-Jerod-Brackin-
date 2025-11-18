// Jerod Brackin Day 2 Week 1 Cohort 2 - Fernando 
// Calculator js app



function multiply(a, b){
    return a * b;
}


function divide(a, b){
    if(b === 0){
        return "Error: Division by zero";
    }
    return a / b;
}               

function add (a, b){ 
    return a + b;
}

function subtract(a, b){
    return a - b;
}
module.exports = { multiply, divide, add, subtract };