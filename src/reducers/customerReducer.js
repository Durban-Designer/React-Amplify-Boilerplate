const initialState = {
  queue: []
}
export default function(state = initialState, action) {
  switch (action.type) {
    case 'addToQueue':
      return {
        ...state,
        queue: state.queue.concat(action.payload)
      };
    case 'removeFromQueue':
      return {
        ...state,
        queue: [
          ...state.queue.slice(0, action.payload),
          ...state.queue.slice(action.payload + 1)
        ]
      }
    case 'clearQueue':
      return {
        ...state,
        queue: []
      }
    default:
      return state;
  }
}
