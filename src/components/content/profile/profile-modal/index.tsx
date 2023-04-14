import { useAppDispatch, useAppSelector } from '../../../../hook'
import {
  setAddress,
  setCompanyName,
  setFirstName,
  setLastName,
  setMail,
  setTelephone,
} from '../../../../store/profileDataSlice'
import { Box } from '@material-ui/core'
import { Button, TextField, Typography } from '@mui/material'
import { useForm, SubmitHandler, Controller, useFormState } from 'react-hook-form'
import { RootState } from '../../../../store'

interface InfoInForm {
  firstName: string
  lastName: string
  address: string
  telephone: string
  mail: string
}

export function MyModalForm() {
  const profileData = useAppSelector((state: RootState) => state.profileData)
  const { handleSubmit, control } = useForm<InfoInForm>({
    defaultValues: {
      firstName: profileData.infoData.firstName,
      lastName: profileData.infoData.lastName,
      address: profileData.infoData.address,
      telephone: profileData.infoData.telephone,
      mail: profileData.infoData.mail,
    },
  })
  const { errors } = useFormState({
    control,
  })

  const onSubmit: SubmitHandler<InfoInForm> = (data) => {
    console.log(data)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        width: '550px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.35)',
        borderRadius: '20px',
        bgcolor: '#ffffff',
      }}
    >
      <Typography variant="h4">Обновите</Typography>
      <Typography variant="subtitle1" gutterBottom>
        Старые данные на новые
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              label="Имя"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              error={!!errors.firstName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              label="Фамилия"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              error={!!errors.lastName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <TextField
              label="Адрес"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              error={!!errors.address?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="telephone"
          render={({ field }) => (
            <TextField
              label="Телефон"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              error={!!errors.telephone?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="mail"
          render={({ field }) => (
            <TextField
              label="Почта"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              error={!!errors?.mail?.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          Обновить
        </Button>
      </form>
    </Box>
  )
}
