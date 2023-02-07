package com.alex.StudentRoster.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alex.StudentRoster.models.Student;
import com.alex.StudentRoster.repositories.StudentRepo;

@Service
public class StudentService {
	private final StudentRepo sR;
	
	public StudentService (StudentRepo sR) {
		this.sR = sR;
	}
	public Student createStudent(Student student) {
		return sR.save(student);
	}
	public Student updateStudent(Student student) {
		return sR.save(student);
	}
	public Student findStudent(Long id) {
		Optional<Student> student = sR.findById(id);
		if (student.isPresent()) {
			return student.get();
		} else {
			return null;
		}
	}
	public Student deleteStudent(Long id) {
		Optional<Student> student = sR.findById(id);
		if (student.isPresent()) {
			sR.deleteById(id);
		} else {
			System.out.println("Error");
		}
		return null;
	}
}
