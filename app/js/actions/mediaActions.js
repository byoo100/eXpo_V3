import axios from "axios";

import { filterDataList } from "./basicActions";


export function requestMedia() {

  return function(dispatch) {
    dispatch({type: "FETCH_MEDIA_REQUEST"});
  }
}

export function fetchMedia(page) {
  var url = "http://wp.brianykm.com/wp-json/wp/v2/post-media?page=" + page;

  return function(dispatch) {
    axios.get(url)
      .then((response) => {
        dispatch({type: "FETCH_MEDIA_FULFILLED", payload: filterDataList(response.data)})
      })
      .catch((err) => {
        dispatch({type: "FETCH_MEDIA_REJECTED"})
        console.log(err)
      })
  }
}
