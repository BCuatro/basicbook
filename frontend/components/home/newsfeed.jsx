import React from 'react';
import NewsfeedItem from './newsfeed_item';


class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchUser(this.props.match.params.userId)
  }
  
  render() {
    // console.log(Object.values(this.props.users))
    console.log(this.props.posts)
    return (
      
      <div className="wall">
      
        <ul className= "wall_posts">
          {
            this.props.posts.map(post => (
              <NewsfeedItem
              key={`${post.id}`}
              post={post}
              user= {this.props.user}
              users= {Object.values(this.props.users)}
              
              />
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default Newsfeed;