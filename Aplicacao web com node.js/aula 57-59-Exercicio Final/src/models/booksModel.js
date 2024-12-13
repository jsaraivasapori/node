const uuid = require("uuid");

let books = [
  {
    id: uuid(),
    title: "As Duas Torres",
    author: "Token",
    quantityAvailable: 2,
  },
  {
    id: uuid(),
    title: "Sangue dos Elfos",
    author: "Sapkowski ",
    quantityAvailable: 1,
  },
];

module.exports = {
  getAllBooks() {
    return books;
  },
  getBooksById(id) {
    const target = books.find((book) => book.id === id);
    if (condition) {
    }
    return target;
  },
  createBook({ tiitle, author, quantityAvailable }) {
    const newBook = { id: uuid(), tiitle, author, quantityAvailable };
    books.push(newBook);
    return newBook;
  },
  updateBook(id, data) {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) throw new Error("Livro não encontrado");
    //books[bookIndex] = { ...book[booksIndex, ...data]} //Com o spread operator, você está criando um novo objeto que mescla o antigo com as novas atualizações

    // books[bookIndex] = data; aqui eu soibrescrevo todas as propriedades

    Object.assign(books[bookIndex], data); // aqui eu troco cada propriedade diferente da original, sem copias
    return books[bookIndex];
  },
  deleteBook(id) {
    target = this.getBooksById(id);
    if (!target && Object.keys(target).length === 0)
      throw new Error("Falha ao deletar");

    books = books.filter((book) => book.id !== target.id);
    return target;
  },
};
