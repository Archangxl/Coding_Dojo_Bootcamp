class User:

    def __init__(self, name):
        self.name = name
        self.Bank_accounts = {}
    def make_a_new_account(self, account_name):
        self.Bank_accounts[account_name] = BankAccount(account_name)
        return self
    
    def make_a_deposit(self, amount, account_name):
        self.Bank_accounts[account_name].deposit(amount, self.name)
        return self
    def make_withdrawal(self, amount, account_name):
        self.Bank_accounts[account_name].withdraw(amount, self.name)
        return self
    
    def display_user_balance(self):
        print(self.name)
        for i in self.Bank_accounts:
            self.Bank_accounts[i].display_account_info(self.name)
        return self
    
    def transfer_money(self, amount, user_account_name, other_user, other_user_account_name):
        self.Bank_accounts[user_account_name].withdraw(amount, self.name)
        other_user.make_a_deposit(amount, other_user_account_name)
        return self



class BankAccount:

    accounts = []

    def __init__(self, account_name, int_rate=0.02, balance=0):
        self.int_rate = int_rate
        self.balance = balance
        self.account_name = account_name
        BankAccount.accounts.append(self)
    def deposit(self, amount, name):
        self.balance += amount
        print(f"{name} your new account balance is ${self.balance}.")
        return self 

    def withdraw(self, amount, name, fee=5):
        if (self.balance - amount) > 0:
            self.balance -= amount
            print(f"Here is your ${amount}! {name}'s new account balance is ${self.balance}.")
            return self
        else:
            print(f"{self.name} you have insufficient funds! We are now charging your account a fee of ${fee} for overcharging your account.")
            self.balance -= fee
            return self

    def display_account_info(self, name):
        print(self.account_name)
        print(f"{name}'s account balance is ${self.balance}.")
        return self

    def yield_interest(self, name):
        if self.balance > 0:
            sum = self.balance * self.int_rate
            self.balance += sum
            return self
        else: 
            print(f"{name} your accounts current balance is {self.balance}! If your account balance is less than $0.01 you won't be able to yield your interest rate.")
    
    @classmethod
    def printInstances(cls):
        print(f"Your account balance is ${cls.balance}.")
        print(f"Your account interest rate is {cls.int_rate * 100}%.")
        return cls

John = User("John")

John.make_a_new_account("Checking").make_a_deposit(100, "Checking").make_a_new_account("Savings").make_a_deposit(100, "Savings")

Bill = User("Bill").make_a_new_account("Checking").make_a_deposit(100, "Checking")

John.transfer_money(1 ,"Savings", Bill, "Checking")