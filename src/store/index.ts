import { combineReducers, createStore } from "redux";
import { timerReducer } from "./timerReducer";
import { blockReducer } from "./blockReducer";


const rootReducer = combineReducers({
    timer: timerReducer,
    block: blockReducer,
});


const store = createStore(rootReducer);

export type RootReducer = ReturnType<typeof rootReducer>;

export default store;