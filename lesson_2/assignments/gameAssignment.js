

class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Character.MAX_HEALTH;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}`);
    return result;
  }
}



class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor(name, role) {
    super(name);


    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  duel(opponent) {
    console.log(`${this.name} challenges ${opponent.name} to a duel!`);

    while (this.health > 50 && opponent.health > 50) {
      const myRoll = this.roll();
      const theirRoll = opponent.roll();

      if (myRoll > theirRoll) {
        opponent.health -= 1;
      } else if (theirRoll > myRoll) {
        this.health -= 1;
      }

      console.log(`${this.name}: ${this.health} HP`);
      console.log(`${opponent.name}: ${opponent.health} HP`);
      
    }

    const winner = this.health > opponent.health ? this.name : opponent.name;
    console.log(`${winner} wins the duel!`);
  }
}



class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  assist() {
    console.log(`${this.name} the ${this.type} assists!`);
  }
}



class AdventurerFactory {
  constructor(role) {

    this.role = role;
    this.adventurers = [];
  }

  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    return newAdventurer;
  }

  findByIndex(index) {
    return this.adventurers[index];
  }

  findByName(name) {
    return this.adventurers.find(a => a.name === name);
  }
}


const healers = new AdventurerFactory("Healer");

const robin = healers.generate("Robin");
const merlin = healers.generate("Merlin");

const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");

leo.inventory.push("collar");
frank.inventory.push("small hat", "sunglasses");

leo.companion = frank;
robin.companion = leo;



console.log("\n--- Rolling ---");
robin.roll();
leo.roll();
frank.roll();

console.log("\n--- Scouting ---");
robin.scout();

console.log("\n--- Duel ---");
robin.duel(merlin);

console.log("\n--- Factory Check ---");
console.log(healers.findByName("Robin"));
