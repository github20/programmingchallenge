#Basic random number generator and bubble sort.
#Instructions: Run Randgen().
def Randgen():
    import random
    result=[]
    for i in range(100):
        result.append(random.randint(1,99))
    for i in range(100):
        for j in range(0,100-i-1):
            if result[j]>result[j+1]:
                result[j],result[j+1]=result[j+1],result[j]
    return result

#Generates the largest palindrome for the product of a number with "x" number of digits.
#Instructions: Run Palindrome(x) where x is the number of digits. Palindrome(3)=906609. Palindrome(4)=99000099.
def is_palindrome(z):
    t=str(z)
    return t==t[::-1]

def Palindrome(x):
    from itertools import product
    return max(r * s for r,s in product(range(10**x), repeat=2) if is_palindrome(r * s))
        
#Determines if two strings of letters are anagrams.
#Instructions: Run AnagramCheck(string1,string2) where string1 is the first string and string2 is the second string.
def AnagramCheck(string1,string2):
    if(sorted(string1)==sorted(string2)):
        return True
    else:
        return False
    

