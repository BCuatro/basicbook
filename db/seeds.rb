# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Friend.delete_all
Post.delete_all
Comment.delete_all
Like.delete_all


# Users

blackpanther = User.create!(username:"BlackPanther", first_name: "Chadwick", last_name: "Boseman", email: "kingchalla@wakanda.com", password: "wakanda", gender: "He/Him", bio: "Wakanda Forever!", location: "Oakland,CA",birth_date:"1988-03-28")
spiderman = User.create!(username:"Spiderman", first_name: "Peter", last_name: "Parker", email: "daspiderman@webmail.com", password: "zendaya", gender: "He/Him", bio: "With great powers come great responsiblity.", location: "Queens, NY", birth_date:"2001-08-10")
storm = User.create!(username:"Storm", first_name: "Ororo", last_name: "Munroe", email: "themightystorm@xmen.com", password: "thunderstorm", gender: "She/Her", bio: "You dare confront a goddess!", location: "X-Mansion, NY", birth_date:"1989-04-17")
buzzlightyear = User.create!(username:"BuzzSoFresh", first_name: "Buzz", last_name: "LightYear", email: "BLight23@starcommand.com", password: "jessie", gender: "He/Him", bio: "To Infinity and Beyond", location: "Queens, NY", birth_date:"1995-11-22")
spiderham = User.create!(username:"Spiderham", first_name: "Peter", last_name: "Porker", email: "mrspiderham@webmail.com", password: "oinkoink", gender: "He/Him", bio: "Half Spider, Half Ham, 100% Amazing.", location: "Earth-8311", birth_date:"1983-01-07")
msmarvel= User.create!(username:"MsMarvel", first_name: "Kamala", last_name: "Khan", email: "msmarvel@youngavengers.com", password: "captainmarvel", gender: "She/Her", bio: "Embiggen!!!", location: "Jersey City, NJ", birth_date:"2001-12-10")
phoenix = User.create!(username:"Phoenix", first_name: "Jean", last_name: "Grey-Summer", email: "Jgreysummer@xmen.com", password: "phoenix", gender: "She/Her", bio: "Hope rises like a phoenix from the ashes of shattered dreams.", location: "Winterfell", birth_date:"2005-04-17")
staticshock = User.create!(username:"StaticShock", first_name: "Virgil", last_name: "Hawkins", email: "staticshock@dc.com", password: "electricity", gender: "He/Him", bio: "Don't be static, shock the system.", location: "Dakota City", birth_date:"2000-09-23")

#Post

post1= Post.create!(author_id: blackpanther.id, profile_id: blackpanther.id, post: "The very first post on basicbook")
post2= Post.create!(author_id: storm.id, profile_id: blackpanther.id, post: "I need to go back to wakanda, its so beautiful")
post3= Post.create!(author_id: spiderman.id, profile_id: staticshock.id, post: "Yo SS what are you doing this weekend")
post4= Post.create!(author_id: storm.id, profile_id: msmarvel.id, post: "Gurrlll your new series is amazing!!!!")
post5= Post.create!(author_id: buzzlightyear.id, profile_id: buzzlightyear.id, post: "Basicbook is great! I need to tell Woody about this.")
post6= Post.create!(author_id: phoneix.id, profile_id: phoenix.id, post: "X-men are hosting a charity event next week.  Everyone is invited!" )
post7= Post.create!(author_id: staticshock.id, profile_id: blackpanther.id, post: "When is the next training session?  You may have won last time but I'll definitely get you this time.")
post8= Post.create!(author_id: spiderham.id, profile_id: spiderham.id, post: "Who is down for 2 vs 2 basketball game?")

#Comments

comment1 = Comment.create!(author_id:spiderman.id, post_id:post1.id, body:"You may have the very first post BP, but I have the very first comment 😃 ")
comment2 = Comment.create!(author_id:staticshock.id, post_id:post8.id, body:"I'm down ")
comment3 = Comment.create!(author_id:msmarvel.id, post_id:post8.id, body:"Me too!! ")
comment4 = Comment.create!(author_id:spiderman.id, post_id:post8.id, body:"Count me in")
comment5 = Comment.create!(author_id:phoneix.id, post_id:post4.id, body:"Yassss bada**!! ")
comment6 = Comment.create!(author_id:blackpanther.id, post_id:post2.id, body:"You are always welcome back 😊 ")
comment7 = Comment.create!(author_id:blackpanther.id, post_id:post7.id, body:"Whenever you want to get beat again")
comment8 = Comment.create!(author_id:spiderham.id, post_id:post1.id, body:"You may have the very first post, but I'm the very first pig on basicbook")

#Likes

like1 = Like.create!(user_id: spiderman.id , likeable_id:post1.id, likeable_type: "Post")
like2 = Like.create!(user_id: spiderham.id, likeable_id: post1.id, likeable_type: "Post")
like3 = Like.create!(user_id: storm.id, likeable_id: post1.id, likeable_type: "Post")
like4 = Like.create!(user_id: blackpanther.id, likeable_id:comment1.id, likeable_type:"Comment")
like5 = Like.create!(user_id: blackpanther.id , likeable_id: comment8.id, likeable_type:"Comment")
like6 = Like.create!(user_id: blackpanther.id, likeable_id: post6.id, likeable_type: "Post")
like7 = Like.create!(user_id: storm.id, likeable_id: post6.id, likeable_type: "Post")
like8 = Like.create!(user_id: staticshock.id , likeable_id:post5.id, likeable_type: "Post"

#Friends

friend1 = Like.create!(user_id: blackpanther.id , friend_id: storm.id, friendship_status: "accepted")
friend2 = Like.create!(user_id: spiderman.id , friend_id: blackpanther.id, friendship_status: "accepted")
friend3 = Like.create!(user_id: staticshock.id , friend_id: blackpanther.id, friendship_status: "accepted")
friend4 = Like.create!(user_id: spiderman.id , friend_id: msmarvel.id, friendship_status: "accepted")
friend5 = Like.create!(user_id: spiderman.id , friend_id: staticshock.id, friendship_status: "accepted")
friend6 = Like.create!(user_id: storm.id , friend_id: phoenix.id, friendship_status: "accepted")
friend7 = Like.create!(user_id: blackpanther.id, friend_id: buzzlightyear.id, friendship_status: "accepted")
friend8 = Like.create!(user_id: spiderham.id, friend_id: blackpanther.id, friendship_status: "pending")

# ProfileImages

file1 = File.open("https://metabook-pro.s3.amazonaws.com/Black-Panther.png")
file2 = File.open("https://metabook-pro.s3.amazonaws.com/SpideyProfilePic.png")
file3 = File.open("https://metabook-pro.s3.amazonaws.com/Fearless_Storm.png")
file4 = File.open("https://metabook-pro.s3.amazonaws.com/buzzprofile.png")
file5 = File.open("https://metabook-pro.s3.amazonaws.com/spiderham_profile.jpeg")
file6 = File.open("https://metabook-pro.s3.amazonaws.com/msmarvelprofile.png")
file7 = File.open("https://metabook-pro.s3.amazonaws.com/Jean-Grey-Phoenix-2.png")
file8 = File.open("https://metabook-pro.s3.amazonaws.com/static-shock.png")

blackpanther.profile_photo.attach(io:file1, filename: "Black-Panther.png")
spiderman.profile_photo.attach(io: file2, filename: "SpideyProfilePic.png")
storm.profile_photo.attach(io: file3, filename: "Fearless_Storm.png")
buzzlightyear.profile_photo.attach(io: file4, filename: "buzzprofile.png")
spiderham.profile_photo.attach(io: file5, filename: "spiderham_profile.jpeg")
msmarvel.profile_photo.attach(io: file6, filename: "msmarvelprofile.png")
phoenix.profile_photo.attach(io: file7, filename: "ean-Grey-Phoenix-2.png")
staticshock.profile_photo.attach(io: file8, filename: "static-shock.png")


#CoverImages
file9 = File.open("https://metabook-pro.s3.amazonaws.com/BPcover.jpeg")
file10 = File.open("https://metabook-pro.s3.amazonaws.com/SMpic2.png")
file11 = File.open("https://metabook-pro.s3.amazonaws.com/stormcover.png")
file12 = File.open("https://metabook-pro.s3.amazonaws.com/lightyearcover.jpeg")
file13 = File.open("https://metabook-pro.s3.amazonaws.com/spiderham_cover.png")
file14 = File.open("https://metabook-pro.s3.amazonaws.com/msmarvelcover.png")
file15 = File.open("https://metabook-pro.s3.amazonaws.com/jeancover.png")
file16 = File.open("https://metabook-pro.s3.amazonaws.com/static-shockcover.png")

blackpanther.cover_photo.attach(io: file9, filename: "BPcover.jpeg")
spiderman.cover_photo.attach(io: file10, filename: "SMpic2.png")
storm.cover_photo.attach(io: file11, filename: "stormcover.png")
buzzlightyear.cover_photo.attach(io: file12, filename: "lightyearcover.jpeg")
spiderham.cover_photo.attach(io: file13, filename: "spiderham_cover.png")
msmarvel.cover_photo.attach(io: file14, filename: "msmarvelcover.png")
phoenix.cover_photo.attach(io: file15, filename: "jeancover.png")
staticshock.cover_photo.attach(io: file16, filename: "static-shockcover.png")

#PostImages

file17 = File.open("https://metabook-pro.s3.amazonaws.com/wakanda.png")
file18= File.open("https://metabook-pro.s3.amazonaws.com/xmencharity.png")

post2.post_photo(io: file17, filename: "wakanda.png")
post6.post_photo(io: file18, filename: "xmencharity.png")


