const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let val = []
  for (const product of products) {
    if (product[propName] !== undefined) {
      val.push(product[propName])
    }
  }
  return val
}
