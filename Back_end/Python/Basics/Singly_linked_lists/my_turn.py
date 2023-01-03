class Index:

    def __init__(self, index):
        self.index = index
        self.next_index = None

class Make_List:

    def __init__(self):
        self.index_0 = None

    def add_index_to_the_front_of_the_list(self, val):
        index_getting_added = Index(val)
        current_index_0 = self.index_0
        index_getting_added.next_index = current_index_0
        self.index_0 = index_getting_added

        return self

    def add_index_to_the_back_of_the_list(self, val):

        if self.index_0 == None:
            self.add_index_to_the_front_of_the_list(val)
            return self

        index_getting_added = Index(val)
        current_index_0 = self.index_0

        while (current_index_0.next_index != None):
            current_index_0.next_index = current_index_0.next_index
        current_index_0 = index_getting_added

        return self

    def print_list(self):
        index_zero = self.index_0
        while (index_zero.next_index != None):
            print(index_zero.value)
            index_zero = index_zero.next_index
        return self

list = Make_List()
list.add_index_to_the_back_of_the_list("hello").print_list()



