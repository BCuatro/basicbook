import { connect } from "react-redux";
import React from 'react';
import {useParams, withRouter} from "react-router-dom"
import { fetchUser, fetchUsers} from "../../actions/users_actions";

import Tab from "./tabs"



const mapStateToProps = (state, ownProps) => {

      const user= state.entities.users[ownProps.match.params.userId]
      const users =state.entities.users
      const currentUser =state.entities.users[state.session.id]
      const userId = ownProps.match.params.userId

      return{
        user,  
        users,
        currentUser,
        userId
      
      }
       
   };
   
   const mapDispatchToProps = dispatch => {
     return {
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      fetchUsers: () => dispatch(fetchUsers())
         
     };
   };
 
   export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Tab))

