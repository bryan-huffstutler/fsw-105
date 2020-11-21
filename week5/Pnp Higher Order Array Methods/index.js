
//Section A
//Step 1)
  function fiveAndGreaterOnly(arr){
    return arr.filter(function(num){
      return num >= 5;
    })                
  }
  console.log("Section A Step 1: " + fiveAndGreaterOnly([3, 6, 8, 2]));

//Step 2)
  function evensOnly(arr){
    return arr.filter(function(num){
      return num % 2 === 0;
    })
  }
  console.log("Section A Step 2: " + evensOnly([3, 6, 8, 2]));

//Extra Credit
  function ofAge(arr){
     const y = arr.filter(function(x){
      if(x.age >= 17){1
        return true;
      }
    }); return y.toString();
  }
  console.log("Section A Extra Credit: " + ofAge([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
  ]));
console.log("==============================");


//Section B
//Step 1)
  function doubleNumbers(arr){
    return arr.map(function(num){
      return num * 2;
    })
  }
  console.log("Section B Step 1: " + doubleNumbers([2, 5, 100]));

//Step 2)
  function stringItUp(arr){
    return arr.map(function(x){
      return x.toString();
    })
  }
  console.log("Section B Step 2: " + (stringItUp([2, 5, 100])));

//Step 3)
  function capitalizeNames(arr){
    return arr.map(function(x){
      return x[0].toUpperCase() + (x.slice(1).toLowerCase());
    })
  }
  console.log("Section B Step 3: " + capitalizeNames(["john", "JACOB", "jinGleheimer", "schmidt"]));

//Section B Extra Credit 1)
  function namesOnly(arr){
    return arr.map(function(name){
      return name.name.toString();
    })
  }
  console.log("Section B Extra Credit #1: " + namesOnly([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
  ]));

//Section B Extra Credit 2)
  function makeStrings(arr){
    return arr.map(function(name){
      if (name.age >= 17){
        return name.name.toString();
      }
    });
  }
  console.log("Section B Extra Credit 2: " + makeStrings([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
  ]));
console.log("==============================");
//Section C
//Step 1)
  function total(arr){
    const result = arr.reduce(function(num, total){
      total = total + num;
      return total;
    });
    return result;
  }
  console.log("Section C Step 1: " + total([1,2,3]));

//Step 2)
  function stringConcat(arr){
    const array = arr.reduce(function(x, p){
      return x.toString() + p.toString();
    }); return array;
  }
  console.log("Section C Step 2: " + stringConcat([1,2,3]));

//Step 3)
  function totalVotes(arr){
    //I tried this with the reduce(), I'm not understanding why it returns [Object] instead of number count with total variable
/*   const y = arr.reduce(function(total, voter){
      total = 0;
      if (voter.voted == true){
        total++;
      } return total;
    }); return y; 
  } */
    var total = 0;
    for (i=0; i<arr.length; i++){
      if (arr[i].voted == true){
        total ++;
      }
    } return total;
  } 
  var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ]
  console.log("Section C Step 3: " + totalVotes(voters));

//Section C Extra Credit 1)
  function shoppingSpree(arr){
    return arr.reduce(function(total, i){
      
     return i.price += total;
    }),0;
  }
  var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 Carat Diamond Ring", price: 45000 },
    { title: "Fancy Hacky Sack", price: 5 },
    { title: "Gold Fidget Spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
  ];
console.log("Section C Extra Credit 1: " + shoppingSpree(wishlist));

//Section C Extra Credit 2)
  function flatten(arr){
    return arr.reduce(function(total, array){
      return total.concat(array);
    })
  }
  var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
  ]
  console.log("Section C Extra Credit 2: " + flatten(arrays));
console.log("===================================")
//Section D
//Step 1)
  function leastToGreatest(arr){
    const result = arr.sort(function(num1, num2){
      return num1 - num2;
    });
    return result;  
  }
  console.log("Section D Step 1: " + leastToGreatest([1, 3, 5, 2, 90, 20]));

//Step 2)
  function greatestToLeast(arr){
    const result = arr.sort(function(num1, num2){
      return num2 - num1;
    }); return result;
  }
  console.log("Section D Step 2: " + greatestToLeast([1, 3, 5, 2, 90, 20]));

//Step 3) 
  function lengthSort(arr){
    const result = arr.sort(function(num1, num2){
      return num1.length - num2.length;
    }); return result;
  }
  console.log("Section D Step 3: " + lengthSort(["dog", "wolf", "by", "family", "eaten"]));

