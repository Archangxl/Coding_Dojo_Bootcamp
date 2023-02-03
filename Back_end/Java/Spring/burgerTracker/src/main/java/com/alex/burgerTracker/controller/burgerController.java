package com.alex.burgerTracker.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.alex.burgerTracker.models.Burger;
import com.alex.burgerTracker.services.BurgerService;

@Controller
public class burgerController {
	
	@Autowired
	BurgerService burgerService;
	
	@GetMapping("/")
	public String home(Model model, @ModelAttribute("burger") Burger burger) {
		model.addAttribute("burgers", burgerService.allBurgers());
		return "Burgers.jsp";
	}
	
	@PostMapping("/create")
	public String create(@Valid @ModelAttribute("burger") Burger burger, BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("burgers", burgerService.allBurgers());
			return "Burgers.jsp";
		} else {
			burgerService.createBurger(burger);
			return "redirect:/";
		}
	}

}
