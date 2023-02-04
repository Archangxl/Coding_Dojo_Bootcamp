package com.alex.safeTravels.controller;

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

import com.alex.safeTravels.models.Expense;
import com.alex.safeTravels.services.ExpenseService;

@Controller
public class ExpenseController {
	@Autowired
	ExpenseService ep;
	
	@GetMapping("/")
	public String dashboard(Model model, @ModelAttribute("expense")Expense expense) {
		model.addAttribute("expenses", ep.allExpenses());
		return "dashboard.jsp";
	}
	
	@GetMapping("/view/{id}")
	public String view(@PathVariable("id") Long id, Model model) {
		  model.addAttribute("expense", ep.findExpense(id));
		  return "viewExpense.jsp";
	}
	
	@PostMapping("/create")
	public String create(@Valid @ModelAttribute("expense") Expense expense, BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("expenses", ep.allExpenses());
			return "dashboard.jsp";
		} else {
			ep.createExpense(expense);
			return "redirect:/";
		}
	}
	
	@GetMapping("/update/{id}")
	public String update(@PathVariable("id") Long id, Model model) {
		  model.addAttribute("expense", ep.findExpense(id));
		  return "updateExpense.jsp";
	}
	@PutMapping("/updating/{id}")
	public String updating(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
		if (result.hasErrors()) {
			return "updateExpense.jsp";
		} else {
			ep.updateExpense(expense);
			return "redirect:/";
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
		ep.deleteExpense(id);
		return "redirect:/";
	}
	
}
