import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reservas: [],
}
export const userSlice = createSlice({
    name: "misreservas",
    initialState,
    reducers: {
        setReserva: (state, action) => {
            state.reservas = action.payload;
        },
        
    }
})

export const { setReserva } = userSlice.actions;
export default userSlice.reducer;