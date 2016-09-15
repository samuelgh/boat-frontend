import { START_INIT } from '../actions/data-fetcher';


export default function initReciever(state = {nodata: true}, action) {
  if (action.type === START_INIT) {
    const { data } = action;
    const mappedTemp = data.map(row => {
      return [new Date(row.timestamp).getTime(), parseFloat(row.temp)];
    });
    const mappedVolt = data.map(row => {
      return [new Date(row.timestamp).getTime(), parseFloat(row.volt)];
    });
    state = [mappedTemp.reverse(), mappedVolt.reverse()];
    return state;
  }
  return state;
}
