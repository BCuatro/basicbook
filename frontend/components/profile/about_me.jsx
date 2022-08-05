import React from 'react'


const aboutMe =(user) =>{
  const joined_date = new Date(user?.created_at)
 
    return (
      
    <div className = "aboutMe-container">
      <h2 id="aboutMe-title">Intro</h2>
    
      <div className = "aboutMe-content">
      
      <h3  id = {!user.gender ? "non-visible" : "bio" }>{user?.bio}</h3>
      <p className = {!user.username ? "non-visible": "aboutMe" }id= "username"> Username: {user?.username}</p>
      <p className = {!user.gender ? "non-visible" : "aboutMe" } id="gender"> My pronouns are {user?.gender}</p>
      <p className = {!user.location ? "non-visible" : "aboutMe" }  id="location"> I live in {user?.location}</p>
      <p className = "aboutMe" id="created">Joined Basicbook on {joined_date.toLocaleDateString([],{month: 'long', day: 'numeric', year: 'numeric' })}</p>   
      </div>  
   </div>
        
      )
    }

export default aboutMe