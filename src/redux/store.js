import { createStore,combineReducers } from "redux";
import tasks from "./reducers/tasks";
import users from "./reducers/users";
const reducer=combineReducers({tasks,users});
const store=createStore(reducer);
window.store=store;
export default store;