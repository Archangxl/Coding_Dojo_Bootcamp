package com.alex.DojosAndNinjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alex.DojosAndNinjas.models.Dojo;
import com.alex.DojosAndNinjas.repositories.DojosRepo;
import com.alex.DojosAndNinjas.repositories.NinjaRepo;

@Service
public class DojoService {
	
	private final DojosRepo dojoR;
	
	public DojoService(DojosRepo dojoR, NinjaRepo ninjaR) {
		this.dojoR = dojoR;
	}
	
	public Dojo findDojo(Long id) {
		Optional<Dojo> dojo = dojoR.findById(id);
		if (dojo.isPresent()) {
			return dojo.get();
		} else {
			return null;
		}
	}
	
	public Dojo createDojo(Dojo dojo) {
		return dojoR.save(dojo);
	}
	
	public List<Dojo> allDojos() {
		return dojoR.findAll();
	}
	
	
}
