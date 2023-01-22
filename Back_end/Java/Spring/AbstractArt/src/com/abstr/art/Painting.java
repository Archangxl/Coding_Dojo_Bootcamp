package com.abstr.art;

public class Painting extends Art {
	private String paintType;
	
	public Painting(String author, String title, String description, String paintType) {
		this.setPaintType(paintType);
		super.setAuthor(author);
		super.setTitle(title);
		super.setDescription(description);
	}

	@Override
	public void viewArt() {
		System.out.printf("\nAuthor: %s", super.getAuthor());
		System.out.printf("\nTitle: %s", super.getTitle());
		System.out.printf("\nDescrition: %s", super.getDescription());
		System.out.printf("\nPaint Type: %s \n", this.paintType);
		
		
	}

	public String getPaintType() {
		return paintType;
	}

	public void setPaintType(String paintType) {
		this.paintType = paintType;
	}

	
}
