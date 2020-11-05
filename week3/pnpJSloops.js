var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

//Number 1
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
    console.log("Old enough");
  } else {
    console.log("Not old enough");
  }
}

//Number 2
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road");
  } else {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road");
  }
}

//Number 3
 for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
  //check if over 18
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
    //check if female or not
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max. Please let her in.")
    } else {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max. Please let him in.")
    }
  //not over 18
  } else {
    //check if female or not again
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max. Don't let her in.")
    } else {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max. Don't let him in.")
    }
  }
}

//Number 4
var count = 0;
//loop to determine which numbers between 0-100 are even or odd
for (var i = 0; i < 101; i++){
  if (count % 2 == 0){
    console.log(count + " is even.")
    count ++;
  } else {
    console.log(count + " is odd.")
    count ++;
  }
}

//Extra Credit
//lightbulb setup
var lightCount = 0;
var lightArray = [];


//function for loop to add array [i]'s together
function adding(){
  for (var i = 0; i < lightArray.length; i++){
    lightCount = lightCount + lightArray[i];  
  }
}

//function if statement to determine if light is on or off
function isOnOrOff(){
  if (lightCount % 2 == 0){
    console.log("Lightbulb is off.")
  } else {
    console.log("Lightbulb is on.")
  }
}
//pushing numbers into the array
lightArray.push(20, 20, 14);
adding();
isOnOrOff();

lightArray.push(434, 514, 675);
adding();
isOnOrOff();

lightArray.push(1035, 2, 23, 55);
adding();
isOnOrOff();

lightArray.push(1, 1, 1, 1, 1, 1);
adding();
isOnOrOff();

lightArray.push(2, 2, 2, 2, 1, 4);
adding();
isOnOrOff();