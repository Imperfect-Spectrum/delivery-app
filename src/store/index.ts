import { configureStore } from '@reduxjs/toolkit'
import selectReducer from './selectSlice'

export const store = configureStore({
  reducer: { selectPage: selectReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
