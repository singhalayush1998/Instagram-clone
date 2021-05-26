import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { userReducer } from "./Suggestions/Reducer";

const rootReducer = combineReducers({
    user : userReducer
});

const customMiddleware = (store) => (next) => (action) => {
    return typeof action === "function" ? action(store.dispatch) : next(action);
};

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    createComposer(applyMiddleware(customMiddleware))
);