import React from 'react';
// import { withRouter } from 'react-router-dom';

class FriendRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.friend

      
        this.handleFriendRequestAccepted= this.handleFriendRequestAccepted.bind(this)
        this.handleFriendRequestDenied= this.handleFriendRequestDenied.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        
    

    }
  
    handleUpdate(){
        this.setState({friendship_status: "accepted"})
        
    }

  

    handleFriendRequestAccepted() {
        
        const formData = new FormData();
        formData.append('friend[friendship_status]', this.state.friendship_status);
        this.props.updateFriendship(this.state.id, formData)
    
    }

    handleFriendRequestDenied() {
        this.props.deleteFriendship(this.state.id)
    }



    render() {
        
        return(
            <div className="friend-request-buttons">
                <form onSubmit={this.handleFriendRequestAccepted}>
                    
                    <button onClick={() =>{
                        this.handleUpdate()
                    }
                    }>Accept</button>

                </form>
                <button onClick={() =>{
                        this.handleFriendRequestDenied()
                    }
                    }>Reject</button>
            </div>
        )
    }
}

export default FriendRequest;

