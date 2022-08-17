import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        value: 0,
    },
    reducers: {
        changeValue: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const { changeValue } = appSlice.actions;
export default appSlice.reducer;