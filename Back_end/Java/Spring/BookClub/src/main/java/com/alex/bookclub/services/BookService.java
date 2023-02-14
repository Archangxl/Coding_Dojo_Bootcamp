package com.alex.bookclub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alex.bookclub.models.Book;
import com.alex.bookclub.repositories.BookRepo;

@Service
public class BookService {
	@Autowired
	private BookRepo repo;
	
	public Book createOrUpdateBook(Book book) {
		return repo.save(book);
	}
	public List<Book> findAllBooks() {
		return repo.findAll();
	}
	public Book findBookById(Long id) {
		Optional<Book> book = repo.findById(id);
		if (book.isPresent()) {
			return book.get();
		}
		return null;
	}
	public Book deleteBookById(Long id) {
		Optional<Book> book = repo.findById(id);
		if(book.isPresent()) {
			repo.deleteById(id);
		} else {
			System.out.println("error");
		}
		return null;
	}
}
