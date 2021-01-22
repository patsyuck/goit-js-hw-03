function findMatches(a, ...b) {
  const matches = [];
  for (elem of b) {
    if (a.includes(elem)) {
      matches.push(elem)
    }
  }
  return matches;
}
