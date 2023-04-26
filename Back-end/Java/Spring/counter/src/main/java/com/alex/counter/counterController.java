package com.alex.counter;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class counterController {
	@GetMapping("/count")
	public String counter(HttpSession session, Model model) {
		Integer currentCount = (Integer) session.getAttribute("counter");
		if (currentCount == null) {
			session.setAttribute("counter", 0);
		} else {
			session.setAttribute("counter", currentCount);
		}
		return "counter.jsp";
	}
	
	@GetMapping("/")
	public String welcome(HttpSession session, Model model) {
		Integer currentCount = (Integer) session.getAttribute("counter");
		if (currentCount == null) {
			session.setAttribute("counter", 0);
			model.addAttribute("counter", currentCount);
		} else {
			currentCount++;
			session.setAttribute("counter", currentCount);
		}
		
		return "welcome.jsp";
	}
	
	@GetMapping("/count2")
	public String welcomeTwo(HttpSession session, Model model) {
		Integer currentCount = (Integer) session.getAttribute("counter");
		if (currentCount == null) {
			session.setAttribute("counter", 0);
			model.addAttribute("counter", currentCount);
		} else {
			currentCount+=2;
			session.setAttribute("counter", currentCount);
		}
		
		return "welcome.jsp";
	}
	
	@GetMapping("/reset")
	public String rest(HttpSession session, Model model) {
		Integer currentCount = (Integer) session.getAttribute("counter");
		currentCount = 0;
		session.setAttribute("counter", currentCount);
		return "counter.jsp";
	}
	
	
}
