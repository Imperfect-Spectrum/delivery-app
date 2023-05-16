import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Info {
  newData?: { id: number; selectPage: string; data: string; status: string }
}

interface FeedbackState {
  feedbackData: Info[]
}

const initialState: FeedbackState = {
  feedbackData: [],
}

const feedbackDataSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    addFeedbackComment: (state, action: PayloadAction<Info>) => {
      state.feedbackData.push(action.payload)
    },
    deleteFeedbackComment: (state, action: PayloadAction<Info>) => {
      state.feedbackData = state.feedbackData.filter((feedback) => feedback.newData?.id !== action.payload)
    },
  },
})

export const { addFeedbackComment, deleteFeedbackComment } = feedbackDataSlice.actions

export default feedbackDataSlice.reducer
