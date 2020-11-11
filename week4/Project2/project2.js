var readlineSync = require('readline-sync');

var numOne = readlineSync.questionInt("Please enter your first number: ");
var numTwo = readlineSync.questionInt("Please enter your second number: ");
var oper = readlineSync.question("Please enter the operation to perform: add, sub, mul, div: ");

function add(a, b){
  let addedNumber = a + b;
  console.log("The result of adding " + numOne + " and " + numTwo + " is: " + addedNumber);
}

function sub(a, b){
  let subNum = a - b;
  console.log("The result of subtracting " + numOne + " and " + numTwo + " is: " + subNum);
}

function mul(a, b){
  let mulNum = a * b;
  console.log("The result of multiplying " + numOne + " by " + numTwo + " is: " + mulNum);
}

function div(a, b){
  let divNum = a / b;
  console.log("The result of dividing " + numOne + " by " + numTwo + " is: " + divNum);
}

if (oper == "add"){
  add(numOne, numTwo);
} else if (oper == "sub"){
  sub(numOne, numTwo);
} else if (oper == "mul"){
  mul(numOne, numTwo);
} else if (oper == "div"){
  div(numOne, numTwo);
} else {
  console.log("Please enter a valid operator: add, sub, mul or div")
}

