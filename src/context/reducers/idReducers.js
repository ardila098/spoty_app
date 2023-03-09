import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    idForTracks: '',
}

export const idSlice = createSlice({
    name: 'idForTracks',
    initialState,
    reducers:{
        setId: (state, action) => {
            state.idForTracks = action.payload
        },
        resetState: () => initialState
    }
})

export const { setId, resetState } = idSlice.actions;
export default idSlice.reducer;