const HttpError = require("../error/HttpError");
const { v4: uuidv4 } = require("uuid");
const booksModel = require("../models/booksModel.js");
const loans = [
  {
    id: uuidv4(),
    userId: uuidv4(),
    bookId: uuidv4(),
    loanDate: new Date("2024-01-01"),
    retunrDate: null,
    isReturned: false,
    isLate: true,
  },
];

module.exports = {
  getAllLoans() {
    return loans;
  },
  getLoanById(id) {
    return loans.find((loan) => loan.id === id);
  },
  createLoan(user, book) {
    if (book.quantityAvailable < 1)
      throw new HttpError(400, "Não há exemplares disponíveis");
    const today = new Date();
    const returnDate = new Date();
    returnDate.setDate(today.getDate() + 14);

    const newLoan = {
      id: uuidv4(),
      userId: user.id,
      bookId: book.id,
      loanDate: today,
      returnDate: returnDate,
      isReturned: false,
      isLate: false,
    };
    loans.push(newLoan);
    booksModel.takeBook(book.id);
    return newLoan;
  },
  retunLoan(id) {
    const loanIndex = loans.findIndex((loan) => loan.id === id);
    if (loanIndex === -1) throw new HttpError(404, "Empréstimo não encontrado");

    const loan = loans[loanIndex];
    if (loan.isReturned) return null;

    loan.isReturned = true;

    const today = new Date();
    const limitDate = new Date(loan.retunrDate);
    loan.isLate = today > limitDate;
    loan.retunrDate = today;

    booksModel.returnBook(loan.bookId);
    return loan;
  },
};
