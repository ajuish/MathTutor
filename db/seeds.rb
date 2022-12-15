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
             examples: ['The average of 5 and 9 is 7','The average of 4, 7, and 13 is 18", "If the average of 4 numbers is 6, their sum is 24'],
             completed: false)
Topic.create(concept: "Percents",
             review: 'Percents measure an amount of the total. In order to work with percents, you must first convert them to either a percent or a fraction. When you see the word "of", think multiply. ',
             examples: ['30% can be written as 0.30 or 30/100', '5% can be written as 0.05 or 5/100'],
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