package com.alex.mvc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alex.mvc.models.Book;
import com.alex.mvc.repositories.BookRepository;

@Service
public class BookService {
	private final BookRepository bookRepository;
	
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	 // returns all the books
	 public List<Book> allBooks() {
	     return bookRepository.findAll();
	 }
	 // creates a book
	 public Book createBook(Book b) {
	     return bookRepository.save(b);
	 }
	 // retrieves a book
	 public Book findBook(Long id) {
	     Optional<Book> optionalBook = bookRepository.findById(id);
	     if(optionalBook.isPresent()) {
	         return optionalBook.get();
	     } else {
	         return null;
	     }
	 }
	 
	 public Book deleteBook(Long id) {
		 Optional<Book> bookBeingDeleted = bookRepository.findById(id);
	     if(bookBeingDeleted.isPresent()) {
	         bookRepository.deleteById(id);
	     } else {
	         System.out.println("Error");
	     }
		return null;
	 }
	 
	 public Book updateBook(Book book) {
		 return bookRepository.save(book);
	 }
}


