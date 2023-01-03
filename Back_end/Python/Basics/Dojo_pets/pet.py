import ninja

class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 100

    def sleep(self):
        self.energy += 25
        return self
    def eat(self):
        self.energy += 5
        self.health += 10
        print(f"{self.energy} and {self.health}")
        return self
    def play(self):
        self.health += 5
        print(self.health)
        return self
    def noise(self, animalSound):
        print(animalSound)
        return self

class Dog(Pet):
    def __init__(self, name, type, tricks):
        super().__init__(name, type, tricks)
    def bark(self):
            super().noise("Bark")
            print("I did it!")
            return self



teal = Dog("teal", "dog", "does any command by signal")
blue = ninja.Ninja("blue", "ninja", teal, "bacon", "chicken, eggs, and fish oil")

blue.feed().walk().bathe()