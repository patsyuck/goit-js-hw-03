const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    i = this.potions.indexOf(oldName)
    this.potions.splice(i, 1, newName)
  },
};
