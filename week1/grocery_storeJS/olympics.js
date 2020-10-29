//Preliminaries
if (5 > 3) {
  console.log("is greater than");
}

var cat = 3;
if (cat = 3) {
  console.log ("it's three")
} else {
  console.log ("shoot yourself in the face");
}

var cat2 = 1;
var dog2 = 2;

if (cat2 != dog2){
  console.log("not the same");
} else {
  console.log("same");
}

//Bronze
var person = {
  name: "Bobby",
  age: 12
}

if (person.age < 18) {
  console.log ("Underage");
} else {
  console.log("Enter");
}

if (person.name.startsWith("B")){
  console.log("You may enter.");
} else {
  console.log("You may not enter.")
}

if (person.name.startsWith("B") && (person.age > 18)){
  console.log("You may enter, and you're over 18!")
} else {
  console.log("You are not old enough to enter, or you're name does not start with B");
}

//Silver
if (1 === "1"){
  console.log("strict");
} else if (1 == "1"){
  console.log("loose");
} else {
  console.log("not equal at all");
}

if ((1 <= 2) && (2 == 4)){
  console.log("yes");
} else {
  console.log("no");
}