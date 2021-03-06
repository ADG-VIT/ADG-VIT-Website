import { createSlice } from '@reduxjs/toolkit'

export const teamSlice = createSlice({
  name: 'team',
  initialState: {
    team: null,
  },
  reducers: {
    setTeam: (state, action) => {
      state.team = action.payload.payload;
    },
  },
})

export const { setTeam } = teamSlice.actions

export default teamSlice.reducer