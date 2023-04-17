import { useState } from 'react'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
} from '@mui/material'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import { MyModalForm } from '../feedbackModal'

type Info = {
  title: string
  description: string
  phone: string
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
  const [openModal, setOpenModal] = useState(false)
  const handleOpenCloseModal = () => setOpenModal(!openModal)
  const onSubmitModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft: '10px', marginBottom: '10px' }}
      >
        <Typography variant="h5">Контактная информация</Typography>
        <Typography variant="h6">
          На этой странице вы найдете все необходимые способы, чтобы связаться с каждым из наших складов.
        </Typography>
      </Box>
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
      ></Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5" sx={{ fontWeight: '600' }}>
                  Название склада
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" sx={{ fontWeight: '600' }}>
                  Адрес
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h5" sx={{ fontWeight: '600' }}>
                  Телефон
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell scope="row">
                  <Typography variant="h6">{row.title}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">{row.description}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{row.phone}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: 'flex',
          marginTop: '30px',
          marginBottom: '20px',
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
      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft: '10px', marginBottom: '10px' }}
      >
        <Typography variant="h5">Не смогли решить вопрос?</Typography>
        <Typography variant="h6">
          Воспользуйтесь формой для обратной связи!
          <Button variant="text" onClick={onSubmitModal}>
            Открыть форму
          </Button>
        </Typography>
      </Box>
      <Modal open={openModal} onClose={handleOpenCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            borderRadius: '20px',
            p: 0,
          }}
        >
          <MyModalForm open={openModal} setOpen={setOpenModal} />
        </Box>
      </Modal>
    </>
  )
}
