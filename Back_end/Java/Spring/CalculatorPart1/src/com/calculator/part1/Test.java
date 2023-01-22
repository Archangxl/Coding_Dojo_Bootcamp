package com.calculator.part1;

public class Test {

	public static void main(String[] args) {
		Calculator cal = new Calculator();
		cal.setOperandOne(10.5);
		cal.setOperator("+");
		cal.setOperandTwo(5.2);
		cal.performOperation();
		cal.getResults();
		
		Calculator calConstructor = new Calculator(10.5, "+", 5.2);
		calConstructor.performOperation();
		calConstructor.getResults();
		

	}

}
