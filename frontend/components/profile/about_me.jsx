import React from 'react'


const aboutMe =(user) =>{
    return (
      
     <div>

     <h1 id="title">About Me</h1>
     <h2>{user?.username}</h2>
     <h3>{user?.bio}</h3>
     <label>First Name: {user?.first_name}</label>
     <br />
     <label>Last Name: {user?.last_name}</label>
     <br />
     <label>Gender: {user?.gender}</label>
     <br />
     <label>Location: {user?.location}</label>
     
     
   </div>
        
      )
    }

export default aboutMe