const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    //s = -1
    //if (this.potions.includes(potionName)) {
    //  return `Зелье ${potionName} уже есть в инвентаре!`;
    //}
    for (elem of this.potions) {
      //s += 1
      if (elem.name === potionName.name) {
        return
      }
    }
    //if (s === -1) {
    	this.potions.push(potionName);
    //}
  },
  removePotion(potionName) {
    //const potionIndex = this.potions.indexOf(potionName);
    s = -1
    //if (potionIndex === -1) {
    //  return `Зелья ${potionName} нет в инвентаре!`;
    //}
    for (elem of this.potions) {
      s += 1
      if (elem.name === potionName) {
        break
      }
    }
    if (s !== -1) {
    	this.potions.splice(s, 1);
    }
  },
  updatePotionName(oldName, newName) {
    //const potionIndex = this.potions.indexOf(oldName);
    s = -1;
    t = false;
    //if (potionIndex === -1) {
    //  return `Зелья ${oldName} нет в инвентаре!`;
    //}
    for (elem of this.potions) {
      s += 1
      if (elem.name === oldName) {
        t = true
        break
      }
    }
    if (t) {
    	this.potions.splice(s, 1, {name: newName, price: this.potions[s].price});
    }
  },
};
