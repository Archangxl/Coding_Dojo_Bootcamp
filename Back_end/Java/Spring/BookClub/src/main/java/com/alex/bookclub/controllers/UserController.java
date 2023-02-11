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

import com.alex.bookclub.models.LoginUser;
import com.alex.bookclub.models.User;
import com.alex.bookclub.services.UserService;

@Controller
public class UserController {
	 @Autowired
	 private UserService userServ;
	 
	 @GetMapping("/")
	 public String index(Model model) {
	     model.addAttribute("newUser", new User());
	     model.addAttribute("newLogin", new LoginUser());
	     return "Login.jsp";
	 }
	 
	 @GetMapping("/logout")
	 public String logout(HttpSession session) {
		 session.removeAttribute("id");
		 return "redirect:/";
	 }
	 
	 @GetMapping("/dashboard")
	 public String dashboard(HttpSession session, Model model) {
		 
		 if (session.getAttribute("id") == null) {
			 return "redirect:/";
		 }
		 Long id = (Long) session.getAttribute("id");
		 User user = userServ.findById(id);
		 model.addAttribute("user", user);
		 return "dashboard.jsp";
	 }
	 
	 @PostMapping("/register")
	 public String register(@Valid @ModelAttribute("newUser") User newUser, 
	         BindingResult result, Model model, HttpSession session) {
		 
		 User registering = userServ.register(newUser, result);
	     if(registering == null) {
	    	 model.addAttribute("newLogin", new LoginUser());
	    	 return "Login.jsp";
	     } 
	     session.setAttribute("id", registering.getId());
	     return "redirect:/dashboard";
	 }
	 
	 @PostMapping("/login")
	 public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
	         BindingResult result, Model model, HttpSession session) {
	     
	     // Add once service is implemented:
	     User user = userServ.login(newLogin, result);
	 
	     if(user == null) {
	    	 model.addAttribute("newUser", new User());
	         return "Login.jsp";
	     }
	     
	     session.setAttribute("id", user.getId());
	     return "redirect:/dashboard";
	 }
}