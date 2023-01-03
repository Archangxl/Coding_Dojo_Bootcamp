class User:
    def __init__(self, first_name, last_name, email, age):

        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print("")
        print("User Details")
        print(f"Name = {self.first_name} {self.last_name}")
        print(f"email = {self.email}")
        print(f"age = {self.age}")
        print(f"Rewards member status = {self.is_rewards_member}")
        print(f"Amount of Gold Card points = {self.gold_card_points}")
        print("")

    def enroll(self):
        if (self.is_rewards_member == True):
            print("You are already an active Rewards member!")
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
            print(f"You're rewards status is now active! You have {self.gold_card_points} gold card points in your account!")

    def spend_points(self,amount):
        if self.gold_card_points > 40:
            self.gold_card_points = self.gold_card_points - amount
            print(f"You have {self.gold_card_points} gold card points remaining!")
        else: 
            print(f"Your current gold card points total is {self.gold_card_points}. We declined your card because we prohibt card purchases that have a balance less than 40!")


john_doe = User("John", "Doe", "johndoe@email.com", 24)
jane_doe = User("Jane", "Doe", "janedoe@email.com", 22)
adam_doe = User("Adam", "Doe", "adamdoe@email.com", 13)

john_doe.enroll()
john_doe.spend_points(50)

jane_doe.enroll()
jane_doe.spend_points(80)

john_doe.display_info()
jane_doe.display_info()
adam_doe.display_info()

john_doe.enroll()

adam_doe.enroll()
adam_doe.spend_points(170)
adam_doe.spend_points(10)