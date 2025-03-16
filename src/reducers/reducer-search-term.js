import * as types from "../actions/types";

/**
 * Reducer pour gérer le terme de recherche dans l'état Redux
 * @param {string} state - État actuel
 * @param {Object} action - Action Redux
 * @returns {string} Nouvel état
 */
export default function (state = "", action) {
    switch (action.type) {
        case types.FILTER_TOOLS:
            return action.term;
        case types.RESET_SEARCH:
            return "";
        default:
            return state;
    }
}
