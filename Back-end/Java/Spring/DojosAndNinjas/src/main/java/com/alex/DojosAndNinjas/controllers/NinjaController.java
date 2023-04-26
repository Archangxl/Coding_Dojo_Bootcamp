package com.alex.DojosAndNinjas.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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
		model.addAttribute("dojos", dojoS.allDojos());
		return "NewNinja.jsp";
	}
	@PostMapping("/create/ninja")
	public String createNinjaC(@Valid @ModelAttribute("ninja")Ninja ninja, BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("dojos", dojoS.allDojos());
			return "NewNinja.jsp";
		} else {
			Ninja newNinja = ninjaS.createNinja(ninja);
			Dojo homeDojo = newNinja.getDojo();
			return "redirect:/dojo/view/" + homeDojo.getId();
		}
	}
	@GetMapping("/dojo/new")
	public String displayDojoCreate(Model model, @ModelAttribute("dojo") Dojo dojo) {
		return "NewDojo.jsp";
	}
	@PostMapping("/create/dojo")
	public String createDojoC(@Valid @ModelAttribute("dojo")Dojo dojo, BindingResult result) {
		if (result.hasErrors()) {
			return "NewDojo.jsp";
		} else {
			dojoS.createDojo(dojo);
			return "redirect:/dojo/new";
		}
	}
	@GetMapping("/dojo/view/{id}")
	public String showDojo(@PathVariable("id") Long id, Model model) {
		Dojo findDojo = dojoS.findDojo(id);
		model.addAttribute("dojo", findDojo);
		return "DojoPage.jsp";
	}
}
	
