import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import { Line } from 'react-chartjs-2'
import { useAppSelector } from '../../../../hook'
import { RootState } from '../../../../store'
import { Box, Typography } from '@mui/material'

export function LineChart() {
  const dataOrders = useAppSelector((state: RootState) => state.ordersData.ordersData)

  const result = Object.entries(
    dataOrders.reduce(
      (acc: Record<string, number>, { date, count }) => ({ ...acc, [date]: (acc[date] || 0) + parseInt(count) }),
      {}
    )
  ).map(([date, count]) => ({ date, count }))

  const data = {
    labels: result.map((item) => item.date),
    datasets: [
      {
        label: 'Количество',
        data: result.map((item) => item.count),
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
        type: 'linear' as const,
        beginAtZero: true,
        ticks: {
          stepSize: 500,
        },
      },
    },
  }

  return (
    <Box>
      <Typography variant="h5">График кол-ва заказов по датам</Typography>
      <Box sx={{ width: '100%', overflowX: 'auto', height: '100%' }}>
        <div style={{ width: '100%', height: '700px' }}>
          <Line data={data} options={options} />
        </div>
      </Box>
    </Box>
  )
}

export default LineChart
