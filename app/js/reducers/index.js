import { combineReducers } from "redux";

import blog from "./blogReducer";
import media from "./mediaReducer";
import nav from "./navReducer";
import projects from "./projectsReducer";
import single from "./singleReducer";

export default combineReducers({
  blog,
  media,
  nav,
  projects,
  single,
});
