"use strict";


function calcAdd() {
    const a = parseFloat(prompt("first"));
    const b = parseFloat(prompt("Second"));
    let result;
    result = a + b;
    console.log(`Result: ${a} + ${b} = ${result}`);
}
function calcMin() {
    const a = parseFloat(prompt("first"));
    const b = parseFloat(prompt("Second"));
    let result;
    result = a - b;
    console.log(`Result: ${a} - ${b} = ${result}`);
}
function calcMult() {
    const a = parseFloat(prompt("first"));
    const b = parseFloat(prompt("Second"));
    let result;
    result = a / b;
    console.log(`Result: ${a} / ${b} = ${result}`);
}
function calcDiv() {
    const a = parseFloat(prompt("first"));
    const b = parseFloat(prompt("Second"));
    let result;
    result = a * b;
    console.log(`Result: ${a} * ${b} = ${result}`);
}
calcAdd();
calcMin();
calcMult();
calcDiv(); 