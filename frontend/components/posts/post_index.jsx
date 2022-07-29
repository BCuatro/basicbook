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

  handleOpenModal(e){
    e.preventDefault();
    this.props.openModal()
}
  
  render() {
    // console.log(Object.values(this.props.users))
    return (
      
      <div className="wall">
      
        <ul className= "wall_posts">
          {
            this.props.posts.map(post => (
              <PostItem
              key={`${post.id}`}
              post={post}
              user= {this.props.user}
              users= {Object.values(this.props.users)}
              modal= {this.props.openModal}
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