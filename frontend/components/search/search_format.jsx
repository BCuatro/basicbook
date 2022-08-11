import React from 'react'

 const SearchFormat = ({user}) => {
    return (
        <div className= "search-user-container">
            {/* <img className = "search-user-photo" src={user?.profile_photoUrl ? user?.profile_photoUrl : "https://metabook-dev.s3.amazonaws.com/fXyCQgj5h3ZxMpDLr4F8pA32" } alt="" /> */}
            <div className="search-user-info">
                <div className="search-user-full-name">{user?.first_name} {user?.last_name}</div>
                <div className ="search-user-username">{user?.username}</div>
            </div>
        </div>
    )
 }

 export default SearchFormat