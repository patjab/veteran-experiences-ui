import { combineReducers } from 'redux';
import veteranReducer from './veteranReducer'
import postReducer from './postReducer'

const rootReducer = combineReducers({
  veteran: veteranReducer,
  post: postReducer
})

export default rootReducer
