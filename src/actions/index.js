import * as types from "./types";

export const selectTool = (tool) => ({
    type: types.SELECT_TOOL,
    tool,
});

export const filterTools = (term) => ({
    type: types.FILTER_TOOLS,
    term,
});

/**
 * Action pour réinitialiser le terme de recherche
 * @returns {Object} Action Redux
 */
export const resetSearch = () => ({
    type: types.RESET_SEARCH,
});
