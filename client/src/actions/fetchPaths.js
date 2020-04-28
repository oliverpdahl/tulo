import * from './Client.js'

export function fetchPaths() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_PATHS_REQUEST' });
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(astronauts => dispatch({ type: 'ADD_PATHS', astronauts }));
  };
}