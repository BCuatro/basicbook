import { combineReducers} from 'redux';
import PostsReducer from './posts_reducer';
import ProfileReducer from './profile_reducer';
import UsersReducer from './users_reducer';



const EntitiesReducer = combineReducers ({ 
    users: UsersReducer,
    posts: PostsReducer,
    profile: ProfileReducer

})


export default EntitiesReducer;