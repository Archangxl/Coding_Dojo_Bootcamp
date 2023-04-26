package com.alex.bookclub.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
	@GetMapping("/book/{id}")
	public String viewBook(HttpSession session, Model model, @PathVariable("id") Long bookId) {
		
		Long id = (Long) session.getAttribute("id");
		User user = userServ.findById(id);
		model.addAttribute("user", user);
		
		Book book = bookServ.findBookById(bookId);
		
		model.addAttribute("book", book);
		
		model.addAttribute("match", userServ.compareUserIds(id , book.getBookshelf().getUser().getId()));
		
		return "ViewBook.jsp";
	}
	@GetMapping("/book/view/{id}")
	public String showUpdateBook(@PathVariable("id")Long bookId, Model model, @ModelAttribute("updateBook") Book book, HttpSession session) {
		Long id = (Long) session.getAttribute("id");
		User user = userServ.findById(id);
		model.addAttribute("user", user);
		model.addAttribute("book", bookServ.findBookById(bookId));
		return "UpdateBook.jsp";
	}
	
	@PutMapping("/book/update/{id}")
	public String updateBook(
			@Valid @ModelAttribute("updateBook") Book book,
			BindingResult result,
			Model model,
			HttpSession session,
			@PathVariable("id") Long bookId,
			@RequestParam(value="title")String title,
			@RequestParam(value="author")String author,
			@RequestParam(value="thought")String thought, 
			@RequestParam(value="bookshelf")Bookshelf bookshelf
			) {
		if (bookshelf == null) {
			return "UpdateBook.jsp";
		}
		
		if (result.hasErrors()) {
			return "UpdateBook.jsp";
		}
		
		Book bookBeingUpdated = new Book(title, author, thought, bookshelf);
		bookBeingUpdated.setId(bookId);
		Book updatedBook = bookServ.createOrUpdateBook(bookBeingUpdated);
		
		return "redirect:/book/" + bookId;
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
		if (result.hasErrors()) {
			Long id = (Long) session.getAttribute("id");
			User user = userServ.findById(id);
			model.addAttribute("user", user);
			return "CreateBook.jsp";
		}
		bookServ.createOrUpdateBook(book);
		return "redirect:/book/form";
		
	}
	@DeleteMapping("/book/delete/{id}")
	public String delete(@PathVariable("id")Long id) {
		bookServ.deleteBookById(id);
		return "redirect:/dashboard";
	}
}
