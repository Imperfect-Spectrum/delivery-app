import { configureStore } from '@reduxjs/toolkit'
import selectReducer from './selectSlice'
import profileDataSlice from './profileDataSlice'

export const store = configureStore({
  reducer: {
    selectPage: selectReducer,
    profileData: profileDataSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
