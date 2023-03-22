import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { useAppSelector } from '../../hook'
import { RootState } from '../../store'
import { Orders } from './orders'
import { Documents } from './documents'

export function ContentBox() {
  const setSelectPage = useAppSelector((state: RootState) => state.selectPage.selectPage)
  console.log(setSelectPage)
  return (
    <Box position="static" sx={{ width: `calc(100% - 240px)`, marginLeft: '240px' }}>
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/documents" element={<Documents />} />
        {/* <Route path="/bla" element={<Blabla1 />} />
        <Route path="/blabla" element={<Blabla2 />} /> */}
      </Routes>
    </Box>
  )
}
