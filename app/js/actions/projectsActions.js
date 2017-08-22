import axios from "axios";

import { filterDataList } from "./basicActions";


export function requestProjects() {

  return function(dispatch) {
    dispatch({type: "FETCH_PROJECTS_REQUEST"});
  }
}

export function fetchProjects(page) {
  var url = "http://wp.brianykm.com/wp-json/wp/v2/post-projects?page=" + page;

  return function(dispatch) {
    axios.get(url)
      .then((response) => {
        dispatch({type: "FETCH_PROJECTS_FULFILLED", payload: filterDataList(response.data)})
      })
      .catch((err) => {
        dispatch({type: "FETCH_PROJECTS_REJECTED"})
        console.log(err)
      })
  }
}
