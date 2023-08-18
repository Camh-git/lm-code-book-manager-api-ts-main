import express from "express";
import * as booksController from "../controllers/books_controller";

export const router = express.Router();
router.get("/books", booksController.getBooks);
router.get("/books/:bookId", booksController.getBook);
router.post("/books", booksController.saveBook);

// User Story 4 - Update Book By Id Solution
router.put("/books/:bookId", booksController.updateBook);

//Task 1 - User Story: As a user, I want to use the Book Manager API to delete a book using its ID`
router.delete("/books/:bookID", booksController.deleteBook);
