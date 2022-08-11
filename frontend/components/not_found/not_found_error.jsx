import React from 'react'
import { Link } from 'react-router-dom';



const NotFoundError= () => {
    return (
        <div className= "not-found">
            <div className= "not-found-image"><i class="fa-brands fa-searchengin fa-7x"></i></div>
            <div className= "not-found-text"> Page Could Not Be Found</div>
            <p className= "not-found-subtext">Sorry, we couldn't find that page, but we did find this Dad joke:</p>
            <p className= "not-found-subtext">When does a joke become a Dad joke...</p>
            <p className= "not-found-subtext">When it becomes apparent 🥁 😀</p>
            <Link className= "not-found-button" to={"/"}>Home</Link> 
            
        </div>
    )
}

export default NotFoundError