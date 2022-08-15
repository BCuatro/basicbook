import React, {useState} from 'react';
import {useParams } from 'react-router-dom'



const NavBarExtension = ({users}) => {
    const id = parseInt(useParams().userId)

   
    const [state, setState] = useState(false)
    const changevalueonScroll = () => {
        const scrollvalue = document.documentElement.scrollTop
        if (scrollvalue > 500){
            setState(true)

        }
        else{
            setState(false)
        }
    }
    
    window.addEventListener('scroll', changevalueonScroll)
    return(
        <div className = "navbar-extension-container" id = {state ? "visible-navbar" : "hidden-navbar"}>
                    <div classname= "navbar-extension-background"></div>
                    <div className="navbar-extension">
                        <img src={!users[id]?.profile_photoUrl ? "https://metabook-dev.s3.amazonaws.com/fXyCQgj5h3ZxMpDLr4F8pA32" : users[id]?.profile_photoUrl} className="navbarext-photo" />
                    
                    
                        <div className="navbarext-extension-content">
                            <div id="navbarext-name">{users[id]?.first_name} {users[id]?.last_name} </div>
                            <div id="navbarext-username-name">@{users[id]?.username}</div>
                        </div>
                    
                    </div>
            </div>
        
    ) 
}
    

export default NavBarExtension



// !user?.profile_photoUrl ? "https://metabook-dev.s3.amazonaws.com/fXyCQgj5h3ZxMpDLr4F8pA32" : user?.profile_photoUrl