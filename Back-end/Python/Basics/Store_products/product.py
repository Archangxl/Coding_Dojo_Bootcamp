class Product:

    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category

    def update_price(self, percent_change, is_increased):
        placeholder = percent_change * self.price
        if is_increased == True:
            self.price += placeholder
            return self
        elif is_increased == False:
            self.price -= placeholder
            return self

    def print_info(self):
        print(f"The {self.name} is listed for {self.price} and is located in {self.category}.")
        return self