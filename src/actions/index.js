import * as types from "./types";

export const selectTool = tool => ({
    type: types.SELECT_TOOL,
    tool,
});

export const filterTools = term => ({
    type: types.FILTER_TOOLS,
    term,
});
