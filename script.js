let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter third number"));

let min = Math.min(num1, num2, num3);
let max = Math.max(num1,num2,num3) ;
let mid = num1 + num2 + num3 - max -min;

alert( mid + " is the middel of those numbers.");
