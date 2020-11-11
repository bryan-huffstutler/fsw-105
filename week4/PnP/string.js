//Make a function that will return any given string into all caps followed by the same string all lowercase.
function capAndLower(str){
  let upLow = str.toUpperCase() + str.toLowerCase();
  return "Requirement #1 output: " + upLow;
}
console.log(capAndLower("Hello"));

//Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
function halfStr(str){
  let rdDown = Math.floor(str.length / 2);
  return rdDown; //I had "Requirement #2 output: " here in the return, it caused problems with firstHalf() so I moved it to the console.log
} 
console.log("Requirement #2 output: " + halfStr("Hello"));
console.log("Requirement #2 output: " + halfStr("Hello World"));

//Make a function that uses slice() and the other functions you've written to return the first half of the string.
function firstHalf(str){
  let firstHalf = halfStr(str);
  let firstHalfNum = str.slice(0, firstHalf);
  return "Requirement #3 output: " + firstHalfNum;
}
console.log(firstHalf("Hello"));
console.log(firstHalf("Hello World"));

//Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
function firstCapSecondLow(str){  
    let firstHalf = halfStr(str);
    let cap = str.slice(0, firstHalf);
    let lower = str.slice(firstHalf);
    return cap.toUpperCase() + lower.toLowerCase();
}
console.log("Requirement #4 output: " + firstCapSecondLow("Hello"));
console.log("Requirement #4 output: " + firstCapSecondLow("Hello World"));