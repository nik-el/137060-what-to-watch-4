import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as view} from "./view/view.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.VIEW]: view,
});
