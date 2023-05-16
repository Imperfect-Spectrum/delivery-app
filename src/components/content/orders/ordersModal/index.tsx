import { Box } from '@material-ui/core'
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useAppSelector } from '../../../../hook'
import { RootState } from '../../../../store'
import { ChangeEvent, useState } from 'react'
import { Info } from '..'
import AddIcon from '@mui/icons-material/Add'
import { DateTime } from 'luxon'

export function MyModalOrderCreate({
  openCreateModal,
  setOpenCreateModal,
}: {
  openCreateModal: boolean
  setOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const dataOrders = useAppSelector((state: RootState) => state.ordersData.ordersData)
  function getUniqueValues(data: Info[]): { name: string[]; material: string[]; gost: string[]; id: number[] } {
    const uniqueNames = Array.from(new Set(data.map((item) => item.name)))
    const uniqueMaterials = Array.from(new Set(data.map((item) => item.material)))
    const uniqueGost = Array.from(new Set(data.map((item) => item.gost)))
    const uniqueId = Array.from(new Set(data.map((item) => item.id)))
    return { name: uniqueNames, material: uniqueMaterials, gost: uniqueGost, id: uniqueId }
  }

  const uniqueValues = getUniqueValues(dataOrders)

  interface DataState {
    name: string
    gost: string
    size: string
    material: string
    count: string
    number: string
    status: string
    date: string
    id: number
  }

  const [data, setData] = useState<DataState>({
    id: parseInt(DateTime.now().toFormat('mmss') + Math.floor(Math.random() * 1000)),
    name: '',
    gost: '',
    size: '',
    material: '',
    count: '',
    number: '',
    status: 'В сборке',
    date: DateTime.now().toFormat('dd-MM-yyyy'),
  })

  interface Info {
    id: number
    name: string
    gost: string
    size: string
    material: string
    count: string
    date: string
    number: string
    status: string
  }

  interface OrdersState {
    ordersData: Info[]
  }

  const [orders, setOrders] = useState<OrdersState>({ ordersData: [] })

  const addNewPosition = () => {
    setOrders({
      ordersData: [...orders.ordersData, data],
    })

    setData({
      id: parseInt(DateTime.now().toFormat('mmss') + Math.floor(Math.random() * 1000)),
      name: '',
      gost: '',
      size: '',
      material: '',
      count: '',
      number: data.number,
      status: 'В сборке',
      date: data.date,
    })
  }

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target
    setData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleChangeSize = (event: ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      size: event.target.value,
    }))
  }

  const handleChangeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      count: event.target.value,
    }))
  }

  const handleChangeNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      number: event.target.value,
    }))
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
      {orders.ordersData.length != 0 ? (
        <Typography variant="h4">Ваш заказ под номером: {orders.ordersData[0]?.number}</Typography>
      ) : (
        <Typography variant="h4">Создайте заказ {orders.ordersData[0]?.number}</Typography>
      )}

      <FormControl sx={{ m: 1, minWidth: 260 }}>
        <InputLabel>Название</InputLabel>
        <Select name="name" value={data.name} label="Название" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {uniqueValues.name.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 260 }}>
        <InputLabel>Материал</InputLabel>
        <Select name="material" value={data.material} label="Материал" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {uniqueValues.material.map((material) => (
            <MenuItem key={material} value={material}>
              {material}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 260 }}>
        <InputLabel>Гост</InputLabel>
        <Select name="gost" value={data.gost} label="Гост" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {uniqueValues.gost.map((gost) => (
            <MenuItem key={gost} value={gost}>
              {gost}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 260 }}>
        <TextField fullWidth multiline label="Размер" value={data.size} onChange={handleChangeSize} />
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 260 }}>
        <TextField fullWidth multiline label="Количество" value={data.count} onChange={handleChangeCount} />
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 260 }}>
        <TextField
          disabled={orders.ordersData.length != 0 ? true : false}
          fullWidth
          multiline
          label="Номер заказа"
          value={data.number}
          onChange={handleChangeNumber}
        />
      </FormControl>

      <Box sx={{ display: 'flex' }}>
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
            marginRight: '100px',
          }}
        >
          Создать
        </Button>

        <Button
          type="button"
          variant="contained"
          color="warning"
          sx={{
            marginTop: 2,
            width: '50px',
          }}
          onClick={addNewPosition}
        >
          <AddIcon />
        </Button>
      </Box>
    </Box>
  )
}
