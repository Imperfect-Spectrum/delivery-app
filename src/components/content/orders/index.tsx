import { Box, Typography, Stack } from '@mui/material'
import { useMemo } from 'react'
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table'

type Info = {
  name: string
  size: number
  material: string
  count: string
}

export function Orders() {
  const data: Info[] = [
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '2',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '2',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '1000',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '2',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '2',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '1000',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '2',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '2',
    },
    {
      name: 'Фанера',
      size: 300,
      material: 'Дерево',
      count: '13',
    },
    {
      name: 'Фанера',
      size: 500,
      material: 'Дерево',
      count: '5',
    },
    {
      name: 'Труба',
      size: 30,
      material: 'Медь',
      count: '3',
    },
    {
      name: 'Труба',
      size: 20,
      material: 'Железо',
      count: '16',
    },
    {
      name: 'Фанера',
      size: 360,
      material: 'Дерево',
      count: '1000',
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
    ],
    []
  )

  return (
    <Box>
      <Typography variant="h1">Orders</Typography>
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
        }}
        muiToolbarAlertBannerChipProps={{ color: 'primary' }}
        muiTableContainerProps={{ sx: { maxHeight: 470 } }}
      />
    </Box>
  )
}
