import { combineReducers} from 'redux';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';
import UsersReducer from './users_reducer';
import FriendsReducer from './friends_reducer';
import LikesReducer from './likes_reducer';





const EntitiesReducer = combineReducers ({ 
    users: UsersReducer,
    posts: PostsReducer,
    comments: CommentsReducer,
    likes: LikesReducer,
    friends: FriendsReducer



})


export default EntitiesReducer;