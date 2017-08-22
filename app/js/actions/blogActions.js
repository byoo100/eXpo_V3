import axios from "axios";

import { filterDataList } from "./basicActions";


export function requestPosts() {

  return function(dispatch) {
    dispatch({type: "FETCH_POSTS_REQUEST"});
  }
}

export function fetchPosts(page) {
  var url = "http://wp.brianykm.com/wp-json/wp/v2/posts?page=" + page;

  return function(dispatch) {
    axios.get(url)
      .then((response) => {
        dispatch({type: "FETCH_POSTS_FULFILLED", payload: filterDataList(response.data)})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POSTS_REJECTED"})
        console.log(err)
      })
  }
}
