function countTotalSalary(salaries) {
  let totalSalary = 0;
  const values = Object.values(salaries)
  for (const value of values) {
    totalSalary += value
  }
  return totalSalary;
}
