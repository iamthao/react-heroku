/**
 * Created by ThaoNguyen on 12/11/2017.
 */
import { combineReducers } from 'redux'
import todos from '../reducers/ToDo/todos'
import visibilityFilter from '../reducers/ToDo/visibilityFilter'
import counts from '../reducers/Count/count'

const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    counts
})
export default rootReducer;