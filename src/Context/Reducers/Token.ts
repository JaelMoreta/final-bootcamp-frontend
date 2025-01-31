import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface TokenState {
  value: string | null;
}

const initialState: TokenState = {
  value: null,
};

export const TokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state) => {
      state.value = localStorage.getItem('token');
    },
    deleteToken: (state) => {
      state.value = null;
    },
    modifyToken(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, deleteToken, modifyToken } = TokenSlice.actions;

export default TokenSlice.reducer;
