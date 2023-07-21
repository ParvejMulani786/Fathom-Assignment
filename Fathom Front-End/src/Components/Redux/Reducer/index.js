import getUser from "./userReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    getUser
})

export default rootReducer;