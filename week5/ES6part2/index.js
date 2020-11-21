//Step 1)
const name = "John"
let age = 101;

function runForLoop(pets){
  let petObjects = []
  for (let i=0; i<pets.length; i++){
    let pet = {type: pets[i]}
    let name;
    if (pets[i] === "cat"){
      name = "fluffy"
    } else {
      name = "spot"
    }
    console.log("page name: ", name)
    pet.name = name
    petObjects.push(pet)
  }
  console.log("man name: ", name)
  return petObjects
}

runForLoop(["cat", "dog"])
console.log("==========")
//Step 2)
const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = arr => {
  return arr.map(function(carrot){
    return {type: "carrot", name: carrot}
  })
}
console.log(mapVegetables(carrots))
console.log("==========")
//Step 3)
const people = [
  {name: "Princess Peach", friendly: false},
  {name: "Luigi", friendly: true},
  {name: "Mario", friendly: true},
  {name: "Bowser", friendly: false}
  ]

const filterForFriendly = arr => {
  return arr.filter(function(person){
    return person.friendly
  })
}
console.log(filterForFriendly(people))
console.log("==========")
//Step 4)
const doMathSum = (a, b) => a + b;
console.log(doMathSum(2, 10))
console.log("==========")
//Step 5)
const printString = (firstName, lastName, age) => {
  
  console.log("Hi " + firstName + " " + lastName + ", how does it feel to be " + age + ".")
}
printString("Jane", "Doe", 100)
console.log("==========")
//Step 6)
printString(`Jane`, `Doe`, 100)
console.log("==========")
//Step 7)
const animals = [
  {type: "dog", name: "theodore"},
  {type: "cat", name: "whiskers"},
  {type: "pig", name: "piglette"},
  {type: "dog", name: "sparky"}
];
const filterForDogs = arr => arr.filter(v => v.type==="dog")
console.log(filterForDogs(animals))
console.log("==========")
//Step 8)
const step8 = (loc, name) => {
  console.log(`Hi ${name}!\nWelcome to ${loc}.\nI hope you enjoy your stay. Please ask the president of ${loc} if you need anything. `)
}
console.log(step8(`Hawaii`, `Janice`))