class BankAccount:
    fee = 5
    balance = 0
    int_rate = 0.02

    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"You're new account balance is ${self.balance}.")
        return self 

    def withdraw(self, amount):
        if (self.balance - amount) > 0:
            self.balance -= amount
            print(f"Here is your ${amount}! Your new account balance is ${self.balance}.")
            return self
        else:
            print(f"Insufficient funds! We are now charging your account a fee of ${self.fee} for overcharging your account.")
            self.balance -= self.fee
            return self

    def display_account_info(self):
        print(f"Your account balance is ${self.balance}.")
        print(f"Your account interest rate is {self.int_rate * 100}%.")
        return self

    def yield_interest(self):
        if self.balance > 0:
            sum = self.balance * self.int_rate
            self.balance += sum
            return self
        else: 
            print(f"Your accounts current balance is {self.balance}! If your account balance is less than $0.01 you won't be able to yield your interest rate.")
    
    @classmethod
    def printInstances(cls, accountName):
        print(f"Your account balance is ${accountName.balance}.")
        print(f"Your account interest rate is {accountName.int_rate * 100}%.")
        return cls


accountOne = BankAccount(0.02, 300)
accountTwo = BankAccount(0.02, 200)

accountOne.deposit(20).deposit(20).deposit(20).withdraw(80).yield_interest().printInstances(accountOne)
accountTwo.deposit(30).deposit(30).withdraw(20).withdraw(20).withdraw(20).withdraw(20).yield_interest().printInstances(accountTwo)