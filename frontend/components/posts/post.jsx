import React from 'react'
import PostIndexContainer from './post_index_container';
import FriendItem from '../friends/friend_item';
import aboutMe from '../profile/about_me';


class Post extends React.Component {
    constructor(props){
        super(props)
        this.handleOpenModal = this.handleOpenModal.bind(this);
           
    }
    componentDidMount() {
        this.props.fetchPosts();
      }

    handleOpenModal(e){
        e.preventDefault();
        this.props.openModal();
    }
    

    render() {
        
        return(
            <div className = "post-tab-content">
                <div className="post-container"> 
                    
                    <div className= "post-tab-sidebar">
                        <div className= "aboutMe-container">
                            {aboutMe(this.props.user)}
                            </div>
                        <div className="friends-list-container">
                            <h5 className="friends-list-title">Friends</h5>
                                <ul className= "friends-list">
                                        {
                                            this.props.friends
                                            .sort((a,b) => a.username > b.username ? 1 : -1)
                                            .map((friend, ind) => (
                                                <FriendItem
                                                    key={`fi-${ind}`}
                                                    friend={friend}
                                                    user= {this.props.user}
                                                    currentUser= {this.props.currentUser}
                                                    users= {(this.props.users)}
                                                    
                                                />
                                            ))
                                        }
                                </ul>
                        </div>
                    </div>
                    <div className= "post-item-container" >
                        <div className= "postButtonModalContainter">
                            
                            <button className="postButtonModal" onClick = {this.handleOpenModal}>What is on your mind?</button>
                        </div>
                        <PostIndexContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Post