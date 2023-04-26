package Zookeeper;

public class Gorilla extends Mammals {
	public void throwSomething() {
		this.energy-=5;
		System.out.printf("\nGorilla threw a chair! Its energy is now at %s!", super.displayEnergy());
	}
	public void eatBananas() {
		this.energy += 10;
		System.out.printf("\nGorilla gobbled down some Bananas! Its energy is now at %s!", super.displayEnergy());
	}
	public void climb() {
		this.energy -= 10;
		System.out.printf("\nGorilla climbed! Its energy is now at %s!", super.displayEnergy());
	}
}
