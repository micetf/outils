import * as types from "./actions-types";

export const selectTool = tool => ({
  type: types.SELECT_TOOL,
  payload: tool,
});

export const filterTools = term => ({
  type: types.FILTER_TOOLS,
  payload: term,
});
