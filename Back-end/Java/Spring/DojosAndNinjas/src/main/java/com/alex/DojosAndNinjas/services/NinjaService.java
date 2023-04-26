package com.alex.DojosAndNinjas.services;

import org.springframework.stereotype.Service;

import com.alex.DojosAndNinjas.models.Ninja;
import com.alex.DojosAndNinjas.repositories.DojosRepo;
import com.alex.DojosAndNinjas.repositories.NinjaRepo;

@Service
public class NinjaService {
	
	private final NinjaRepo ninjaR;
	
	public NinjaService(DojosRepo dojoR, NinjaRepo ninjaR) {
		this.ninjaR = ninjaR;
	}
	
	public Ninja createNinja(Ninja ninja) {
		return ninjaR.save(ninja);
	}
	
	


}

