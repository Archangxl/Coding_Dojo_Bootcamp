package com.alex.fruityLoops;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class fruitController {
	@GetMapping("/")
	public String dashboard(Model model) {
		
		ArrayList<Item> item = new ArrayList<Item>();
		item.add(new Item("Kiwi", 1.5));
		item.add(new Item("Mango", 2.0));
		item.add(new Item("Goji Berries", 4.0));
		item.add(new Item("Guava", 0.75));
		model.addAttribute("items", item) ;
	
		return "fruityLoops.jsp";
	}
}
