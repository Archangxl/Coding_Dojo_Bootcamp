package com.alex.Omikuji;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class Omikuji {

	@GetMapping("/")
	public String form() {
		return "form.jsp";
	}
	
	@PostMapping("/submit")
	public String submit(
			@RequestParam(value="number") String number,
			@RequestParam(value="city") String city, 
			@RequestParam(value="name") String name,
			@RequestParam(value="hobby") String hobby,
			@RequestParam(value="thing") String thing,
			@RequestParam(value="somethingNice") String somethingNice, HttpSession session) {
		
		 String formSubmition = String.format("In %s years, you will live in %s with %s as your roommate, selling %s for a living. The next time you see a %s you will have good luck. %s", number, city, name, hobby, thing, somethingNice);
		 
		 session.setAttribute("fortune", formSubmition);
		
		return "redirect:/fortune";
	}
	
	@GetMapping("/fortune")
	public String fortune(HttpSession session, Model model) {
		
		String fortune = (String) session.getAttribute("fortune");
		
		model.addAttribute("result", fortune);
		
		return "fortune.jsp";
	}
}
