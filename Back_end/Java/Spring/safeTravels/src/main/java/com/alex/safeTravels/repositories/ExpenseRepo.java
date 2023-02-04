package com.alex.safeTravels.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.alex.safeTravels.models.Expense;
@Repository
public interface ExpenseRepo extends CrudRepository<Expense, Long> {
	List<Expense> findAll();
}
