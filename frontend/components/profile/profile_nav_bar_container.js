import { connect } from "react-redux";
import React from 'react';
import {useParams, withRouter} from "react-router-dom"
import { fetchUser, fetchUsers} from "../../actions/users_actions";

import Tab from "./tabs"
import { fetchFriends } from "../../actions/friends_actions";



const mapStateToProps = (state, ownProps) => {

      const user= state.entities.users[ownProps.match.params.userId]
      const users =state.entities.users
      const currentUser =state.entities.users[state.session.id]
      const userId = ownProps.match.params.userId
      const friends =Object.keys(state.entities.friends).map(key => state.entities.friends[key])

      return{
        user,  
        users,
        currentUser,
        userId,
        friends
      
      }
       
   };
   
   const mapDispatchToProps = dispatch => {
     return {
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      fetchUsers: () => dispatch(fetchUsers()),
      fetchFriends: () => dispatch(fetchFriends)
      
         
     };
   };
 
   export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Tab))

