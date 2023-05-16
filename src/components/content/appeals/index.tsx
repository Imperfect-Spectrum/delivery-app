import { Box, Typography, Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../hook'
import { RootState } from '../../../store'
import { deleteFeedbackComment } from '../../../store/feedbackDataSlice'

export function Appeals() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state: RootState) => state.feedbackData.feedbackData)
  console.log(data)
  return (
    <Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft: '10px', marginBottom: '10px' }}
      >
        <Typography variant="h5">Страница обращений</Typography>
        <Typography variant="h6">На этой странице все выши обращения, вы можете их удалить или изменить.</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {data.map((data) => (
          <Box
            sx={{
              width: '45%',
              height: '100%',
              bgcolor: '#ffffff',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              borderRadius: '16px',
              padding: '10px',
              margin: '20px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 'auto', marginBottom: '15px' }}>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>Раздел обращения:</Typography>
              <Typography sx={{ textAlign: 'start', wordBreak: 'break-word' }}> {data.newData?.selectPage}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: '15px', marginRight: 'auto' }}>
              <Typography sx={{ fontWeight: 'bold' }}>Текст обращения:</Typography>
              <Typography
                sx={{
                  wordBreak: 'break-word',
                  textAlign: 'left',
                }}
              >
                {data.newData?.data}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 'auto', marginBottom: '15px' }}>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>Статус:</Typography>
              <Typography sx={{ textAlign: 'start', wordBreak: 'break-word' }}>{data.newData?.status}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button
                variant="contained"
                size="medium"
                color="error"
                sx={{ width: '150px' }}
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  dispatch(deleteFeedbackComment(data.newData.id))
                }}
              >
                Удалить
              </Button>
              <Button
                variant="contained"
                size="medium"
                color="warning"
                sx={{ width: '150px' }}
                onClick={() => {
                  {
                  }
                }}
              >
                Изменить
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
