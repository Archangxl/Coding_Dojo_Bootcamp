#1. Basic - Print all integers from 0 - 150
for i in range(151):
    print(i)

#2. Multiples of Five
for i in range(5,1001,5):
    print(i)

#3 Counting, the Dojo way
for i in range(1,101):
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5 == 0:
        print("Coding")
    else:
        print(i)


#4. Whoa. That Sucker's Huge
sum = 0
for i in range(1,500000):
    if i % 2 == 1:
        sum+=i
print(sum)

#5. Countdown by Fours
for i in range(2018,0,-4):
    print(i)

#6. Flexible Counter
lowNum = 2
highNum = 0
mult = 3
for i in range(2,10):
    if i < lowNum:
        lowNum = i
    elif i > highNum:
        highNum = i
    if i % mult == 0:
        print(i)
print(lowNum)
print(highNum)