package com.alex.safeTravels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alex.safeTravels.models.Expense;
import com.alex.safeTravels.repositories.ExpenseRepo;

@Service
public class ExpenseService {
	
	private final ExpenseRepo ep;
	
	public ExpenseService(ExpenseRepo ep) {
		this.ep = ep;
	}
	
	public List<Expense> allExpenses() {
		return ep.findAll();
	}
	
	public Expense createExpense(Expense expense) {
		return ep.save(expense);
	}
	
	public Expense findExpense(Long id) {
		Optional<Expense> expense = ep.findById(id);
		if (expense.isPresent()) {
			return expense.get();
		} else {
			return null;
		}
	}
	
	public Expense updateExpense(Expense expense) {
		return ep.save(expense);
	}
	
	public Expense deleteExpense(Long id) {
		Optional<Expense> expense = ep.findById(id);
		if (expense.isPresent())  {
			ep.deleteById(id);
		} else {
			System.out.println("error");
		}
		return null;
	}
	
}
