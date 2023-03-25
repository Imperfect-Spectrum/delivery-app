import { Box } from '@mui/system'
import { Outlet, Route, Routes } from 'react-router-dom'
import { ContentBox } from '../content'
import { LeftAppBar } from '../left-app-bar'
import { MainAppBar } from '../main-app-bar'

export function MainPage() {
  return (
    <>
      <MainAppBar />
      <LeftAppBar />
      <Box position="static" sx={{ width: `calc(100% - 240px)`, marginLeft: '240px' }}>
        <Outlet />
      </Box>
    </>
  )
}
