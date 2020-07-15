import { all } from 'redux-saga/effects'; 

import edit from "./edit/sagas";
import categories from "./categories/sagas";

export default function* rootSaga() {
    return yield all([edit, categories]);
}