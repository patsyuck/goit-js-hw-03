const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
	i = this.books.indexOf(oldName)
    this.books.splice(i, 1, newName)
  },
};
