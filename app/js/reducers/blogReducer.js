export default function reducer(state={
  posts: [],
  page: 1,
  fetching: false,
  fetched: false,
  error: null,
}, action ) {

  switch(action.type){
    case "FETCH_POSTS_REQUEST": {
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: false,
      }
    }
    case "FETCH_POSTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        posts: action.payload,
      }
    }
    case "FETCH_POSTS_REJECTED": {
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
