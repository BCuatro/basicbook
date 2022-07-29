import { combineReducers} from 'redux';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';
import ProfileReducer from './profile_reducer';
import UsersReducer from './users_reducer';



const EntitiesReducer = combineReducers ({ 
    users: UsersReducer,
    posts: PostsReducer,
    comments: CommentsReducer,
    profile: ProfileReducer


})


export default EntitiesReducer;