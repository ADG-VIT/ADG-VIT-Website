import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    leAuthorisationToken: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.leAuthorisationToken = action.payload.payload;
    },
  },
})

export const { setToken } = counterSlice.actions

export default counterSlice.reducer