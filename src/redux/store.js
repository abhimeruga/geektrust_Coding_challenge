import { combineReducers, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { AdminUser } from "./reducers/AdminReducer";

const rootReducer = combineReducers({ adminData: AdminUser });

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

export const store = createStore(rootReducer, composeWithDevTools());
