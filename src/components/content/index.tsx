import { Navigate, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Orders } from './orders'
import { Documents } from './documents'
import { Contacts } from './contacts'
import { Statistics } from './statistics'
import { Profile } from './profile'

export function ContentBox() {
  return (
    <Box position="static" sx={{ width: `calc(100% - 240px)`, marginLeft: '240px' }}>
      <Route path="page/orders" element={<Orders />} />
      <Route path="page/documents" element={<Documents />} />
      <Route path="page/contacts" element={<Contacts />} />
      <Route path="page/statistics" element={<Statistics />} />
      <Route path="page/profile" element={<Profile />} />
    </Box>
  )
}
