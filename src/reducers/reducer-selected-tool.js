import * as types from '../actions/actions-types';

export default function(state = null, action) {
  switch (action.type) {
    case types.SELECT_TOOL:
      return action.payload;
  }

  return state;
}
