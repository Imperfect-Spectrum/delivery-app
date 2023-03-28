import { Box, Typography } from '@mui/material'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

type Info = {
  title: string
  description: string
  phone: string
}

interface MapProps {
  center: [number, number]
  placemarks: { coords: [number, number]; name: string }[]
}
const center: [number, number] = [55.76, 37.64]

const placemarks = [
  { coords: [55.607204, 37.726152], name: 'Склад №1' },
  { coords: [55.655138, 37.767016], name: 'Склад №2' },
  { coords: [55.752359, 37.769208], name: 'Склад №3' },
  { coords: [55.712158, 37.749831], name: 'Склад №4' },
]

const data: Info[] = [
  {
    title: 'Склад1',
    description: 'улица Генерала Белова, 45к2, Москва, 115583',
    phone: '7999999999',
  },
  {
    title: 'Склад2',
    description: 'Братиславская улица, 27к3, Москва, 109469',
    phone: '7999999999',
  },
  {
    title: 'Склад3',
    description: '1-й проезд Перова Поля, 3с7, Москва, 111141',
    phone: '7999999999',
  },
  {
    title: 'Склад4',
    description: 'Окская улица, 1к2, Москва, 109125',
    phone: '7999999999',
  },
]

export function Contacts() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          marginTop: '30px',
        }}
      >
        {data.map((data) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#f8f8f8',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
              width: '470px',
              padding: '15px',
            }}
          >
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {data.title}
            </Typography>
            <Typography variant="h6" sx={{ wordBreak: 'break-word' }}>
              {data.description}
            </Typography>
            <Typography variant="h6" sx={{ wordBreak: 'break-word' }}>
              +{data.phone}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '50px',
          marginBottom: '20px',
          marginLeft: '10px',
          marginRight: '10px',
        }}
      >
        <YMaps>
          <Map defaultState={{ center, zoom: 10 }} width="100%" height={450}>
            {placemarks.map((placemark) => (
              <Placemark
                key={placemark.name}
                geometry={placemark.coords}
                properties={{ iconCaption: placemark.name }}
              />
            ))}
          </Map>
        </YMaps>
      </Box>
    </>
  )
}
