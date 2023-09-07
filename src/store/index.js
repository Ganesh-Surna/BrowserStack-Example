import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import testItemReducer from "./testItem-slice";

const store= configureStore({
    reducer:{
        uiKey:uiReducer,
        testItemKey:testItemReducer,
    },
});

export default store;