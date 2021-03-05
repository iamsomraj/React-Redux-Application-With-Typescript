import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// initializing root state type similar to our main reducer
export type RootState = ReturnType<typeof reducers>;
