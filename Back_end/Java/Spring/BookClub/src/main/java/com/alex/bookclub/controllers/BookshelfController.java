package com.alex.bookclub.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.alex.bookclub.models.Book;
import com.alex.bookclub.models.Bookshelf;
import com.alex.bookclub.models.User;
import com.alex.bookclub.services.BookService;
import com.alex.bookclub.services.BookshelfService;
import com.alex.bookclub.services.UserService;

@Controller
public class BookshelfController {
	@Autowired
	private UserService userServ;
	@Autowired
	private BookService bookServ;
	@Autowired
	private BookshelfService bookshelfServ;
	
	@GetMapping("/bookshelf/form")
	public String bookshelfForm(@ModelAttribute("newBookshelf") Bookshelf bookshelf, HttpSession session, Model model) {
		Long id = (Long) session.getAttribute("id");
		User user = userServ.findById(id);
		model.addAttribute("user", user);
		return "CreateBookshelf.jsp";
	}
	@GetMapping("/book/form")
	public String bookForm(@ModelAttribute("newBook") Book book, HttpSession session, Model model) {
		Long id = (Long) session.getAttribute("id");
		User user = userServ.findById(id);
		model.addAttribute("user", user);
		return "CreateBook.jsp";
	}
	@GetMapping("/book/view/{id}")
	public String viewBook(HttpSession session, Model model) {
		Long id = (Long) session.getAttribute("id");
		User user = userServ.findById(id);
		model.addAttribute("user", user);
		return "CreateBookshelf.jsp";
	}
	@PostMapping("/bookshelf/create")
	public String createBookshelf(
			@Valid @ModelAttribute("newBookshelf") Bookshelf bookshelf,
			BindingResult result) {
		if (result.hasErrors()) {
			return "CreateBookshelf.jsp";
		}
		bookshelfServ.createOrUpdateBookshelf(bookshelf);
		return "redirect:/bookshelf/form";
	}
	
	@PostMapping("/book/create")
	public String createBook(
			@Valid @ModelAttribute("newBook") Book book,
			BindingResult result,
			Model model,
			HttpSession session) {
		System.out.println(1);
		if (result.hasErrors()) {
			Long id = (Long) session.getAttribute("id");
			User user = userServ.findById(id);
			model.addAttribute("user", user);
			return "CreateBook.jsp";
		}
		System.out.println(2);
		bookServ.createOrUpdateBook(book);
		return "redirect:/book/form";
		
	}
}
