import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/*Combine reducers junta os nossos reducers e envia para a store*/
export default combineReducers({
	todos,
	visibilityFilter
})