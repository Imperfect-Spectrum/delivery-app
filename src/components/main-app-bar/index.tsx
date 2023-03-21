import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'

export function MainAppBar() {
  return (
    <AppBar position="static" sx={{ width: `calc(100% - 240px)`, marginLeft: '240px' }}>
      <Toolbar>
        <Typography variant="h6">Доставка материалов</Typography>
      </Toolbar>
    </AppBar>
  )
}
