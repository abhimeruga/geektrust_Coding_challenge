import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { AdminUser } from "./reducers/AdminReducer";

const middlewares = applyMiddleware(thunk);

const rootReducer = combineReducers({ adminData: AdminUser });

export const store = createStore(rootReducer, composeWithDevTools(middlewares));
