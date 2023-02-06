package com.alex.DojosAndNinjas.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.alex.DojosAndNinjas.models.Dojo;
import com.alex.DojosAndNinjas.models.Ninja;
import com.alex.DojosAndNinjas.services.DojoService;
import com.alex.DojosAndNinjas.services.NinjaService;



@Controller
public class NinjaController {

	@Autowired
	private NinjaService ninjaS;
	@Autowired
	private DojoService dojoS;
	
	@GetMapping("/ninjas/new")
	public String displayNinjaCreate(Model model, @ModelAttribute("ninja")Ninja ninja) {
		model.addAttribute("dojo", dojoS.allDojos());
		return "NewNinja.jsp";
	}
	
	@PostMapping("/create/ninja")
	public String createNinjaC(@ModelAttribute("ninja")Ninja ninja) {
			ninjaS.createNinja(ninja);
			return "NewNinja.jsp";
	}
	@GetMapping("dojo/new")
	public String displayDojoCreate(Model model, @ModelAttribute("dojos") Dojo dojo) {
		
		return "NewDojo.jsp";
	}
	@PostMapping("/create/dojo")
	public String createDojoC(@ModelAttribute("dojo")Dojo dojo) {
		dojoS.createDojo(dojo);
		return "NewDojo.jsp";
	}
}
	
