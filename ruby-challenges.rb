# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# Pseudocode: create a function called isevenisodd that takes in a number as a parameter, then using the built in method num.even? create a conditional if else statement that determines if the given number is even or odd. Then using string interpolation it prints if the number is even or odd.

def is_even_is_odd num
    if num.even? 
        "#{num} is even"
    else
        "#{num} is odd"
    end
end

p is_even_is_odd(num3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# pseudocode: create a function called voweldeleter that takes in a string as a parameter. using the built in method delete give it the values that include all of the possible vowels, and have it remove them from the string, in the p convert the string to lower case so that it accounts for all of the uppercase vowels as well.

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_deleter string
    string.delete "aeiouy"
end
p vowel_deleter(beatles_album1.downcase)
p vowel_deleter(beatles_album2.downcase)
p vowel_deleter(beatles_album3.downcase)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

#Pseudocode: create a function called palindrome that takes in a string as a parameter. Using the built in method reverse, create a if else conditional statement that determines if the given string is strictly equal to the given string in reverse order, if it is then using string interpolation return yes the string is a palindrome, and if its not it will return the string is not a palindrome. edit: haha... you got me, you have to calculate for the first letter in each word to be capitalized, so i added downcase in my p when i call on the test strings.

def palindrome string
    if string == string.reverse
        "#{string} is a palindrome"
    else "#{string} is not a palindrome"
    end
end
p palindrome(palindrome_tester1.downcase)