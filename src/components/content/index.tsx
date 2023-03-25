import { Routes, Route, Navigate, Router } from 'react-router-dom'
import { Box } from '@mui/material'
import { useAppSelector } from '../../hook'
import { RootState } from '../../store'
import { Orders } from './orders'
import { Documents } from './documents'
import { Home } from './home'

export function ContentBox() {
  const setSelectPage = useAppSelector((state: RootState) => state.selectPage.selectPage)
  console.log(setSelectPage)
  return (
    <Box position="static" sx={{ width: `calc(100% - 240px)`, marginLeft: '240px' }}>
      <Route path="page/orders" element={<Orders />} />
      <Route path="page/documents" element={<Documents />} />
    </Box>
  )
}
