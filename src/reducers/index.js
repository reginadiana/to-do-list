import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

/*Combine reducers junta os nossos reducers e envia para a store*/
export default combineReducers({
  todos,
  visibilityFilter,
});
