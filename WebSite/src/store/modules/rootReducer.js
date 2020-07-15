// Faz a combinação de todos os reducer do projeto

import { combineReducers } from "redux";

import edit from "./edit/reducer";

export default combineReducers({
    edit,
});