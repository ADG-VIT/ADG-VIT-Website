import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "./Auth"
import ProjectReducer from "./Project"
import TeamReducer from "./Team"

export default configureStore({
  reducer: {
    counter: AuthReducer,
    project: ProjectReducer,
    team: TeamReducer
  },
})