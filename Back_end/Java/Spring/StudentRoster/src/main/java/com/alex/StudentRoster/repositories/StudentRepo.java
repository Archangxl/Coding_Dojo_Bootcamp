package com.alex.StudentRoster.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.alex.StudentRoster.models.Dorm;
import com.alex.StudentRoster.models.Student;

@Repository
public interface StudentRepo extends CrudRepository<Student, Long> {
	List<Student> findAll();
	public default void updateDorm(Student student, Dorm dorm) {
		student.setDorm(dorm);
	}
}
