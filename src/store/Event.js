import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    event: null,
  },
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload.payload;
    },
  },
})

export const { setEvent } = eventSlice.actions

export default eventSlice.reducer