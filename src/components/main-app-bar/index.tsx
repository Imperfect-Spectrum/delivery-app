import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { DateTime } from 'luxon'
import { useAppSelector } from '../../hook'
import { RootState } from '../../store'

export function MainAppBar() {
  const setSelectPage = useAppSelector((state: RootState) => state.selectPage.selectPage)
  console.log(setSelectPage)

  const now = DateTime.now().setLocale('ru')
  const formattedDate = now.toFormat("'Сегодня' d MMMM yyyy 'года'")

  return (
    <AppBar position="static" sx={{ width: `calc(100% - 240px)`, marginLeft: '240px' }}>
      <Toolbar>
        <Typography variant="h5">{setSelectPage}</Typography>
        <Typography variant="h5" sx={{ marginLeft: 'auto' }}>
          {formattedDate}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
