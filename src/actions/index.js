import * as types from './actions-types';

export function selectTool(tool) {
  return {
    type: types.SELECT_TOOL,
    payload: tool
  }
}
export function filterTools(term = "") {
  return {
    type: types.FILTER_TOOLS,
    payload: term
  }
}
