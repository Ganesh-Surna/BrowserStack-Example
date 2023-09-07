import { createSlice } from "@reduxjs/toolkit";

const initialTestItemState={
    item:null,
};

const testItemSlice=createSlice({
    name:"testItem",
    initialState:initialTestItemState,
    reducers:{
        getTestItemData(state,action){
            state.item=action.payload;
        },
    }
});

export const testItemActions=testItemSlice.actions;

export default testItemSlice.reducer;