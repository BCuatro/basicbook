import React, { useState } from 'react'
import SearchFormat from './search_format';



 const Search = ({users}) => {
    
    const [searchState, setSearchState]= useState("")

    let visible
    if(searchState.replace(/ /g, '').length ===0){visible= "nonvisible"}
    
    return (
        <div className = "search-container">
            <input type="search" 
            className="searchbar" 
            placeholder='Search Basicbook' 
            onChange={((e)=>setSearchState(e.target.value))}/>

            <div className="search-results-container" >
                <ul className= "search-results" id = {visible}>
                    {
                        users
                        .filter(user => user.first_name.toLocaleLowerCase().includes(searchState.toLocaleLowerCase()) 
                        || 
                        user.last_name.toLocaleLowerCase().includes(searchState.toLocaleLowerCase()) 
                        ||
                        user.username.split(" ").join("").toLocaleLowerCase().includes(searchState.toLocaleLowerCase()))
                        .sort((a,b) => a.first_name > b.first_name ? 1 : -1)
                        .map((user) => (
                            <SearchFormat
                                key={user.id}
                                user={user}/>
                            )
                        )
                    }
                </ul>
            </div>
        </div>      
    )
 }

 export default Search