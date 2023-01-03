#1. Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

#1a. Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ]
x[1][0] = 15
#1b. Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]['last_name'] = "Bryant"
#1c. In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0] = "Andres"
#1d. Change the value 20 in z to 30
z[0]["y"] = 30


#2 Iterate Through a List of Dictionaries
def iterateDictionary(dictionary):
    full_name = 0
    for i in range(0,len(dictionary)):
        for key, val in dictionary[i].items():
            if key == 'first_name':
                full_name = key + " - " + val
            elif key == 'last_name':
                full_name += ", " + key + " - " + val
        print(full_name)

students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

call_iterateDictionary = iterateDictionary(students)
print(call_iterateDictionary)

#3. Get Values From a List of Dictionaries
#Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, the function prints the value stored in that key for each dictionary.

def iterateDictionarytwo(dictionary):
    for i in range(0,len(dictionary)):
        for key, val in dictionary[i].items():
            if key == 'first_name':
                print(val)
    for i in range(0,len(dictionary)):
        for key, val in dictionary[i].items():
            if key == 'last_name':
                print(val)
call_iterateDictionarytwo = iterateDictionarytwo(students)
print(call_iterateDictionarytwo)

#4. Iterate Through a Dictionary with List Values
#Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list.

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def iterateDictionaryThree(dictionary,item1,item2):
    itemOneCount = 0
    itemTwoCount = 0

    for i in range(0,len(dictionary[item1])):
        itemOneCount+=1
    print(itemOneCount, item1.upper())
    for i in range(0,len(dictionary[item1])):
        print(dictionary[item1][i])
    
    print("")

    for i in range(0,len(dictionary[item2])):
        itemTwoCount+=1
    print(itemTwoCount, item2.upper())
    for i in range(0,len(dictionary[item2])):
        print(dictionary[item2][i])

    
call_iterateDictionaryThree = iterateDictionaryThree(dojo, "locations", "instructors")
print(call_iterateDictionaryThree)