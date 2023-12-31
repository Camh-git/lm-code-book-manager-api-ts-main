import { Request, Response } from "express";
import * as bookService from "../services/books";

export const getBooks = async (req: Request, res: Response) => {
	const books = await bookService.getBooks();
	if (books) {
		res.json(books).status(200);
	} else {
		res.status(404).json("No books found");
	}
};

export const getBook = async (req: Request, res: Response) => {
	const bookId = req.params.bookId;
	const book = await bookService.getBook(Number(bookId));

	if (book) {
		res.json(book).status(200);
	} else {
		res.status(404).json("Book not found"); //This appears to be what the second extra task is asking for, but it already exists
	}
};

export const saveBook = async (req: Request, res: Response) => {
	const bookToBeSaved = req.body;
	try {
		const book = await bookService.saveBook(bookToBeSaved);
		res.status(201).json(book);
	} catch (error) {
		res.status(400).json({ message: (error as Error).message }); //This appears to be what the first extra task is asking for, but it already exists
	}
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (req: Request, res: Response) => {
	const bookUpdateData = req.body;
	const bookId = Number.parseInt(req.params.bookId);
	try {
		const book = await bookService.updateBook(bookId, bookUpdateData);
		res.status(204).json(book);
	} catch (error) {
		res.status(400).json({ message: (error as Error).message });
	}
};

//Task 1 -	User Story: As a user, I want to use the Book Manager API to delete a book using its ID`
export const deleteBook = async (req: Request, res: Response) => {
	const bookId = Number.parseInt(req.params.bookId);
	try {
		const book = await bookService.deleteBook(bookId);
		res.status(200).json(book);
	} catch (error) {
		res.status(400).json({ message: (error as Error).message });
	}
};
