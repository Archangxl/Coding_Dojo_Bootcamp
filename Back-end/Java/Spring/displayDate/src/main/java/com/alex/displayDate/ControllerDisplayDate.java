package com.alex.displayDate;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerDisplayDate {
	
	@GetMapping("/") 
	public String dashboard() {
		return "timeDashboard.jsp";
	}
	
	@GetMapping("/date")
	public String dateTemplate(Model model) {
		
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("EEEE, MMM d, yyyy");
		String formatedDate = format.format(date);
		
		model.addAttribute("date", formatedDate);
		return "dateTemplate.jsp";
	}
	@GetMapping("/time")
	public String timeTemplate(Model model) {
		
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("h:m a");
		String formatedTime = format.format(date);
		
		model.addAttribute("time", formatedTime);
		return "timeTemplate.jsp";
	}
}
