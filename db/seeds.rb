# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# User.create(email: 'alex@gmail.com', password: 'abcd1234')
# User.create(email: "jo@gmail.com", password: 'password')

puts 'Destroying seeds...'
Topic.destroy_all

puts 'Seeding topics...'
Topic.create(concept: 'Order of Operations',
             review: 'Remember to solve in order of PEMDAS!',
             examples: ['PARENTHESES: simplify anything within () first.', 'EXPONENTS: simplify any exponents second', 'MULTIPLICATION/DIVISION: these happen in order from left to right', 'ADDITION/SUBTRACTION:   also work from left to right'
            ],
             completed: false)
Topic.create(concept: 'Systems of Equations',
             review: 'When solving systems of equations with 2 variables, our goal is to first change our problem so that only one variable remains. We can accomplish using one of two methods - substitution or elimination.',
             examples: ['SUBSTITUTION: First, choose one of the equations, and then solve in terms of one variable.Then substitute the new expression into the other equation and solve. Plug your result into one of the original equations to find the other variable.', 'ELIMINATION: Remember that you can multiply both sides of an equation by the same number. Therfore we can multiply one or both equations in order to make one of the variables have the same coefficient but opposite sign. We can then add the two equations together to cancel out one of the variables and solve.  Plug the result back into one of original equations to find the other variable', 'When solving systems of equations, which method is used is frequently determined by the problem.  If it is easy to separate a variable, use substitution, otherwise use elimination; however, all equations can be solved by either method.', 'For the practice problems, write your answer as an ordered pair: (x,y)'],
             completed: false)
Topic.create(concept: 'Averages', 
             review: 'To find the average of a set of numbers, add the numbers together, and divide by how many numbers you have. Remember that you can also find the sum of the values by multiplying the average by how many numbers exist.',
             examples: ['The average of 5 and 9 is 7','The average of 4, 7, and 13 is 18.', 'If the average of 4 numbers is 6, their sum is 24'],
             completed: false)
Topic.create(concept: "Percents",
             review: 'Percents are used to measure a proportion of the total amount. In order to work with percents, it is easiest to first convert them into decimals. Think of 100% as the starting amount.  Therefore, when we see percent increase or decrease, adjust from the initial 100% to find the new percentage of the original amount. When you see the word "of", think multiply. When a question asks for the total percent increase or decrease find the total change divided by the original amount and convert the decimal into a percentage.',
             examples: ['30% can be written as 0.30', '5% can be written as 0.05', '25% of 12 written as an expression is 0.25(12) = 3', '50% more than 30 is equivalent to 150% of 30 or 1.5(30) = 45'],
             completed: false)
Topic.create(concept: 'One-Step Word Problems',
           review: 'When working through word problems, practice breaking down and writing out the equation as you read it instead of skimming the entire problem and trying to figure it out after. Generally, the verb in a word problem can be replaced with an equal sign - everything before the verb should be written on one side of the equation, and everything after written on the other side. It is important to recognize keywords that represent mathematical operations. A few of these keywords and their operations are listed below.',
           examples: ['ADDITION : more than, increased by, greater than, exceeds',
           'SUBTRACTION : decreased by, less than (reverse), fewer than (reverse), subtracted from (reverse)',
           'MULTIPLICATION : times, of',
           'DIVISION : per, ratio'],
            completed: false)
Topic.create(concept:'Two-Step Word Problems',
             review: 'As word problems become more complicated, it\'s easy to lose track of your information.  Take a moment after reading each sentence and assess the three things listed below:',
             examples:['Is there any important information?', 'What can I figure out from just this sentence?', 'How can I put this information together with what I gathered from previous sentences?', 'Try to write out the equation(s) as you read through the problem.'],
             completed: false)

puts 'Seeding problems...'

# Order of Operations
Problem.create(question: '3 + 5*4',
               answer: '23',
               solution: ['3 + 20 = 23'],
               topic_id: 1)
Problem.create(question: '5(8 - 2) + 4',
               answer: '34',
               solution: ['5(6) + 4 = 30 + 4 = 34'],
               topic_id: 1)
Problem.create(question: '6*7 - 2(12 - 4)',
               answer: '26',
               solution: ['6*7 - 2(8) = 42 - 16 = 26'],
               topic_id: 1)
Problem.create(question: '2(3)^3 - 9',
               answer: '45',
               solution: ['2(27) - 9 = 54 - 9 = 45'],
               topic_id: 1)
Problem.create(question: '3(5 + 1) - 6(7-5)',
               answer: '6',
               solution: ['3(6) - 6(2) = 18 - 12 = 6'],
               topic_id: 1)

# Systems of Equations
Problem.create(question: 'x - 2y = 6 <---> 2x + 3y = 32',
               answer: '(10,2)',
               solution: ['Hint: use substitution, solve for x'],
               topic_id: 2)
Problem.create(question: '3x - y = 13 <---> 2x + y = 12',
               answer: '(5,2)',
               solution: ['Hint: use elimination, add the equations together to get rid of y'],
               topic_id: 2)
Problem.create(question: '4x + 3y = 14 <---> 2x + 5y = 14',
               answer: '(2,2)',
               solution: ['Hint: use elimination, multiply the second equation by -2 and add the equations together to get rid of x'],
               topic_id: 2)
Problem.create(question: '3x + 5y = 25 <---> 2x - 3y = 4',
               answer: '(5,2)',
               solution: ['Hint: use elimination, both equations must be multiplied so that one of the variables has the same coefficient but opposite sign.'],
               topic_id: 2)
Problem.create(question: '6x + 5y = 39 <---> 7x - y = 25',
               answer: '(4,3)',
               solution: ['Hint: using elimination, we can multiply the second equation by 5 anad add the equations togther to get rid of x. Otherwise, we could also solve for y in the second equations and substitute into the first.'],
               topic_id: 2)

# Average problems
Problem.create(question: 'What is the average of 21, 27, 35, and 17?',
               answer: '25',
               solution: ['(21 + 27 + 35 + 17)/4 = 25'],
               # user_id: nil,
               topic_id: 3
               )
Problem.create(question: 'The average of 5 numbers is 20. What is their sum?',
               answer: '100',
               solution: ['Since the sum divided by 5 is 20, when we multiple 20*5 we can find the sum which is 100'],
               topic_id: 3)
Problem.create(question: 'The average of 4 numbers is 15. If the first three numbers are 12, 18, and 20 respectively, what is the last number?',
               answer:'10',
               solution:['We can find the sum of the numbers by multiplying 15*4 = 60. Since the sum is 60, we can now write the following equation to solve: 12 + 18 + 20 + x = 60  which results in 50 + x = 60. Therefore, our last number would be 10.'],
               topic_id: 3)
Problem.create(question: 'The average of 3 consecutive numbers is 10. What is the smallest number?',
               answer: '9',
               solution: ['If we say x is the smallest number, the following consecutive numbers would be x+1 and x+2.  We can then setup our equation:  (x + x + 1 + x + 2)/3 = 10.  Combining like terms, we get (3x + 3)/3 = 10.  After multiplying both sides by 3, we have 3x + 3 = 30.  Subtract 3 from both sides to get 3x = 27.  Finally divide by 3 and we have x = 9. Also, as a shortcut, when we are trying to find the average of consecutive numbers, the average must be exactly in the middle. Because of this, 10 is the middle number. Therefore, the numbers are 9, 10, and 11; 9 is the smallest number.'],
               # user_id: nil,
               topic_id: 3
               )
Problem.create(question: 'During the semester, Alex has 5 quizzes that are each graded out of 100. If he wants a final average of 90, what is the lowest possible score he can get on a quiz?',
               answer: '50',
               solution: ['We are given that the average of 5 quizzes is 90. From this information, we can find the sum of all Alex\'s scorese. Since (sum of scores)/5 = 90, we can find that the sum of all scores is 450. Next, we want to find the lowest possible score he can get on a single quiz. Assume that Alex gets the highest possible score on the other 4 quizzes. Therefore, on the other 4 quizzes, we assume Alex gets 100 - the total score for these tests would be 400.  Since the sum of all his quizzes must be 450, then 450 - 400 = 50'],
               # user_id: nil, 
               topic_id: 3
               )

# Percent Problems
Problem.create(question: 'What is 30% of 20?',
               answer: '6',
               solution: ['0.3(20) = 6'],
               topic_id: 4)
Problem.create(question: 'What is 40% more than 30?',
               answer: '42',
               solution: ['40% more than 30 is equivalent to 140% of 30 ==> 1.4(30) = 42'],
               topic_id: 4)
Problem.create(question: 'What is 60% less than 50?',
               answer: '20',
               solution: ['60% less than 50 is equivalent to 40% of 50 ==> 0.4(50) = 20'],
               topic_id: 4)
Problem.create(question: 'A number increase by 30% is 26. What is the number?',
               answer: '20',
               solution: ['30% increase is the same as saying we have 130% of the number. In other words, 130% of the original number equals 26 ==> 1.3x = 26, and we can divide by 1.3 to get 20.'],
               topic_id: 4)
Problem.create(question: '40% less than a number is 18. What is the number?',
               answer: '30',
               solution: ['40% less than a number is same as saying 60% of the number.  60% of the original number equals 18 ==> 0.6x = 18, or x = 30'],
               topic_id: 4)
Problem.create(question: 'A number increases from 40 to 50. What is the overall percent increase?',
               answer: '25%',
               solution: ['First find how much the value changed 50 - 40 = 10. Then, to find percent increase, divide the change by the original amount.  10/40 = 0.25 and change it to a percentage 0.25 * 100 = 25%'],
               topic_id: 4)
Problem.create(question:'What is the percent change from 80 to 50?',
               answer: '37.5%',
               solution: ['Here, our original amount is 80 and the new value is 50. Therefore, our change is 30. 30/80 = 0.375  or 37.5%'],
               topic_id: 4)
Problem.create(question: 'A number is increased by 20% and then decreased by 20%. What is the overall percent  change?',
               answer: '4%',
               solution: ['This is a bit of a trick question. The number is increased by 20%, and then the RESULT is decreased by 20%, which means when we decrease we\'re actually basing the percentage on the new, larger value. It actually does not matter what the original value is, so we can set it as the variable X (or use 100 if you prefer).  First we increase X by 20% ==> 1.2X and then decrease it by 20% ==>  0.8(1.2X) = 0.96X or 96% of the starting value. Because we only have 96% of the original, we lost 4% - remember to think of 100% as the starting amount'],
               topic_id: 4)

# One-Step Word Problems
Problem.create(question: 'A number increased by 12 is 27. What is the number?',
               answer: '15',
               solution:['x + 12 = 27,  x = 15'],
               topic_id: 5)
Problem.create(question: '3 less than a number is 17. What is the number?',
               answer: '20',
               solution: ['x - 3 = 17,  x = 20'],
               topic_id: 5)
Problem.create(question: 'John has 3 more candy bars than his sister. If John has 10 candy bars, how many does his sister have?',
               answer: '7',
               solution: ['Since John has 3 more candy bars than his sister, we can subtract to find his sister\'s amount. 10 - 3 = 7 candy bars', 'Although this is a relatively easy question, it does help to practice writing out the equation.  Let x equal the number of candy bars John\'s sister has.  Then, since John as 3 more than her,  x + 3 = 10.  Therefore x = 7'],
               topic_id: 5)
Problem.create(question: 'Trisha has 15 dollars less than Kim. If Trisha has 20 dollars, how much does Kim have?',
              answer: '35',
              solution:['Since Trisha has 15 less than Kim, we can simply add the 15 to her 20 to get Kim\'s total.  20 + 15 = 35', 'If we say x = Kim, then x - 15 = 20 or x = 35'],
              topic_id: 5)
Problem.create(question: '30% of a number is 12. What is the number?',
               answer: '40',
               solution: ['If you had trouble with this problem, review the percent section. 0.3x = 12, x = 40.'],
               topic_id: 5)
Problem.create(question: 'If 120 books are divided equally between 5 bookshelves, how many books are on each bookshelf?',
               answer: '24',
               solution: ['120/5 = 24'],
               topic_id: 5)

# Two-Step Word Problems
Problem.create(question: 'Joe has 5 more than 3 times as many baseball cards as Bob. If Joe has 26 cards, how many does Bob have?',
               answer: '7',
               solution: ['let x = Bob. 3x + 5 = 26, x = 7'],
               topic_id: 6)
Problem.create(question: 'Fifty students went on a field trip. Eight students were driven by their parents, and the others traveled in 7 white vans. How many students were in each van?',
               answer: '6',
               solution: ['let x = the number of students in each van. 7x + 8 = 50, x = 6'],
               topic_id: 6)
Problem.create(question: 'Jenny bought a $5 magazine as well as 5 books.  If she spent $45 in total, how much was each book?',
               answer: '8',
               solution: ['let x = price per book. 5x + 5 = 45, x = 8'],
               topic_id: 6)
Problem.create(question: 'Maria binge watched 10 episodes of her favorite tv show over the course of 7 hours.  If she took a 2 hour break for lunch, how many minutes was each episode?',
               answer: '30',
               solution:['It is important to keep track of our units when working through problems. Let x = time in hours per episode. 10x + 2 = 7, x = 0.5 hours; however, remember the question asks for the time in minutes. 0.5 hours = 30 minutes'],
               topic_id: 6)
Problem.create(question: 'Over 8 basketball, Adam took 54 shots.  If he only missed 6 shots, how many did he make on average per game?',
               answer: '6',
               solution:['let x = number of made shots per game.  8x + 6 = 54, x = 6'],
               topic_id: 6)