const { v4: uuidv4 } = require("uuid");
const HttpError = require("../error/HttpError");

let books = [
  {
    id: "1",
    title: "As Duas Torres",
    author: "Token",
    quantityAvailable: 2,
  },
  {
    id: uuidv4(),
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
    return target;
  },
  createBook(data) {
    console.log(data.title);

    const newBook = {
      id: uuidv4(),
      title: data.title,
      author: data.author,
      quantityAvailable: data.quantityAvailable,
    };
    books.push(newBook);
    return newBook;
  },
  updateBook(id, data) {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) throw new HttpError(404, "Livro não encontrado");
    //books[bookIndex] = { ...book[booksIndex, ...data]} //Com o spread operator, você está criando um novo objeto que mescla o antigo com as novas atualizações

    // books[bookIndex] = data; aqui eu soibrescrevo todas as propriedades

    Object.assign(books[bookIndex], data); // aqui eu troco cada propriedade diferente da original, sem copias
    return books[bookIndex];
  },
  deleteBook(id) {
    target = this.getBooksById(id);
    if (!target && Object.keys(target).length === 0)
      throw new HttpError(404, "Falha ao deletar");

    books = books.filter((book) => book.id !== target.id);
    return target;
  },
  takeBook(id) {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) throw new HttpError(404, "Livro não encontrado");

    books[bookIndex].quantityAvailable -= 1;
  },
  returnBook(id) {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) throw new HttpError(404, "Livro não encontrado");

    books[bookIndex].quantityAvailable += 1;
  },
};
