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
Topic.create(concept: "Averages", 
             review: "To find the average of a set of numbers, add the numbers together, and divide by how many numbers you have. Remember that you can also find the sum of the values by multiplying the average by how many numbers exist.",
             examples: ["The average of 5 and 9 is 7", "The average of 4, 7, and 13 is 18", "If the average of 4 numbers is 6, their sum is 24"],
             completed: false)
Topic.create(concept: "Percents",
             review: "Percents are a measure of an amount of the total. In order to work with percents, you must first convert them to either a percent or a fraction.",
             examples: ["30% can be written as 0.30 or 30/100", "5% can be written as 0.05 or 5/100"],
             completed: false)