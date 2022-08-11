import React, { useState } from 'react'
import SearchItem from './search_item';



 const Search = ({users}) => {
    
    const [searchState, setSearchState]= useState("")
    const handleChange=(e) =>{
        setSearchState(e.target.value)
    }

    
    const ResetSearchBar =() =>{
        setSearchState("")
        
        
    }

    let visible
    if(searchState.replace(/ /g, '').length ===0){visible= "nonvisible"}
    
    return (
        <div className = "search-container">
            <div className= "searchbar-container">
                <i class="fa fa-duotone fa-magnifying-glass"></i>

                <input type="search" 
                className="searchbar" 
                placeholder='Search Basicbook' 
                value={searchState}
                onChange={handleChange}
                />
            </div>
            

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
                            <SearchItem
                                key={user.id}
                                user={user}
                                reset={ResetSearchBar}
                                />
                            )
                        )
                    }
                </ul>
            </div>
        </div>      
    )
 }

 export default Search