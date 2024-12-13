const booksModel = require("../models/booksModel.js");
module.exports = {
    //GET /api/books
    index(req, res) {
        const books = booksModel.getAllBooks({});
        return res.json({ books });
    },

    //GET /api/books/:id
    show(req, res) {
        const { id } = req.params;
        const target = booksModel.getBooksById(id);
        if (!target) {
            return res.status(404).json({});
        }

        return res.json({ target });
    },
    //POST /api/books
    save(req, res) {
        const { title, author, quantityAvailable } = req.body;

        if (
            typeof title !== "string" ||
            typeof author !== "string" ||
            typeof quantityAvailable !== "number"
        ) {
            return res.status(400).json({ message: "Campos inválidos." });
        }

        const newBook = { title, author, quantityAvailable };

        createdBook = booksModel.createBook(newBook);
        if (Object.keys(createdBook).length === 0 && !createBook)
            res.status(500).json({});
        res.json({ createdBook });
    },
    //PUT /api/books/:id
    update(req, res) {
        const { id } = req.params;
        const { title, author, quantityAvailable } = req.body;

        const filedsToUpdate = {};
        if (title) filedsToUpdate.title = title;
        if (author) filedsToUpdate.author = author;
        if (quantityAvailable)
            filedsToUpdate.quantityAvailable = quantityAvailable;

        const updatedBook = booksModel.updateBook(id, filedsToUpdate);

        return res.json({ updatedBook });
    },

    //DELETE /api/books/:id
    delete(req, res) {
        const { id } = req.params;
        const deletedBook = booksModel.deleteBook(id);
        res.json({ deletedBook });
    },
};
