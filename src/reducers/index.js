import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import colorpickerReducer from "./colorpicker";
import strDoubleReducer from "./strDouble";

import { combineReducers } from "redux";

const allReducers = combineReducers({
   counter: counterReducer,
   isLogged: isLoggedReducer,
   color: colorpickerReducer,
   double: strDoubleReducer
});

export default allReducers;
