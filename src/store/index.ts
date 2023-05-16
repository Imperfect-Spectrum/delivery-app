import { configureStore } from '@reduxjs/toolkit'
import selectReducer from './selectSlice'
import profileDataSlice from './profileDataSlice'
import feedbackDataSlice from './feedbackDataSlice'
import documentationDataSlice from './documentationDataSlice'
import contactsDataSlice from './contactsDataSlice'
import ordersDataSlice from './ordersDataSlice'

export const store = configureStore({
  reducer: {
    selectPage: selectReducer,
    profileData: profileDataSlice,
    feedbackData: feedbackDataSlice,
    documentationData: documentationDataSlice,
    contactsDataData: contactsDataSlice,
    ordersData: ordersDataSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
