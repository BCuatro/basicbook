import React from 'react';
import PostItem from '../posts/post_item';



class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this)
  }

  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchUser(this.props.match.params.userId)
  }

  handleOpenModal(e){
    e.preventDefault();
    this.props.openModal();
}
  
  render() {
    // console.log(Object.values(this.props.users))
    return (
      <div className ="newfeed">
        <button id="postButtonModal" onClick = {this.handleOpenModal}>What is on your mind?</button>
        <div className="wall">
          
        
          <ul className= "wall_posts">
            
            {
              this.props.posts
              .sort((a,b) => a.created_at > b.created_at ? -1 : 1)
              .map(post => (
                <PostItem
                key={`${post.id}`}
                post={post}
                user= {this.props.user}
                users= {Object.values(this.props.users)}
                page = {"home"}
                modal ={this.props.openModal}
                deletePost ={this.props.deletePost}
                currentUser= {this.props.currentUser}
                
                />
                )
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Newsfeed;