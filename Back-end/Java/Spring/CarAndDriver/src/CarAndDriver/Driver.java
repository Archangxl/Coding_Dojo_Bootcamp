package CarAndDriver;

public class Driver extends Car {
	private int drive = 1;
	private int boost = 3;
	private int refuel = 2;
	
	public void getDrive() {
		if (this.gas < 1) {
			System.out.printf("\nYour car has %s fuel. You have to refuel your car!");
		} else {
			this.gas -= this.drive;
			System.out.printf("\nYour gas level is %s!", super.getGasLevel());
		}
	}
	
	public void getBoost() {
		if (this.gas < 4) {
			System.out.printf("\nYour car has %s fuel! You have to refuel before you can use boost!", super.getGasLevel());
		} else {
			this.gas -= this.boost;
			System.out.printf("\nYour gas level is %s!", super.getGasLevel());
		}
	}
	
	public void getRefuel() {
		if(this.gas > 8) {
			System.out.printf("\nYour car has %s fuel. You must get your fuel below 8 before you can refuel again!", super.getGasLevel());
		}
			this.gas += this.refuel;
			System.out.printf("\nYour gas level is %s!", super.getGasLevel());
	}
}
