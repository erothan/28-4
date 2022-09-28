let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter third number"));

//checking num1 is a middle number or not
if (num2 > num1 && num1 > num3 || num3 > num1 && num1 > num2) {
    alert(num1 + " is a middle number");
}
//checking num2 is a middle number or not
if (num1 > num2 && num2 > num3 || num3 > num2 && num2 > num1) {
    alert(num2 + " is a middle number");
}
//checking num3 is a middle number or not
if (num1 > num3 && num3 > num2 || num2 > num3 && num3 > num1) {
    alert(num3 + " is a middle number");
}
