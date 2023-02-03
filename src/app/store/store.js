import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../../reducers/usersReservas/userSlice";
import userReducer2 from "../../reducers/usersReservas/userSlice2";
import loginReducer from "../../reducers/usersLogin/login";

export const store = configureStore({
    reducer: {
        userNR: userReducer,
        user2: userReducer2,
        login: loginReducer,
    },
})
