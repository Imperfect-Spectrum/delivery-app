import { Drawer, Box, Typography } from '@mui/material'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import { ButtonSelectGroup } from './toggle-button-group'

const drawerWidth = 240

export function LeftAppBar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="permanent"
    >
      <Box sx={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography
          sx={{
            textAlign: 'center',
            display: 'inline-block',
          }}
          variant="h2"
        >
          LOGO
        </Typography>
      </Box>
      <ButtonSelectGroup />
    </Drawer>
  )
}
