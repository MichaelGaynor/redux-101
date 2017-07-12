// Conventionally this would be index.js,
// but we decided to differentiate for our sake

// This is our master reducer... the root reducer
// The reducers hold pieces of state, the root reducer holds all the reducers.
// Therefore the rootreducer holds ALL pieces of state, or application state.

// We need to get the combineReducers method from redux, to make a rootReducer 
// the provider can use.
import { combineReducers } from 'redux';

import studentReducer from './studentReducer';
import SelectedStudent from './selectedStudentReducer';
import timerReducer from './timerReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
    students: studentReducer,
    selectedStudent: SelectedStudent,
    timer: timerReducer,
    weather: weatherReducer
})

export default rootReducer;