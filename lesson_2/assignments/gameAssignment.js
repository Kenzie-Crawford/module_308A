const adventurer = {
  name: "Sage",
  health: 10,
  inventory: ["sword", "potion", "artifact"],

  companion: {
    name: "Pumpkin",
    type: "Dog",

    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"]
    }
  },

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
};
adventurer.roll();

