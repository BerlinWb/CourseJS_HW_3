"use stric";


    const a = parseFloat(prompt("first"));
    const b = parseFloat(prompt("Second"));
    let result;
function calcAdd() {
    result = a + b;
    console.log(`Result: ${a} + ${b} = ${result}`);
}
function calcMin() {
    result = a - b;
    console.log(`Result: ${a} - ${b} = ${result}`);
}
function calcMult() {
    result = a / b;
    console.log(`Result: ${a} / ${b} = ${result}`);
}
function calcDiv() {
    result = a * b;
    console.log(`Result: ${a} * ${b} = ${result}`);
}
calcAdd();
calcMin();
calcMult();
calcDiv();
