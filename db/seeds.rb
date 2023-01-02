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
Topic.create(concept: 'Averages', 
             review: 'To find the average of a set of numbers, add the numbers together, and divide by how many numbers you have. Remember that you can also find the sum of the values by multiplying the average by how many numbers exist.',
             examples: ['The average of 5 and 9 is 7','The average of 4, 7, and 13 is 18.', 'If the average of 4 numbers is 6, their sum is 24'],
             completed: false)
Topic.create(concept: "Percents",
             review: 'Percents are used to measure a proportion of the total amount. In order to work with percents, it is easiest to first convert them into decimals. Think of 100% as the starting amount.  Therefore, when we see percent increase or decrease, adjust from the initial 100% to find the new percentage of the original amount. When you see the word "of", think multiply. When a question asks for the total percent increase or decrease find the total change divided by the original amount and convert the decimal into a percentage.',
             examples: ['30% can be written as 0.30', '5% can be written as 0.05', '25% of 12 written as an expression is 0.25(12) = 3', '50% more than 30 is equivalent to 150% of 30 or 1.5(30) = 45'],
             completed: false)

puts 'Seeding problems...'

# Average problems
Problem.create(question: 'What is the average of 21, 27, 35, and 17?',
               answer: '25',
               solution: ['(21 + 27 + 35 + 17)/4 = 25'],
               # user_id: nil,
               topic_id: 1
               )
Problem.create(question: 'The average of 3 consecutive numbers is 10. What is the smallest number?',
               answer: '9',
               solution: ['If we say x is the smallest number, the following consecutive numbers would be x+1 and x+2.  We can then setup our equation:  (x + x + 1 + x + 2)/3 = 10.  Combining like terms, we get (3x + 3)/3 = 10.  After multiplying both sides by 3, we have 3x + 3 = 30.  Subtract 3 from both sides to get 3x = 27.  Finally divide by 3 and we have x = 9','When we are trying to find the average of consecutive numbers, the average must be exactly in the middle. Because of this, 10 is the middle number. Therefore, the numbers are 9, 10, and 11; 9 is the smallest number.'],
               # user_id: nil,
               topic_id: 1
               )
Problem.create(question: 'During the semester, Alex has 5 quizzes that are each graded out of 100. If he wants a final average of 90, what is the lowest possible score he can get on a quiz?',
               answer: '50',
               solution: ['We are given that the average of 5 quizzes is 90. From this information, we can find the sum of all Alex\'s scorese. Since (sum of scores)/5 = 90, we can find that the sum of all scores is 450. Next, we want to find the lowest possible score he can get on a single quiz. Assume that Alex gets the highest possible score on the other 4 quizzes. Therefore, on the other 4 quizzes, we assume Alex gets 100 - the total score for these tests would be 400.  Since the sum of all his quizzes must be 450, then 450 - 400 = 50'],
               # user_id: nil, 
               topic_id: 1
               )

# Percent Problems
Problem.create(question: 'What is 30% of 20?',
               answer: '6%',
               solution: ['0.3(20) = 6'],
               topic_id: 2)
Problem.create(question: 'What is 40% more than 30?',
               answer: '42%',
               solution: ['40% more than 30 is equivalent to 140% of 30 ==> 1.4(30) = 42'],
               topic_id: 2)
Problem.create(question: 'What is 60% less than 50?',
               answer: '20%',
               solution: ['60% less than 50 is equivalent to 40% of 50 ==> 0.4(50) = 20'],
               topic_id: 2)
Problem.create(question: 'A number increases from 40 to 50. What is the overall percent increase?',
               answer: '25%',
               solution: ['First find how much the value changed 50 - 40 = 10. Then, to find percent increase, divide the change by the original amount.  10/40 = 0.25 and change it to a percentage 0.25 * 100 = 25%'],
               topic_id: 2)
Problem.create(question:'What is the percent change from 80 to 50?',
               answer: '37.5%',
               solution: ['Here, our original amount is 80 and the new value is 50. Therefore, our change is 30. 30/80 = 0.375  or 37.5%'],
               topic_id: 2)
Problem.create(question: 'A number is increased by 20% and then decreased by 20%. What is the overall percent  change?',
               answer: '4%',
               solution: ['This is a bit of a trick question. The number is increased by 20%, and then the RESULT is decreased by 20%, which means when we decrease we\'re actually basing the percentage on the new, larger value. It actually does not matter what the original value is, so we can set it as the variable X (or use 100 if you prefer).  First we increase X by 20% ==> 1.2X and then decrease it by 20% ==>  0.8(1.2X) = 0.96X or 96% of the starting value. Because we only have 96% of the original, we lost 4% - remember to think of 100% as the starting amount'],
               topic_id: 2)