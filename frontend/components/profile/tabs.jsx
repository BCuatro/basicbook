import React from 'react';
import FriendIndex from '../friends/friend_index';
import PostContainer from '../posts/post_container';




class Headers extends React.Component {
  render() {
      const selected = this.props.selectedTab;
      const tabHeaders = this.props.tabs.map((tab, index) => {
      const tabTitle = tab.title;
      const tabIndex = index === selected ? 'active' : '';

      return (
        <li
          key={index}
          className={tabIndex}
          onClick={() => this.props.chosenTab(index)}>
          {tabTitle}{' '}
        </li>
      );
    });
    return (
      <ul className='tabsHeader'>
        {tabHeaders}
      </ul>

    );
 }
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }
  componentDidMount(){
      // this.props.fetchUsers()
      // this.props.friends
  }
    
 
  selectTab(num) {
    this.setState({selectedTab: num});
  }

  render() {
   
    
    const tabs = [
      {title: 'Posts', content: <PostContainer friends= {this.props.friends} user = {this.props.user}  />},
      {title: 'Friends', content:  
                                  <FriendIndex 
                                  user = {this.props.user}
                                  users = {this.props.users}
                                  currentUser = {this.props.currentUser}
                                  friends = {this.props.friends} 
                                  classname = "tabs-friends-list" />
                                },
      // {title: 'Photo', content: 'AWS'},
      
    ];
    const tab = tabs[this.state.selectedTab];
   

    return (
      <div>
        <div className='tabs'>
          <Headers 
            selectedTab={this.state.selectedTab}
            chosenTab={this.selectTab}
            tabs={tabs}
            >
          </Headers>
          <div className='tab-content'>
            <div>
              {tab.content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}