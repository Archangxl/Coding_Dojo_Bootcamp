import product

class Store:

    product_list = {}

    def __init__(self, name):
        self.name = name

    def add_product(self, name, new_product):
        self.product_list[f'{name}'] = new_product
        return self

    def sell_product(self, name):
        self.product_list.pop(name)
        return self
    
    def show_product_list(self):

        if len(self.product_list) == 0:
            print("Your product list is empty")
            return self
        elif len(self.product_list) > 0:
            for value in self.product_list.values():
                value.print_info()
            return self
        return self
    
    def inflation(self, percentage_increase):

        for value in self.product_list.values():
            value.update_price(percentage_increase, True)
        return self

    def set_clearance(self, category, percent_discount):

        for value in self.product_list.values():
            if value.category == category:
                value.update_price(percent_discount, False)
        return self




