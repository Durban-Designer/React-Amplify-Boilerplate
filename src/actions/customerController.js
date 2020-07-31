export function addToQueue(data) {
  return {
    type: 'addToQueue',
    payload: data
  };
}

export function removeFromQueue(data) {
  return {
    type: 'removeFromQueue',
    payload: data
  };
}

export function clearQueue() {
  return {
    type: 'clearQueue'
  };
}
