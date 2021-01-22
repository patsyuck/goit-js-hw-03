function addOverNum(value, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > value) {
    	total += arg;
    }
  }

  return total;
}
