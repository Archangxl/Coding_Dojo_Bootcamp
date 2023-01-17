package Zookeeper;

public class Bat extends Mammals {
	public Bat() {
		this.energy = 300;
	}
	public void fly() {
		this.energy -= 50;
		System.out.printf("\nWoooooooosh! The bat has %s energy now!", super.displayEnergy());
	}
	public void eatHumans() {
		this.energy += 25;
		System.out.printf("\nSo- well, never-mind. The bat has %s energy now!", super.displayEnergy());
	}
	public void attackTown() {
		this.energy -= 100;
		System.out.printf("\nTown starts burning! The bat has %s energy now!", super.displayEnergy());
	}
}
