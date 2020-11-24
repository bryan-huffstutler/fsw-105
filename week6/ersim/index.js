var readlineSync = require('readline-sync');

const playerName = readlineSync.question("What is your name?");
const welcome = `Welcome ${playerName} to your worst nightmare, MWAHAHA! Can you escape the room?!`;
console.log(welcome);

let ifAlive = true;
let hasKey = false;

while (ifAlive == true){
  const menuId = readlineSync.keyIn(`Press 1 to put your hand in the hole \nPress 2 to find the key \npress 3 to open the door`, {limit: '$<1-3>'});
  if (menuId==1){
    console.log(`${playerName} you fool, you have DIED!`);
    ifAlive=false;
  } else if (menuId==2 && hasKey==true){
    console.log(`${playerName}, you already have the key, try the door! But what is that hole??????`);
   } else if (menuId==2 && hasKey==false){
    console.log(`${playerName}, you have the key, try the door!`);
    hasKey = true;
  } else if (menuId==3 && hasKey==false){
    console.log(`It's a door, you need the key.`);
  } else if (menuId==3 && hasKey==true){
    console.log(`The door opens, ${playerName} has esacped!`);
    ifAlive = false;
  }
}