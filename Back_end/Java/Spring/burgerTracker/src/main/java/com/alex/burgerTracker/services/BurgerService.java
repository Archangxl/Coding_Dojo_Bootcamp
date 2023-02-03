package com.alex.burgerTracker.services;

import java.util.List;
import java.util.Optional;

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
	
	public Burger findBurger(Long id) {
		Optional<Burger> burger = burgerRepository.findById(id);
		if (burger.isPresent()) {
			return burger.get();
		} else {
			return null;
		}
	}
	
	public Burger updateBurger(Burger burger) {
		return burgerRepository.save(burger);
	}
}
