import { combineReducers, createStore } from "redux";
import { timerReducer } from "./timerReducer";


const rootReducer = combineReducers({
    timer: timerReducer
});


const store = createStore(rootReducer);

export type RootReducer = ReturnType<typeof rootReducer>;

export default store;