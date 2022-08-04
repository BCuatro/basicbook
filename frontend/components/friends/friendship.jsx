import React from 'react';
import { withRouter } from 'react-router-dom';

class Friendship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            user_id: "",
            friend_id: "",
            friendship_status: ""
        };
        this.handleAddFriendSubmit = this.handleAddFriendSubmit.bind(this);
        this.handleDeleteFriendSubmit = this.handleDeleteFriendSubmit.bind(this);
        // this.handleFriendRequestSubmit= this.handleFriendRequestSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this);

        // this.handleFriendRequestSubmit = this.handleAddFriendSubmit.bind(this);
        // this.handleFriendRequestAccepted= this.handleFriendRequestAccepted.bind(this)
        // this.handleFriendRequestDenied= this.handleFriendRequestDenied.bind(this)
        // this.handleDeleteFriendSubmit = this.handleDeleteFriendSubmit.bind(this)




    }

    // componentWillUnmount() {
    //     this.props.removeErrors();
    // }
    componentDidMount() {
        // this.props.fetchFriends();
        // this.props.fetchUsers();
        // this.props.fetchFriend();
    }

    // handleFriendRequestSubmit(){
    //     this.setState({friend_id: this.props.user.id})
    //     this.setState({user_id: this.props.currentUser.id})
    //     this.setState({friendship_status: "pending"})
    //     formData.append('friend[user_id]', this.state.user_id);
    //     formData.append('friend[friend_id]', this.state.friend_id);
    //     formData.append('friend[friendship_status]', this.state.friendship_status);
    //     console.log("tooooo",this.state.friend_id)
    //     this.props.createFriendship(formData);


    // }
    // handleFriendRequestAccepted(){

    //     this.setState({friendship_status: "accepted"})

    //     formData.append('friend[friendship_status]', this.state.friendship_status);
    //     console.log("tooooo",this.state.friend_id)

    // }
    // handleFriendRequestDenied(){

    // }
    // handleDeleteFriendSubmit(){

    // }





    //original


    handleUpdate() {
        
        this.setState({ friend_id: this.props.user?.id });
        this.setState({ user_id: this.props.currentUser?.id });
        this.setState({ friendship_status: "pending" });
    }



    handleAddFriendSubmit(e) {
        e.preventDefault()

        const formData = new FormData();

        formData.append('friend[user_id]', this.state.user_id);
        formData.append('friend[friend_id]', this.state.friend_id);
        formData.append('friend[friendship_status]', this.state.friendship_status);
   
        this.props.createFriendship(formData);

    }

    handleDeleteFriendSubmit(friendId) {
        this.props.deleteFriendship(friendId);
    }



    render() {
        console.log (this.props.currentUser.id === this.props.user?.id) 
        let friendshipButton;
        if (this.props.currentUser.id === this.props.user?.id) {
            return friendshipButton = "";
        } else {
            if (this.props.friends.length === 0){
                return friendshipButton = 
                        <form onSubmit={this.handleAddFriendSubmit}>
                            {/* <button onClick={() =>{
                            this.handleUpdate().then(
                            this.handleAddFriendSubmit())
                        }
                        }>Friend Request</button> */}
                            <button onClick={() => {
                                this.handleUpdate();
                            }
                            }>Friend Request</button>

                        </form>
            }
            this.props.friends?.forEach(friend => {
                if (
                    (friend.friendship_status === "accepted") &&
                    (
                        (this.props.currentUser.id === friend.user_id &&
                        this.props.user?.id === friend.friend_id) ||
                        (this.props.currentUser.id === friend.friend_id &&
                            this.props.user?.id === friend.user_id)

                        ) 
                    
                    )  {
                        const friendId = friend?.id
                        return friendshipButton =
                
                            <button onClick={() =>
                                {this.handleDeleteFriendSubmit(friendId)}
                            }>Delete Friend</button>
                    
                }

                else if (
                    (friend.friendship_status === "pending") &&
                    (
                        (this.props.currentUser.id === friend.user_id &&
                        this.props.user?.id === friend.friend_id) ||
                        (this.props.currentUser.id === friend.friend_id &&
                            this.props.user?.id === friend.user_id)

                        ) 
                    
                    ) {
                    return friendshipButton =
                        
                            <button disabled>Pending Friend Request</button>
                       
                }

                else {
                     return friendshipButton = 
                        <form onSubmit={this.handleAddFriendSubmit}>
                            {/* <button onClick={() =>{
                            this.handleUpdate().then(
                            this.handleAddFriendSubmit())
                        }
                        }>Friend Request</button> */}
                            <button onClick={() => {
                                this.handleUpdate();
                            }
                            }>Friend Request</button>

                        </form>
                   

                }
            })
        }





        // });

        //  else if (this.props.friends?.length !==0 && this.props.friends[0].friendship_status === "accepted" ){
        //     friendshipButton =  <button onClick={this.handleDeleteFriendSubmit}>Delete Request</button>
        // } else if (this.props.friends.length !==0 && this.props.friends[0].friendship_status === "pending" ){
        //     friendshipButton =  <button disabled>Pending Friend Request</button>
        // }
        // else{
        //    friendshipButton = 
        //     <div className="friend-request">
        //         <form onSubmit={this.handleAddFriendSubmit}>
        //             {/* <button onClick={() =>{
        //                 this.handleUpdate().then(
        //                 this.handleAddFriendSubmit())
        //             }
        //             }>Friend Request</button> */}
        //              <button onClick={() =>{
        //                 this.handleUpdate()
        //             }
        //             }>Friend Request</button>

        //         </form>
        //     </div>
        // }

        // if (this.state.body.replace(/ /g, '').length === 0) {
        //     buttonId = "invalidButton";
        // } else {
        //     buttonId = "newButton";
        // }

        // const preview = this.state.photoUrl ? <img className = "post-photo-preview" src={this.state.photoUrl} /> : null;
        //     console.log(this.props.phototype)




        return (


            <div className="friend-request-container">
                <div className="friend-request">
                    {friendshipButton}
                </div>
                {/* <button onClick={this.handleDeleteFriendSubmit}>Delete Request</button> */}

            </div>

        );
    }





}

export default withRouter(Friendship);

