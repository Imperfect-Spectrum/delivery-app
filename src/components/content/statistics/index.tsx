import { Box, Typography } from '@mui/material'
import BarChart from './bar-chart'
import LineChart from './line-chart'
import { useAppSelector } from '../../../hook'
import { RootState } from '../../../store'
import PieChart from './pie-chart'

export function Statistics() {
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft: '10px', marginBottom: '10px' }}
      >
        <Typography variant="h5">Страница статистики</Typography>
        <Typography variant="h6">
          На этой странице вы найдете разные графики и гистрограммы, связанные со всеми вашими заказами.
        </Typography>
      </Box>
      <Box sx={{ width: '97%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px' }}>
        <BarChart />
      </Box>
      <Box sx={{ width: '97%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px' }}>
        <LineChart />
      </Box>
      <Box sx={{ width: '97%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px' }}>
        <PieChart />
      </Box>
    </>
  )
}
