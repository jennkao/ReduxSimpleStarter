import axios from 'axios';

const API_KEY = '0307f05b4203207f3365b81c76252000';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//purpose: keepy action type consistent between reducers
//and the action creator
//never need to copy the string, var always single source of truth
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

//redux-promise sees an incoming action and looks at the payload
//property--if it is a promise, then redux-promise stops the action
//entirely, waits for it to resolve, and unwraps the promise for us--
//only gives us the resolved data.
//this is a new action, not the same one    
//only work with data and not promises in our reducers
//cleans up code when no async looking code