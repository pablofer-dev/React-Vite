import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user2: [],
}

export const userSlice = createSlice({
    name: "user2",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user2 = action.payload;
        },
       
    }
})

export const { setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;