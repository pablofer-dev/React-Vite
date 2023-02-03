import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    token: "",
}

export const userSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.id = action.payload.id;
            state.token = action.payload.token;
        },
    }
})

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;