import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
}

export const userSlice = createSlice({
    name: "userNR",
    initialState,
    reducers: {
        setUserNR: (state, action) => {
            state.user = action.payload;
        },
       
    }
})

export const { setUserNR, unsetUserNR } = userSlice.actions;
export default userSlice.reducer;