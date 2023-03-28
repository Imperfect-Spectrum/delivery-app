import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SelectType {
  selectPage: string
}

const initialState: SelectType = {
  selectPage: 'Заказы',
}

const selectSlice = createSlice({
  name: 'selectPage',
  initialState,
  reducers: {
    setSelectPage: (state, action: PayloadAction<SelectType>) => {
      // eslint-disable-next-line no-param-reassign
      state.selectPage = action.payload.selectPage
    },
  },
})

export const { setSelectPage } = selectSlice.actions
export default selectSlice.reducer
