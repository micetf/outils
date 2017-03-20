import * as types from '../actions/actions-types';

export default function(state="", action) {
  switch (action.type) {
    case types.FILTER_TOOLS:
      return action.payload;
  }
  return state;
}
