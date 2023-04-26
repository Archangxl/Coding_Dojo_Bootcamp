class Index:
    def __init__(self, indexValue):
        self.indexValue = indexValue
        self.nextIndex = None

class List:
    def __init__(self):
        self.index = None

    def printValues(self):
        index = self.index
        while(index != None):
            print(index.indexValue)
            index = index.nextIndex
        return self

    def addIndexToFront(self, value):
        new_index = Index(value)
        current_index = self.index
        new_index.nextIndex = current_index
        self.index = new_index
        return self

    def addIndexToBack(self, value):
        if self.index == None:
            self.addIndexToFront(value)
            return self
        new_index = Index(value)
        index = self.index
        while(index.nextIndex != None):
            index = index.nextIndex
        index.nextIndex = new_index
        return self

    def removeIndexFront(self):
        self.index = self.index.nextIndex
        return self

    def removeIndexBack(self):
        if self.index == None:
            return self
        elif self.index.nextIndex == None:
            self.index = None
            return self
        else:
            index = self.index
            while index.nextIndex.nextIndex != None:
                index = index.nextIndex
            index.nextIndex = None
            return self

    def removeIndex(self, val):
        index = self.index
        if index == None:
            return self
        else:
            while index != None:
                if index.nextIndex.indexValue == val:
                    index.nextIndex = None
                    return self
                else:
                    print(2)
                    index = index.nextIndex
            return self


list = List()
list.addIndexToFront("/ Ken Block").addIndexToFront("World").addIndexToFront("Hello").addIndexToBack("!").removeIndexFront().removeIndexBack().removeIndex("/ Ken Block").printValues()



