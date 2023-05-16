import { useAppDispatch, useAppSelector } from '../../../hook'
import { updateInfoData } from '../../../store/profileDataSlice'
import { Box } from '@material-ui/core'
import { Button, TextField, Typography } from '@mui/material'
import { useForm, SubmitHandler, Controller, useFormState } from 'react-hook-form'
import { RootState } from '../../../store'
import { addFeedbackComment } from '../../../store/feedbackDataSlice'

interface InfoInForm {
  data: string
}

export function MyModalForm({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const dispatch = useAppDispatch()
  const chapter = useAppSelector((state: RootState) => state.selectPage)
  const { handleSubmit, control } = useForm<InfoInForm>({
    defaultValues: {
      data: '',
    },
  })
  const { errors } = useFormState({
    control,
  })

  const onSubmit: SubmitHandler<InfoInForm> = (data) => {
    const newData = { id: new Date().getTime(), ...data, ...chapter, status: 'В обработке' }
    console.log(newData)
    dispatch(addFeedbackComment({ newData }))
    setOpen(!open)
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
        margin: 'auto',
        width: '100%',
        height: '100%',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.35)',
        borderRadius: '20px',
        bgcolor: '#ffffff',
      }}
    >
      <Typography variant="h4">Опишите</Typography>
      <Typography variant="subtitle1" gutterBottom>
        Свою проблему, мы обязательно вам поможем!
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="data"
          render={({ field }) => (
            <TextField
              label="Комментарий"
              multiline
              fullWidth
              onChange={(e) => field.onChange(e)}
              value={field.value}
              size="small"
              margin="normal"
              error={!!errors.data?.message}
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
          Отправить
        </Button>
      </form>
    </Box>
  )
}
