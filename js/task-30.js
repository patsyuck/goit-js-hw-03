function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  return {category, priority, ...data, completed}
}
