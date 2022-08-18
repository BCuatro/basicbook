# README

Basicbook is a social media clone  of the popular website Facebook.  Basicbook allows people to sign up and connect with other people all around the world.  Users would have access to their own profile page, which they could add pictures and inforomation about themseleves.   Users would be able to add and remove friends, and also be able to post and comment on their friend's walls.  The miminalistic approach to the interface would make it more user friendly and also allow their personality to shine 

Link: https://metabook2.herokuapp.com/

## Features

### User Auth:
Users can signup and log into Basicbook.  The initial website will direct users to the login splash page where they could sign in.  If a user needs to signup they can click the "Create New Acount" button a the signup form modal will appear. If a user inputs invalid information into the forms,  credentials errors.  Once the user successfully logs in, they will be redirected to their home page. Only users that successfully logs in will have access to the features on basicbook. 

### Profile:
Users will have their own profile page which they can customize by adding a profile picture, a cover picture, and information about themseleves. The profile page will contain 1) Navigation bar, 2) Profile header which contains a profile picture. cover page picture, name, and username 3) user's information, 4) User's friend list, 5) new post form, 6) User's post wall, where other users can submit posts.  All profile and cover pictures are uploaded and stored on AWS S3

### Homepage/Newsfeed:
Users will have a homepage that they are redirected to when they log in.  The homepage includes a newsfeed of other users posts and a sponserhip certain about the creator of basicbook.  

### Posts/Comments:    
Users will have the option to post on their wall or their friend's wall.  Users also have the option to upload a photo in their posts. Users would have the ability to add comments to posts, or to like a post.  Posts and comments have full CRUD abilities.  Only the author's of a post and/or comment will have the capability to delete or update the post or comment.  

### Friends:    
Users would be able to add friends through making a friends request.  Users will have the option to accept or deny friend requests.  If a user accepts the request, the requestor and requestee will become friends.  If the user decides to decline a request, then the requestor will not become their friend

### Search:    
A search bar will be available to users on their navigation bar located at the top of their screen.  Users would be able to search for other users by their first name, last name or username.  

### Like:
Users can like and unlike posts
