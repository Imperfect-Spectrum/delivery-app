import { Box, Typography, MenuItem, Button, IconButton } from '@mui/material'
import { useMemo } from 'react'
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

type Info = {
  name: string
  size: number
  material: string
  count: string
  number: string
}

export function Orders() {
  const data: Info[] = [
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
      number: '1',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
      number: '1',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
      number: '2',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
      number: '2',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '2',
      number: '2',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
      number: '3',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
      number: '3',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
      number: '3',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
      number: '3',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '2',
      number: '3',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
      number: '3',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
      number: '3',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
      number: '4',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
      number: '4',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '1000',
      number: '4',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
      number: '4',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
      number: '4',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
      number: '5',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
      number: '5',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '2',
      number: '5',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
      number: '5',
    },
  ]

  const columns = useMemo<MRT_ColumnDef<Info>[]>(
    () => [
      {
        header: 'Название',
        accessorKey: 'name',
      },
      {
        header: 'Размер',
        accessorKey: 'size',
        enableGrouping: false, //do not let this column be grouped
      },
      {
        header: 'Материал',
        accessorKey: 'material',
      },
      {
        header: 'Кол-во',
        accessorKey: 'count',
        enableGrouping: false, //do not let this column be grouped
      },
      {
        header: 'Номер Заказа',
        accessorKey: 'number',
      },
    ],
    []
  )

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
        </Box>
        <MaterialReactTable
          columns={columns}
          data={data}
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
            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
              <IconButton
                color="primary"
                onClick={() => {
                  console.log('Изменить')
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="primary"
                onClick={() => {
                  console.log('Удалить')
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
          renderTopToolbarCustomActions={() => (
            <Box>
              <Button color="warning" variant="contained" size="medium">
                Создать новый заказ
              </Button>
            </Box>
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
          Воспользуйтесь формой для обратной связи! <Button variant="text">Открыть форму</Button>
        </Typography>
      </Box>
    </>
  )
}
