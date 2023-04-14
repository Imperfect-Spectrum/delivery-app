import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Info {
  firstName: string
  lastName: string
  companyName: string
  address: string
  telephone: string
  mail: string
}

interface InfoState {
  infoData: Info
}

const initialState: InfoState = {
  infoData: {
    firstName: 'Иван',
    lastName: 'Иванов',
    companyName: 'ООО "СтройИнвест"',
    address: 'Проезд Завода Серп и Молот, 10, Москва, 111250',
    telephone: '79999999999',
    mail: 'hpsqsdsdslw@mail.ru',
  },
}

const profileDataSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.infoData.firstName = action.payload
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.infoData.lastName = action.payload
    },
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.infoData.companyName = action.payload
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.infoData.address = action.payload
    },
    setTelephone: (state, action: PayloadAction<string>) => {
      state.infoData.telephone = action.payload
    },
    setMail: (state, action: PayloadAction<string>) => {
      state.infoData.mail = action.payload
    },
  },
})

export const { setFirstName, setLastName, setCompanyName, setAddress, setTelephone, setMail } = profileDataSlice.actions

export default profileDataSlice.reducer
