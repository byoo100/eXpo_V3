export default function reducer(state={
  posts: [],
  page: 1,
  fetching: false,
  fetched: false,
  error: null,
}, action ) {

  switch(action.type){
    case "FETCH_PROJECTS_REQUEST": {
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: false,
      }
    }
    case "FETCH_PROJECTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        posts: action.payload,
      }
    }
    case "FETCH_PROJECTS_REJECTED": {
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: true,
      }
    }
  }

  return state;
}
