import { combineReducers} from 'redux';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
    sessionReducer: SessionReducer,
    entitiesReducer: EntitiesReducer,
    errorReducer: ErrorsReducer,

})


export default RootReducer