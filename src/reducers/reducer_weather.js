import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER: 
    //need to return a new instance of state
    //concat returns a new array 
      //return state.concat([action.payload.data])
      return [ action.payload.data, ...state ];
    ;
  }

  return state;
}