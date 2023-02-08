package com.alex.StudentRoster.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.alex.StudentRoster.models.Dorm;
import com.alex.StudentRoster.models.Student;
import com.alex.StudentRoster.services.DormService;
import com.alex.StudentRoster.services.StudentService;

@Controller
public class MainController {
	@Autowired
	DormService dormS;
	@Autowired
	StudentService studentS;
	
	@GetMapping("/dorms")
	public String showDorms(Model model, @ModelAttribute("dorm") Dorm dorm) {
		model.addAttribute("dorms", dormS.allDorms());
		return "dorms.jsp";
	}
	@GetMapping("/dorms/new")
	public String showFormDrom(@ModelAttribute("dorm") Dorm dorm) {
		return "formDorm.jsp";
	}
	@GetMapping("/dorms/{id}")
	public String showDorm(Model model, @PathVariable("id") Long id, @ModelAttribute("student") Student student ) {
		model.addAttribute("dorm", dormS.findDorm(id));
		model.addAttribute("students", studentS.allStudents());
		return "showDorm.jsp";
	}
	@GetMapping("/students/new")
	public String showFormStudent(Model model, @ModelAttribute("student")Student student) {
		model.addAttribute("dorm", dormS.allDorms());
		return "formStudent.jsp";
	}
	
	@PostMapping("/students/create")
	public String createStudent(@Valid @ModelAttribute("student")Student student, BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("dorm", dormS.allDorms());
			return "formStudent.jsp";
		} else {
			studentS.createStudent(student);
			return "redirect:/dorms";
		}
	}
	@PostMapping("/students/update/{id}")
	public String updateStudentDorm(@ModelAttribute("student")Student student, Model model, @PathVariable("id") Long id, @RequestParam("id")Long studentID ) {
		System.out.println(studentID);
		Student findStudent = studentS.findStudent(studentID);
		Dorm findDorm = findStudent.getDorm();
		findStudent.setDorm(findDorm);
		studentS.updateStudent(findStudent);
		return "redirect:/dorms/" + id;
		
	}
	@PostMapping("/dorms/create")
	public String createDorm(@Valid @ModelAttribute("dorm")Dorm dorm, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "formDorm.jsp";
		} else {
			dormS.createDorm(dorm);
			return "redirect:/dorms";
		}
	}
	@DeleteMapping("/students/delete/{id}")
	public String deleteStudent(@PathVariable("id") Long id) {
		Student findStudent = studentS.findStudent(id);
		Dorm findDorm = findStudent.getDorm();
		studentS.deleteStudent(id);
		return "redirect:/dorms/" + findDorm.getId();
	}
	
}
