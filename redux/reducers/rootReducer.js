import counterReducer from './counterReducer';
import studentLoginReducer from './studentLoginReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    studentLoginReducer: studentLoginReducer,
});

export default rootReducer;