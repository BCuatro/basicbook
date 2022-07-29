import React from 'react';
import PostItem from './post_item';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchUser(this.props.match.params.userId)
  }

  handleOpenModal(modal) {
    return function(e){
      e.preventDefault();
      this.props.openModal(modal)
      console.log("this works")
    }
   
     
   
    
}

  
  render() {
    // console.log(Object.values(this.props.users))
    console.log("looky", this.props.posts[0]?.created_at < this.props.posts[1]?.created_at )
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
              updatePost= {this.props.openModal("editPost")}
              deletePost ={this.props.deletePost}
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