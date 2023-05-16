import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// documentationMaterialsSlice
type Info = {
  title: string
  description: string
  phone: string
  coords: [number, number]
}

interface InfoState {
  contactsData: Info[]
}

const initialState: InfoState = {
  contactsData: [
    {
      title: 'Склад №1',
      description: 'улица Генерала Белова, 45к2, Москва, 115583',
      phone: '+79888880000',
      coords: [55.822158, 37.749831],
    },
    {
      title: 'Склад №2',
      description: 'Братиславская улица, 27к3, Москва, 109469',
      phone: '+79888880000',
      coords: [55.655138, 37.767016],
    },
    {
      title: 'Склад №3',
      description: '1-й проезд Перова Поля, 3с7, Москва, 111141',
      phone: '+79888880000',
      coords: [55.752359, 37.769208],
    },
    {
      title: 'Склад №4',
      description: 'Окская улица, 1к2, Москва, 109125',
      phone: '+79888880000',
      coords: [55.712158, 37.749831],
    },
  ],
}

const contactsDataSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    update3InfoData: (state: InfoState, action: PayloadAction<Info>) => {},
  },
})

export const { update3InfoData } = contactsDataSlice.actions

export default contactsDataSlice.reducer
