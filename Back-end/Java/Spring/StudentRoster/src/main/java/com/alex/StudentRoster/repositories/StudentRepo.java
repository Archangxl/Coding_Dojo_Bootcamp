package com.alex.StudentRoster.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.alex.StudentRoster.models.Student;

@Repository
public interface StudentRepo extends CrudRepository<Student, Long> {
	List<Student> findAll();
}
