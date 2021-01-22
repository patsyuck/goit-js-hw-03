const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    i = this.potions.indexOf(potionName)
    this.potions.splice(i, 1)
  },
};
