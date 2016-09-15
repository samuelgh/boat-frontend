import { START_INIT, RECEIVE_POSTS } from '../actions/data-fetcher';

export default function dataReciever(state = {}, action) {
  if (action.type === RECEIVE_POSTS || action.type === START_INIT) {
    const {data = {}} = action;
    let newState = {};
    newState.timestamp = new Date(data[0].timestamp).getTime();
    newState.temp = parseFloat(data[0].temp);
    newState.volt = parseFloat(data[0].volt);
    // newState.temp = Math.floor((Math.random() * 30) + 1);
    // newState.volt = Math.floor((Math.random() * 12) + 1);
    return newState;
  }
  return state;
}
