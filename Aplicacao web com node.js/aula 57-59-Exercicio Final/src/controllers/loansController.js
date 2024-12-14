const HttpError = require("../error/HttpError.js");
const booksModel = require("../models/booksModel.js");
const loansModel = require("../models/loansModel.js");

module.exports = {
  //GET /api/loas
  index(req, res) {
    const loans = loansModel.getAllLoans();
    res.json(loans);
  },
  //GET /api/loans/:id
  show(req, res) {
    const { id } = req.params;
    const loan = loansModel.getLoanById(id);
    if (!loan) throw new HttpError(404, "Empréstimo não encontrado!");
    res.json(loan);
  },
  //POST /api/loans
  save(req, res) {
    const user = req.user; // user e criado na hr q autentica
    const { bookId } = req.body;
    console.log(user);

    if (typeof bookId !== "string")
      throw new HttpError(400, "Id de livro inválido");

    console.log(typeof bookId);

    const book = booksModel.getBooksById(bookId);

    if (Object.keys(book).length === 0 && !book)
      throw new HttpError(404, "Livro não encontrado");

    const newLoan = loansModel.createLoan(user, book);
    res.json(newLoan);
  },
  //POST /api/loans/:id/return
  return(req, res) {
    const { id } = req.params;
    const loan = loansModel.retunLoan(id);
    res.json(loan);
  },
};
