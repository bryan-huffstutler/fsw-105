var readlineSync = require('readline-sync');

console.log("ZombieX");
let user = readlineSync.question("What will your username be? ");
console.log(`Will ${user} survive?`);


let isAlive = true;
let inv = [];
let userHP = 100;


let mainMenu = () => {
    let walk = readlineSync.keyIn(`Press w to walk forward: \nType P to see your stats: `);
    if (walk == `w`){
      walkRandom();
    } else if (walk == `p`){
      console.log(`${user}: HP:${userHP} \nInventory: ${inv}`);
    }
  }


let walkRandom = () => {
  let x = Math.random();
  if (x < 0.3){
    spawnEnemy();
  } else {
    console.log(`Whew that was close.`);
  }
}
let spawnEnemy = () => {
  let x = Math.random();
  if (x < 0.3){
    spawnZombieDog();
  } else if (x < 0.6){
    spawnTwistedZombie();
  } else if (x > 0.6){
    spawnHulkingZombie();
  }
}
let spawnZombieDog = () => {
  console.log(`A dog has appeared snarling his teeth, it appears to be covered in blood and flesh hanging from his mouth!`)
  let x = 40;
  while (isAlive == true){
    let zombieAtk = Math.floor(Math.random() * 5 + 1);
    let pAtk = Math.floor(Math.random() * 15 + 1);
    if (userHP <= 0){
      console.log(`${user} HAS DIED, GAME OVER!`);
      isAlive = false;
    } else if (x <= 0){
      console.log(`You have defeated the Zombie Dog and have been awarded a Dog Fang Trophy!`);
      f = `Dog Fang Trophy`;
      inv.push(f);
      mainMenu()
      break;
    } else if (userHP != 0 && x != 0){
        let choice = readlineSync.keyIn(`Press 1 to attack \nPress 2 to run \nOr press p to view stats`);
        if (choice == 1){
          x -= pAtk;
          console.log(`Zombie Dog took ${pAtk} damage! HP is now: ` + x);
          userHP -= zombieAtk;
          console.log(`${user} took ${zombieAtk} damage! HP is now: ` + userHP);
            
        } else if (choice == 2){
          let runChance = Math.random();
          if (runChance > 0.5){
            console.log(`You got away safely.`);
            mainMenu();
            break;
          } else {
            console.log(`You turn to run but the Zombie Dog lunges at your back!`);
          }
        } else if (choice == `p`){
          console.log(`${user}: HP:${userHP} \nInventory: ${inv}`);
        }
    } else {console.log(`WTF`)}
  }
}

let spawnTwistedZombie = () => {
  console.log(`What is that thing? Looks like two zombies twisted together with fused flesh! GROSS!`)
  let x = 60;
  while (isAlive == true){
    let zombieAtk = Math.floor(Math.random() * 8 + 1);
    let pAtk = Math.floor(Math.random() * 15 + 1);
    if (userHP <= 0){
      console.log(`${user} HAS DIED, GAME OVER!`);
      isAlive = false;
    } else if (x <= 0){
      console.log(`You have defeated the Twisted Zombie and have been awarded a Contortion Mechanism!`);
      f = `Contortion Mechanism`;
      inv.push(f);
      mainMenu();
      break;
    } else if (userHP != 0 && x != 0){
        let choice = readlineSync.keyIn(`Press 1 to attack \nPress 2 to run \nOr press p to view stats`);
        if (choice == 1){
          x -= pAtk;
          console.log(`Twisted Zombie took ${pAtk} damage! HP is now: ` + x);
          userHP -= zombieAtk;
          console.log(`${user} took ${zombieAtk} damage! HP is now: ` + userHP);
            
        } else if (choice == 2){
          let runChance = Math.random();
          if (runChance > 0.5){
            console.log(`You got away safely.`);
            mainMenu();
            break;
          } else {
            console.log(`As you try to flee the Twisted Zombie grabs you with all 4 arms!`);
          }
        } else if (choice == `p`){
          console.log(`${user}: HP:${userHP} \nInventory: ${inv}`);
        }
    } else {console.log(`WTF`)}
  }
};

let spawnHulkingZombie = () => {
  console.log(`A HULKING ZOMBIE HAS BEGUN TO CHARGE AT YOU!!`)
  let x = 80;
  while (isAlive == true){
    let zombieAtk = Math.floor(Math.random() * 10 + 1);
    let pAtk = Math.floor(Math.random() * 15 + 1);
    if (userHP <= 0){
      console.log(`${user} HAS DIED, GAME OVER!`);
      isAlive = false;
    } else if (x <= 0){
      console.log(`You have defeated the HULKING ZOMBIE and have been awarded a Healing Orb (+25 HP).`);
      userHP += 25;
      mainMenu();
      break;
    } else if (userHP != 0 && x != 0){
        let choice = readlineSync.keyIn(`Press 1 to attack \nPress 2 to run \nOr press p to view stats`);
        if (choice == 1){
          x -= pAtk;
          console.log(`Hulking Zombie took ${pAtk} damage! HP is now: ` + x);
          userHP -= zombieAtk;
          console.log(`${user} took ${zombieAtk} damage! HP is now: ` + userHP);
            
        } else if (choice == 2){
          let runChance = Math.random();
          if (runChance > 0.5){
            console.log(`You got away safely.`);
            mainMenu();
            break;
          } else {
            console.log(`The HULKING ZOMBIE grabs your leg as you try to flee...`);
          }
        } else if (choice == `p`){
          console.log(`${user}: HP:${userHP} \nInventory: ${inv}`);
        }
    } else {console.log(`WTF`)}
  }
};

while (isAlive == true){
  mainMenu();
};