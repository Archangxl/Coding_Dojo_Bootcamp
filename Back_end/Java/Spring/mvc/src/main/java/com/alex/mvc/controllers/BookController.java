package com.alex.mvc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.alex.mvc.services.BookService;

@Controller
public class BookController {
	
	@Autowired
	BookService bookService;
	
	@GetMapping("/book")
	public String allBooks(Model model) {
		model.addAttribute("books", bookService.allBooks() );
		
		return "allBooks.jsp";
	}
	
	@GetMapping("/book/{id}")
	public String singleBook(Model model, @PathVariable("id") Long bookID) {
		model.addAttribute("book", bookService.findBook(bookID));
		return "book.jsp";
	}
}
