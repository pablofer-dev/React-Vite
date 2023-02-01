import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../../reducers/usersNR/userSlice";

export const store = configureStore({
    reducer: {
        userNR: userReducer,
    },
})
