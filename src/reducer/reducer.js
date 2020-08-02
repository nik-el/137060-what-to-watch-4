import {combineReducers} from "redux";
import {reducer as data} from "./data";
import {reducer as view} from "./view";
import {reducer as user} from "./user";
import {reducer as review} from "./review";
import NameSpace from "./name-space";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.VIEW]: view,
  [NameSpace.USER]: user,
  [NameSpace.REVIEW]: review
});
