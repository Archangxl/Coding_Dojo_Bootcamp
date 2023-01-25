package com.alex.renderingJSP1;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class renderingController {
	@RequestMapping("/")
	public String index(Model model) {
		model.addAttribute("dojoName","Burbank");
		
		ArrayList<String> dojos = new ArrayList<String>();
        dojos.add("Burbank");
        dojos.add("Chicago");
        dojos.add("Bellevue");
        model.addAttribute("dojosFromMyController", dojos);
		
		return "demo.jsp";
	}
}
