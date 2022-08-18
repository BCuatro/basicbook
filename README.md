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

### Navigation Bar: 
Users will have access to their navigation bar after the login.  The navigation bar is located on the top of their screens.  The navigation bar houses the search bar, the "Return to Home" button, the notification bell, the "Go to User's Profile" button, and the logout button.  When the current user is one another user's profile, if the current user scrolls pass the user's profile header, an extension to the navigation bar will appear which shows a condense verison of the user's profile header.  

### Friends:    
Users would have the ability to add friends through friends request.  A friend request is generated by clikcing the "Add Friend" button on a user's profile.  When the friend request is generated, the "Add Friend" button turns into a "Pending Request" message on the recipient's page. The friend request will appear in the recipient's notification window.  Users has access to the notification window by clicking on the notification bell located on the navigation bar. If the user has any pending friend requests, the number of requests will appear next notification bell.  The recipient will have the option to accept or deny the friend request.  If the recipient accepts the request, the requestor and recipent will become friends.  Both user will have the ability to defriend one another.  

### Search:    
THe search bar is available to users on their navigation bar.  Users would be able to search for other users by their first name, last name or username.  

### Like:
Users will have the ability to like comments and/or post.  Once a user likes a post or comment, they will not be able to like it again.  User will be able to unlike and posts or comments that they already liked.  
