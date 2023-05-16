import { Box, Typography, Button, IconButton, Modal, Tooltip } from '@mui/material'
import { useMemo, useState } from 'react'
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { MyModalForm } from '../feedbackModal'
import { MyModalCreateForm } from './createNewOrdersModal'
import { useAppSelector } from '../../../hook'
import { RootState } from '../../../store'
import { MyModalOrderCreate } from './ordersModal'

export type Info = {
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

export function Orders() {
  async function handleClick() {
    fetch('/api/VKR/hs/services/storages/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async function handleSendData() {
    const profileData = useAppSelector((state: RootState) => state.profileData)

    const response = await fetch('/api/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    })
    console.log(response)
    if (response.ok) {
      const responseData = await response.json()
      console.log(responseData)
      console.log('Данные успешно отправлены на сервер: ', responseData)
    } else {
      console.error('Ошибка при отправке данных на сервер: ', response.statusText)
    }
  }

  const [openModal, setOpenModal] = useState(false)

  const handleOpenCloseModal = () => setOpenModal(!openModal)
  const onSubmitModal = () => {
    setOpenModal(!openModal)
  }

  const [openCreateModal, setOpenCreateModal] = useState(false)
  const handleOpenCloseCreateModal = () => setOpenCreateModal(!openCreateModal)
  const onSubmitCreateModal = () => {
    setOpenCreateModal(!openCreateModal)
  }

  const columns = useMemo<MRT_ColumnDef<Info>[]>(
    () => [
      {
        header: 'id',
        accessorKey: 'id',
        size: 80,
      },
      {
        header: 'Название',
        accessorKey: 'name',
        size: 180,
      },
      {
        header: 'ГОСТ',
        accessorKey: 'gost',
        size: 110,
      },
      {
        header: 'Размер',
        accessorKey: 'size',
        enableGrouping: false, //do not let this column be grouped
        size: 110,
      },
      {
        header: 'Материал',
        accessorKey: 'material',
        size: 160,
      },
      {
        header: 'Кол-во',
        accessorKey: 'count',
        enableGrouping: false, //do not let this column be grouped
        size: 100,
      },
      {
        header: 'Дата',
        accessorKey: 'date',
        size: 100,
      },
      {
        header: 'Номер Заказа',
        accessorKey: 'number',
        size: 156,
      },
      {
        header: 'Статус заказа',
        accessorKey: 'status',
        size: 156,
      },
    ],
    []
  )
  const dataOrders = useAppSelector((state: RootState) => state.ordersData.ordersData)
  return (
    <>
      <Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft: '10px', marginBottom: '10px' }}
        >
          <Typography variant="h5">Таблица заказов</Typography>
          <Typography variant="h6">
            Управляйте своими заказами, узнайте текущий статус и подробности заказов, или создайте новый!
          </Typography>
          {/* <Button variant="contained" size="medium" color="warning" sx={{ width: '150px' }} onClick={handleClick}>
            Add +
          </Button> */}
        </Box>
        <MaterialReactTable
          columns={columns}
          data={dataOrders}
          enableColumnResizing
          enableGrouping
          enableStickyHeader
          enableStickyFooter
          initialState={{
            density: 'compact',
            expanded: true,
            pagination: { pageIndex: 0, pageSize: 20 },
            grouping: ['number'],
          }}
          muiTableBodyProps={{
            sx: {
              '& tr:nth-of-type(odd)': {
                backgroundColor: '#fafafa',
              },
            },
          }}
          enableRowActions
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: 'flex' }}>
              {row.original.status === 'В сборке' && (
                <>
                  <Tooltip arrow placement="left" title="Edit">
                    <IconButton onClick={() => table.setEditingRow(row)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow placement="right" title="Delete" sx={{ padding: '0' }}>
                    <IconButton color="error" onClick={() => console.log('Delete')}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </>
              )}
            </Box>
          )}
          renderTopToolbarCustomActions={() => (
            <Button color="warning" onClick={() => onSubmitCreateModal()} variant="contained">
              Создать новый заказ
            </Button>
          )}
          muiToolbarAlertBannerChipProps={{ color: 'primary' }}
          muiTableContainerProps={{ sx: { maxHeight: 500 } }}
        />
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft: '10px', marginBottom: '10px' }}
      >
        <Typography variant="h5">Есть вопросы по таблице заказов?</Typography>
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

      <Modal open={openCreateModal} onClose={handleOpenCloseCreateModal}>
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
          <MyModalOrderCreate openCreateModal={openCreateModal} setOpenCreateModal={setOpenCreateModal} />
        </Box>
      </Modal>
    </>
  )
}
