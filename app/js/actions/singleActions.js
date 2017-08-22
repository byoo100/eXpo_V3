import axios from "axios";

import { filterData } from "./basicActions";



export function requestSingle() {

  return function(dispatch) {
    dispatch({type: "FETCH_SINGLE_REQUEST"});
  }
}

export function setSingle(single) {
  return {
    type: 'SET_SINGLE_POST',
    payload: single,
  }
}

export function fetchSingle(type, slug) {
  var url = "http://wp.brianykm.com/wp-json/wp/v2/" + type + "?slug=" + slug;

  return function(dispatch) {
    axios.get(url)
      .then((response) => {
        dispatch({type: "FETCH_SINGLE_FULFILLED", payload: filterData(response.data)})
      })
      .catch((err) => {
        dispatch({type: "FETCH_SINGLE_REJECTED"})
        console.log(err)
      })
  }
}
