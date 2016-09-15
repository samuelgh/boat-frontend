import fetch from 'isomorphic-fetch';
export const START_FETCHER = 'START_FETCHER';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const START_INIT = 'START_INIT';

export function startFetch(increment) {
  return { type: START_FETCHER, increment };
}

let isFetching = false;
let fetchStarted = false;

function receivePosts(json) {
  isFetching = false;
  return {
    type: RECEIVE_POSTS,
    data: json,
  }
}

function receiveInit(json) {
  isFetching = false;
  return {
    type: START_INIT,
    data: json,
  }
}

function fetchData(dispatch, event) {
  if (isFetching) {
    console.log('Already fetching, skipping');
  } else {
    isFetching = true;
    dispatch(startFetch());
    return fetch(`https://data.sparkfun.com/output/LQ9yDE9Ym0FAbYYGLYLV.json?gt[timestamp]=now%20-1day`)
      .then(response => response.json())
      .then(json => dispatch(event(json))
      );
  }
}

export function startInit() {
  const thingy = startRecurring();
  return function(dispatch) {
    fetchData(dispatch, receiveInit);
    thingy(dispatch);
  }
}

export function startRecurring() {
  return function(dispatch) {
    if (fetchStarted) {
      console.log('already started a timer, skipping');
    } else {
      console.log('starting');
      fetchData(dispatch, receivePosts);
      setInterval(() => {
        fetchData(dispatch, receivePosts);
      },15000);
    }
  }
}
