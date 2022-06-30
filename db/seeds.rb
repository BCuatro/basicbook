# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

blackpanther = User.create!(username:"Black Panther", first_name: "Chadwick", last_name: "Boseman", email: "kingchalla@wakanda.com", password: "wakanda", gender: "Male", bio: "Wakanda Forever!", location: "Oakland,CA")
spiderman = User.create!(username:"Spiderman", first_name: "Peter", last_name: "Parker", email: "daspiderman@webmail.com", password: "zendaya", gender: "Male", bio: "With great powers come great responsiblity", location: "NYC")

