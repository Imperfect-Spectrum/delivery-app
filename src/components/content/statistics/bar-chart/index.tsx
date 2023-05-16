import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import { Bar } from 'react-chartjs-2'
import { useAppSelector } from '../../../../hook'
import { RootState } from '../../../../store'
import { Box, Typography } from '@mui/material'

export function BarChart() {
  const dataOrders = useAppSelector((state: RootState) => state.ordersData.ordersData)

  const maxCount = dataOrders.reduce((max, item) => {
    const count = parseInt(item.count)
    return count > max ? count : max
  }, 0)

  const data = {
    labels: dataOrders.map((item) => item.name),
    datasets: [
      {
        label: 'Количество',
        data: [...dataOrders].map((item) => parseInt(item.count)).sort((a, b) => b - a),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        max: maxCount,
        type: 'linear' as const,
        beginAtZero: true,
        ticks: {
          stepSize: 100,
        },
      },
    },
  }

  return (
    <Box>
      <Typography variant="h5">График кол-ва заказов для каждого материала</Typography>
      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        <Box sx={{ width: '7000px', height: '600px' }}>
          <Bar data={data} options={options} />
        </Box>
      </Box>
    </Box>
  )
}

export default BarChart
