import { userReducer } from "./userReducer";
import { modulReducer } from "./modulReducer";
import { combineReducers } from "redux";
import { selectReducer } from "./selectReducer";
import { projectReducer } from "./projectReducer";
export const rootReducer = combineReducers({
  user: userReducer,
  moduls: modulReducer,
  selecs: selectReducer,
  projects: projectReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
