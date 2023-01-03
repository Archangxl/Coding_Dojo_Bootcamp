class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, num, *nums):
        self.result += num
        for number in nums:
            self.result += number
        return self
    def subtract(self, num, *nums):
        self.result -= num
        for number in nums:
            self.result-= number
        return self
    def multiply(self, num, *nums):
        self.result *= num
        for number in nums:
            self.result*=number
        return self
    def divide(self, num, *nums):
        self.result /= num
        for number in nums:
            self.result /= number
        return self
    # your code here
# create an instance:
md = MathDojo()
# to test:
x = md.add(2).add(2,5,1,2,3,4,5).subtract(3,2).multiply(2,1,2).divide(2,2,0.5).result
print(x)

