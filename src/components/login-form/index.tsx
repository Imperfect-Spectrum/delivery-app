import { Box } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material'
import { useForm, SubmitHandler, Controller, useFormState } from 'react-hook-form'
import { loginValidation, passwordValidation } from './validation'

interface ISignInForm {
  login: string
  password: string
}

export function LoginForm() {
  const { handleSubmit, control } = useForm<ISignInForm>({
    defaultValues: {
      login: '',
      password: '',
    },
  })
  const { errors } = useFormState({
    control,
  })

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    console.log(data)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#ffffff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '100%',
          padding: '20px',
          width: '550px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.35)',
          borderRadius: '20px',
          bgcolor: '#ffffff',
        }}
      >
        <Typography variant="h4">Войдите</Typography>
        <Typography variant="subtitle1" gutterBottom className="auth-form__subtitle">
          Чтобы получить доступ
        </Typography>
        <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            rules={loginValidation}
            name="login"
            render={({ field }) => (
              <TextField
                label="Логин"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                fullWidth={true}
                size="small"
                margin="normal"
                className="auth-form__input"
                error={!!errors.login?.message}
                helperText={errors?.login?.message}
              />
            )}
          />
          <Controller
            control={control}
            rules={passwordValidation}
            name="password"
            render={({ field }) => (
              <TextField
                label="Пароль"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                fullWidth={true}
                size="small"
                margin="normal"
                type="password"
                className="auth-form__input"
                error={!!errors?.password?.message}
                helperText={errors?.password?.message}
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
            Войти
          </Button>
        </form>
      </Box>
    </Box>
  )
}
