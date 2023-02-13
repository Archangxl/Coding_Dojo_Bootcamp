package com.alex.bookclub.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.alex.bookclub.models.Bookshelf;

@Repository
public interface BookshelfRepo extends CrudRepository<Bookshelf, Long> {
	List <Bookshelf> findAll();
}
