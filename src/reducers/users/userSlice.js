import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "323",
    fullname: "",
    token: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.fullname = action.payload.fullname;
            state.token = action.payload.token;
        },
        unsetUser: (state, action) => {
            state.email = "";
            state.fullname = "";
            state.token = "";
        }
    }
})

export const { setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;