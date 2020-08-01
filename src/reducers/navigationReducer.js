const initialState = {
  logged: false
}
export default function(state = initialState, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        logged: true
      };
    case 'logout':
      return {
        ...state,
        logged: false
      }
    default:
      return state;
  }
}
