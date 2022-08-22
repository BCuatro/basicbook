import React from 'react';
import PostItem from './post_item';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchLikes()
    // this.props.fetchComments()
  }

  handleOpenModal(modal, post) {
   
    // return function(e){
      // e.preventDefault();
      this.props.openModal(modal, post)
  }

  
  render() {
    // console.log(Object.values(this.props.users))
    
    return (
      
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
              currentUser= {this.props.currentUser}
              users= {Object.values(this.props.users)}
              page ={"profile"}
              updatePost= {this.handleOpenModal}
              deletePost ={this.props.deletePost}
              likes = {this.props.likes}
              comments= {this.props.comments}
              />
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default PostIndex;