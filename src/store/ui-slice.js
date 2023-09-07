import { createSlice } from "@reduxjs/toolkit";

const initialUiState={
    isModalShow:false,
};

const uiSlice=createSlice({
    name:"ui",
    initialState:initialUiState,
    reducers:{
        showModal(state){
            state.isModalShow=true;
        },
        hideModal(state){
            state.isModalShow=false;
        }
    }
});

export const uiActions=uiSlice.actions;

export default uiSlice.reducer;