import { combineReducers } from "redux";
import ToolsListReducer from "./reducer-tools-list";
import SelectedToolReducer from "./reducer-selected-tool";
import SearchTermReducer from "./reducer-search-term";

const rootReducer = combineReducers({
    toolsList: ToolsListReducer,
    selectedTool: SelectedToolReducer,
    searchTerm: SearchTermReducer,
});

export default rootReducer;
