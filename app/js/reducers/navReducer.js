export default function reducer(state={
  collapsed: true,
}, action ) {

  switch(action.type){
    case "NAV_MENU_SHOW": {
      return {
        ...state,
        collapsed: false,
      }
    }
    case "NAV_MENU_HIDE": {
      return {
        ...state,
        collapsed: true,
      }
    }
    case "NAV_MENU_TOGGLE": {
      return {
        ...state,
        collapsed: !state.collapsed,
      }
    }
  }

  return state;
}
