import * as types from "../actions/types";

export default function(state = "", action) {
    switch (action.type) {
        case types.FILTER_TOOLS:
            return action.term;
        default:
            return state;
    }
}
