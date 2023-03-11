# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: I understand OOP as  a language that uses objects in programming in order to hold the data all together with the functions so that it is separate from the rest of the code and not accessible. It relies heavily on the classes and objects concepts. As far as functional programming goes I try to remember it by thinking that it is very mathematical or logical and primarily focuses on the use of functions.

Researched answer: OOP is the most fundamental programming method used by essentially every developer at one point in their career. It is in a way considered the standard way to code in the current realm of development. OOP relies on the concepts of classes and objects. The idea is that is reusable bits of code to create individual instances of objects. OOP uses 4 main building blocks as fundamental structure being classes, objects, methods and attributes. Functional programming has a bit of a different approach where it uses pure functions to create software that is maintainable, using functions and logic to build programs. It uses functions as variables, arguments and return values which makes the code look very clean. The MAIN CONTRAST between the 2 is that FP uses immutable data and avoids shared state concepts.

Sources: https://www.educative.io/blog/object-oriented-programming
         https://www.codingdojo.com/blog/what-is-funtional-programming

2. What is the difference between a Float and an Integer in Ruby?

Your answer: The difference between floats and integers is mainly that integers are considered whole numbers with no  decimal values included. Floats include decimals. 

Researched answer: Not really a ton to add to this one, it was pretty straight forward, but for the sake of adding something.. when doing math with 2 integers in ruby the outcome will ALWAYS be an integer, if you want an accurate outcome you only have to replace one of the integers with a float and the outcome will be a float, it does not matter which number is turned into a float.
Source: https://www.theodinproject.com/lessons/ruby-basic-data-types

3. Ruby has an implicit return. What does that mean?

Your answer: In my understanding, an implicit return is kinda just giving a return without the actual use of a return statement like in Javascript where you specifically add 'return' in the statement. Ruby is more simple and just does that automatically. 

Researched answer: Statements in ruby always return that value of the LAST evaluated expression meaning you need to know the implementation of the most used method in order to know what your program is actually going to do. A method will end when one of 4 conditions are met, immediately when the threat terminates. when a raise or throw is encountered(an error essentially), when a return is encountered, or when the code ends, reaching the last value of the expression being returned
Source: https://www.itcodar.com/ruby/implicit-return-values-in-ruby.html#:~:text=Ruby%20Block%20statements%20and%20Implicit%20Returns%20The%20implicit,two%20lines%20you%20annotated%20are%20the%20last%20expression.

4. What is a block in Ruby?

Your answer: You start a block with a def and all defs have an end point. A block is essentially a segment of code that conditional logic goes into. You use | | or pipes to define your parameters. 

Researched answer: A block is a way of passing behavior rather than data to a method. Blocks are considered to be the same as methods, but do not actually belong to an object. In other programming languages blocks are usually referred to as closures, where Ruby just refers to them as blocks. A few important things to note about blocks is that they can accept arguments and return a value. They do not have their own assignments or names. They consist of chunks of code. blocks are invoked with a function or passed to a method call. to call a block inside of  a method with values, yield statements are used. Block can be called like methods from inside the method it is passed to. 
Source: https://www.geeksforgeeks.org/ruby-blocks/
        https://www.codewithjason.com/understanding-ruby-blocks/


5. How do you extract a value in a Ruby hash?

Your answer: I know that hashes are basically what other languages call classes. I'm not really sure how to explain this other than giving an example. So if i created a Hash called my_car, and gave the input of that class to be something like
my_vehicle = {color: "my vehicle is white", type: "it is a truck", year: "its a 2022, make: "Toyota Tacoma"}

I could call on the values inside of the class i created by doing the following

p my_vehicle[:color] and the return would give me the color and the description I gave for the color.  You can also call on the values in string interpolation #{} 

Researched answer: Hashes store data in the form of unique Key-value pairs, they don't use numerical index that are used in arrays for example. You can kind of think of Hashes as a dictionary type format where data is grouped by keys and the description after is basically the value associated with the key. 


Sources: https://www.rubyguides.com/2020/05/ruby-hash-methods/

## Looking Ahead: Terms for Next Week

1. Class Inheritance: this adds a concept of reusability, so if you need to create a new class but already have a class with same type of data you can make a new class within that class.

2. RSpec: RSpec is Jest for ruby... yay, very excited.

3. CRUD: Create, read, update and delete. It basically refers to the main models that all of your basic functions should have the capability of doing. 

4. Test-driven development: process of making a test case for your function, making it fail on purpose to make sure that it is working properly and then testing the validation of your functionality. the cycle of TDD is red->green->refactor

5. HTTP: hypertext transfer protocol, standard protocol for exchanging files on the internet. 
