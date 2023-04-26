package com.alex.DojosAndNinjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.alex.DojosAndNinjas.models.Dojo;

@Repository
public interface DojosRepo extends CrudRepository<Dojo, Long> {
	List<Dojo> findAll();
}
