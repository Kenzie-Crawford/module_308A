// const adventurer = {
//   name: "Sage",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],

//   companion: {
//     name: "Pumpkin",
//     type: "Dog",

//     companion: {
//       name: "Frank",
//       type: "Flea",
//       inventory: ["small hat", "sunglasses"]
//     }
//   },

//   roll(mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`);
//   }
// };
// adventurer.roll();

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}
const sage = new Character("Sage");
sage.inventory = ["sword", "potion", "artifact"];
sage.companion = new Character("Pumpkin");
sage.companion.type = "Dog";
sage.companion.companion = new Character("Frank");
sage.companion.companion.type = "Flea";
sage.companion.companion.inventory = ["small hat", "sunglasses"];

sage.roll();
sage.companion.roll();
sage.companion.companion.roll();


class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");    
    } 


    scout() {
        console.log(`${this.name} is scouting ahead....`);
        super.roll();
    }
}