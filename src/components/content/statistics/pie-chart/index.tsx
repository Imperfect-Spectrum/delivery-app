import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import { Pie } from 'react-chartjs-2'
import { useAppSelector } from '../../../../hook'
import { RootState } from '../../../../store'
import { Box, Typography } from '@mui/material'

export function PieChart() {
  const dataOrders = useAppSelector((state: RootState) => state.ordersData.ordersData)

  const generateColors = (count: number) => {
    const colors = []
    for (let i = 0; i < count; i++) {
      const hue = (i * 255) / count
      const color = `hsl(${hue}, 50%, 60%)`
      colors.push(color)
    }
    return colors
  }

  const data = {
    labels: dataOrders.map((item) => item.name),
    datasets: [
      {
        label: 'Процентное соотношение',
        data: dataOrders.map((item) => item.count),
        backgroundColor: generateColors(dataOrders.map((item) => item.name).length),
        borderWidth: 1,
      },
    ],
  }

  return (
    <Box>
      <Typography variant="h5">Процентное соотношение материала к кол-ву в виде круговой диаграммы</Typography>
      <Box sx={{ width: '70%', height: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
        <div>
          <Pie data={data} style={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', height: '500px' }} />
        </div>
      </Box>
    </Box>
  )
}

export default PieChart
