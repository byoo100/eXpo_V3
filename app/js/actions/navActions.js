
export function showNav() {

  return function(dispatch) {
    dispatch({type: "NAV_MENU_SHOW"});
  }
}

export function hideNav() {

  return function(dispatch) {
    dispatch({type: "NAV_MENU_HIDE"});
  }
}

export function toggleNav() {

  return function(dispatch) {
    dispatch({type: "NAV_MENU_TOGGLE"});
  }
}
