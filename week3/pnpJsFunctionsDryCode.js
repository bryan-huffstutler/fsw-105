function add(a, b){
  return a + b;
}
var sum = add(1,2);
console.log(sum);

function whichIsGreater(a, b, c){
  if (a > b){
    if (a > c){
      console.log(a + " is greater than all");
    }
  } else if (b > c){
      console.log(b + " is greater than all");    
  } else {
    console.log(c + " is greater than all");
  }
}

whichIsGreater(15,20,3);

function evenOrOdd(a){
  if (a % 2 == 0){
    console.log(a + " is even");
  } else {
    console.log(a + " is odd");
  }
}

evenOrOdd(23);

function strChecker(x){
  if (x.length <= 20){
    return(x + x);
  } else {
    return x.slice(0, x.length/2);
  }
}

console.log(strChecker("Take it to the bank and desposit it!"));
console.log(strChecker("Hello"));

var fibo = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

//This Fibonacci code does not work, I feel like I'm on the right path but something's not quite right..
function fiboCounter(x){
  var h = fibo.slice(0, x);
  for (var i = 0; i < h.length; i++){
      var sum = 0;
      sum = sum + h[i];
    }
    console.log(sum);
}

fiboCounter(7);