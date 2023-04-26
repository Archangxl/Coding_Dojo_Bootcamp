"""
1. Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).

"""
array = []
def countdown(num):
    for i in range(-1,num,1):
        array.append(num)
        num-= 1
    return array
count = countdown(10)
print(count)
"""
2. Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.

"""
def receive(arr):
    for i in range(arr[0],arr[1]):
        print(arr[0])
        return arr[1]
array = [1,2]
call_receive = receive(array)
print(call_receive)
"""
3. First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.

"""
def first_plus_last(arr):
    first = arr[0]
    last = arr[len(arr) - 1]
    return first + last
call_first_plus_last = first_plus_last([1,2,3,4,5])
print(call_first_plus_last)
"""
4. Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False

"""
def values_greater_than_second(arr):
    num = arr[1]
    array = []
    for i in range(arr[0],arr[len(arr)-1]):
        if(arr[i] > num):
            array.append(arr[i])
            i+=1
    if len(array)-1 < 2:
            return False
    else:
        return array
call_values_greater_than_second = values_greater_than_second([1,2,3,4,5,6,7,8,9,10])
print(call_values_greater_than_second)
"""
5. This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.

"""
def this_length_than_second(size,value):
    array = []
    for i in range(0,size):
        array.append(value)
        i+=1
    return array
call_this_length_than_second = this_length_than_second(10,11)
print(call_this_length_than_second)
