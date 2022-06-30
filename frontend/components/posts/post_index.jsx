import React from 'react';
import PostItem from './post_item';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchUser(this.props.match.params.userId)
  }

  render() {
    return (
      <div>
      
        <ul>
          {
            this.props.posts.map(post => (
              <PostItem
              key={`${post.id}`}
              post={post}
              user= {this.props.user}
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