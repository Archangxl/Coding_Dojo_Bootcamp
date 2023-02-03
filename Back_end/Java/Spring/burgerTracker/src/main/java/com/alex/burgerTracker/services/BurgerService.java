package com.alex.burgerTracker.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alex.burgerTracker.models.Burger;
import com.alex.burgerTracker.repositories.BurgerRepository;

@Service
public class BurgerService {
	private final BurgerRepository burgerRepository;
	
	public BurgerService(BurgerRepository burgerRepository) {
		this.burgerRepository = burgerRepository;
	}
	
	public List<Burger> allBurgers() {
		return burgerRepository.findAll();
	}
	
	public Burger createBurger(Burger burger) {
		return burgerRepository.save(burger);
	}
}
