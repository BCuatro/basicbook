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

  handleOpenModal(e) {
   
      e.preventDefault();
      this.props.openModal()
   
    
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
              users= {Object.values(this.props.users)}
              page ={"profile"}
              modal= {this.props.openModal}
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