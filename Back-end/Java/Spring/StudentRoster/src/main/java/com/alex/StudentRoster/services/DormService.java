package com.alex.StudentRoster.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alex.StudentRoster.models.Dorm;
import com.alex.StudentRoster.repositories.DormRepo;

@Service
public class DormService {
	private final DormRepo dR;
	
	public DormService(DormRepo dR) {
		this.dR = dR;
	}
	public Dorm findDorm(Long id) {
		Optional<Dorm> dorm = dR.findById(id);
		if (dorm.isPresent()) {
			return dorm.get();
		} else {
			return null;
		}
	}
	public Dorm createDorm(Dorm dorm) {
		return dR.save(dorm);
	}
	public List<Dorm> allDorms() {
		return dR.findAll();
	}
}
