package com.abstr.art;
import java.util.ArrayList;

public class Museum {

	public static void main(String[] args) {
		Painting oakTree = new Painting("John", "Big Oak", "A painting of an oak tree", "Watercolor");
		Painting spruceTree = new Painting("Jane", "Big Spruce", "A painting of an oak tree", "Watecolor");
		Painting darkOak = new Painting("Johnny", "Big DarkOak", "A painting of a dark oak tree", "Watercolor");
		
		Sculpture dog = new Sculpture("John", "Dog", "A sculpture of my dog", "Clay");
		Sculpture cat = new Sculpture("Jane", "Cat", "A sculpture of my cat", "Clay");
		
		ArrayList<Art> Museum = new ArrayList<Art>();
		Museum.add(spruceTree);
		Museum.add(oakTree);
		Museum.add(darkOak);
		Museum.add(cat);
		Museum.add(dog);
		
		for(Art exhibits : Museum) {
			exhibits.viewArt();
		}
	}

}
