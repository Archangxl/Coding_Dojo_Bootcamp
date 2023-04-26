package com.alex.bookclub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alex.bookclub.models.Bookshelf;
import com.alex.bookclub.repositories.BookshelfRepo;

@Service
public class BookshelfService {
	@Autowired
	private BookshelfRepo repo;
	
	public Bookshelf createOrUpdateBookshelf(Bookshelf bookshelf) {
		return repo.save(bookshelf);
	}
	public Bookshelf findBookshelfById(Long id) {
		Optional<Bookshelf> bookshelf = repo.findById(id);
		if (bookshelf.isPresent()) {
			return bookshelf.get();
		}
		return null;
	}
	public List<Bookshelf> getAllBookshelfs() {
		return repo.findAll();
	}
}
