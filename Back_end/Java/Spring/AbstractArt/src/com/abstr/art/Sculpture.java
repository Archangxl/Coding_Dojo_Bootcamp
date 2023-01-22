package com.abstr.art;

public class Sculpture extends Art {
	
	private String material;
	
	public Sculpture(String author, String title, String description, String material) {
		this.setMaterial(material);
		super.setAuthor(author);
		super.setTitle(title);
		super.setDescription(description);
	}

	@Override
	public void viewArt() {
		System.out.printf("\nAuthor: %s", super.getAuthor());
		System.out.printf("\nTitle: %s", super.getTitle());
		System.out.printf("\nDescrition: %s", super.getDescription());
		System.out.printf("\nMaterial: %s \n", this.material);
		
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	

}
