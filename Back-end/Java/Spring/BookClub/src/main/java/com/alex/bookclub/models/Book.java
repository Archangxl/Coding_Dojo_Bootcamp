package com.alex.bookclub.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="books")
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="Title is required!")
	@Size(min=3, message="Title must be more than 3 characters!")
	private String title;
	
	@NotEmpty(message="Author is Required!")
	@Size(min=3, message="Author must be more than 3 characters!")
	private String author;
	
	@NotEmpty(message="Thoughts are Required!")
	@Size(min=3, message="Thoughts must be more than 3 characters!")
	private String thought;
	
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="bookshelf_id")
    private Bookshelf bookshelf;
    
    public Book() {}
	public Book(String title,String author,String thought,Bookshelf bookshelf) {
		this.title = title;
		this.author = author;
		this.thought = thought;
		this.bookshelf = bookshelf;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getThought() {
		return thought;
	}
	public void setThought(String thought) {
		this.thought = thought;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	@PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
	public Bookshelf getBookshelf() {
		return bookshelf;
	}
	public void setBookshelf(Bookshelf bookshelf) {
		this.bookshelf = bookshelf;
	}
	
}
