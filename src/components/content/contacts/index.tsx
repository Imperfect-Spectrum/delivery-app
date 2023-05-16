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
import { useAppSelector } from '../../../hook'
import { RootState } from '../../../store'

const center: [number, number] = [55.76, 37.64]

export function Contacts() {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenCloseModal = () => setOpenModal(!openModal)
  const onSubmitModal = () => {
    setOpenModal(!openModal)
  }

  const data = useAppSelector((state: RootState) => state.contactsDataData.contactsData)
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
            {data.map((placemark) => (
              <Placemark
                key={placemark.title}
                geometry={placemark.coords}
                properties={{ iconCaption: placemark.title }}
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
