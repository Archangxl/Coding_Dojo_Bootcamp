package com.calculator.part1;

public class Calculator {
	private double operandOne;
	private double operandTwo;
	private String operator;
	private double result;
	
	public Calculator() {	
	}
	
	public Calculator(double operandOne, String operator, double operandTwo) {
		this.operandOne = operandOne;
		this.operator = operator;
		this.operandTwo = operandTwo;
	}
	
	public double performOperation() {
		if (this.operator == "+") {
			this.result = operandOne + operandTwo;
			return this.result;
		} else if(this.operator == "-") {
			this.result = operandOne + operandTwo;
			return this.result;
		} else if (this.operator == "*") {
			this.result = operandOne * operandTwo;
			return this.result;
		} else if (this.operator == "/") {
			this.result = operandOne / operandTwo;
			return this.result;
		}
		this.result = 0.000000000000000000;
		return result;
	}
	
	public void getResults() {
		System.out.println(this.result);
	}
	
	public double getOperandOne() {
		return operandOne;
	}
	public void setOperandOne(double operandOne) {
		this.operandOne = operandOne;
	}
	public double getOperandTwo() {
		return operandTwo;
	}
	public void setOperandTwo(double operandTwo) {
		this.operandTwo = operandTwo;
	}
	public String getOperator() {
		return operator;
	}
	public void setOperator(String operator) {
		this.operator = operator;
	}
	
	
}
