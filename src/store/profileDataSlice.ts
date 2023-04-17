import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Info {
  firstName?: string
  lastName?: string
  companyName?: string
  address?: string
  telephone?: string
  mail?: string
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
    updateInfoData: (state: InfoState, action: PayloadAction<Info>) => {
      const { firstName, lastName, address, telephone, mail } = action.payload
      const { infoData } = state

      const updatedInfoData = {
        firstName: firstName ?? infoData.firstName,
        lastName: lastName ?? infoData.lastName,
        companyName: infoData.companyName,
        address: address ?? infoData.address,
        telephone: telephone ?? infoData.telephone,
        mail: mail ?? infoData.mail,
      }

      return {
        ...state,
        infoData: updatedInfoData,
      }
    },
  },
})

export const { updateInfoData } = profileDataSlice.actions

export default profileDataSlice.reducer
