import { combineReducers } from 'redux';

// Reducers Individuales
import app from './app';
import security from './security';

const rootReducer = combineReducers({
    app,
    security,
});

export default rootReducer;