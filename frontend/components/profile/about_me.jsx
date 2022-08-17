import React from 'react'


const aboutMe =(user) =>{
  const joined_date = new Date(user?.created_at)
  const birthday = new Date(user?.birth_date)
 
    return (
      
    <div className = "aboutMe-container">
      <h2 id="aboutMe-title">Intro</h2>
    
      <div className = "aboutMe-content">
        <h3 id = {!user?.bio ? "non-visible" : "biostatement" }>{user?.bio}</h3>
      
        <div className = {!user?.username ? "non-visible": "aboutMe" }id= "username"> 
          <i className="fa fa-solid fa-user-astronaut"></i>&nbsp;Username: @{user?.username}
        </div>
        <div className = {!user?.email ? "non-visible": "aboutMe" }id= "email"> 
          <i className="fa fa-thin fa-envelope"></i>&nbsp;Email: {user?.email}
        </div>
        <div className = {!user?.birth_date ? "non-visible": "aboutMe" }id= "birthday">
          <i className="fa-solid fa-cake-candles"></i>&nbsp;Birthday: {birthday.toLocaleDateString([],{month: 'long', day: 'numeric'})}
        </div>
        <div className = {!user?.gender ? "non-visible" : "aboutMe" } id="gender">
          <i className="fa fa-solid fa-peace"></i>&nbsp;My pronouns are {user?.gender}</div>
        <div className = {!user?.location ? "non-visible" : "aboutMe" }  id="locationplace">
          <i className="fa fa-thin fa-location-dot"></i> &nbsp;I live in {user?.location}
        </div>
        <div className = "aboutMe" id="joined">
          <i className="fa-solid fa-heart"></i>&nbsp;Joined Basicbook on {joined_date.toLocaleDateString([],{month: 'long', day: 'numeric', year: 'numeric' })}
        </div>   
      </div>  
   </div>
        
      )
    }

export default aboutMe