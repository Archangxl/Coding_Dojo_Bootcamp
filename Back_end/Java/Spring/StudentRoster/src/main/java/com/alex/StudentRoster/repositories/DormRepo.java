package com.alex.StudentRoster.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.alex.StudentRoster.models.Dorm;

@Repository
public interface DormRepo extends CrudRepository<Dorm, Long> {
	List<Dorm> findAll();
}
