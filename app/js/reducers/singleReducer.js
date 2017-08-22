export default function reducer(state={
  single: null,
  fetching: false,
  fetched: false,
  error: null,
}, action ) {

  switch(action.type){
    case "FETCH_SINGLE_REQUEST": {
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: false,
      }
    }
    case "FETCH_SINGLE_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        single: action.payload,
      }
    }
    case "SET_SINGLE_POST": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        single: action.payload,
      }
    }
  }

  return state;
}
