import { Box, Typography } from '@mui/material'

export function ContentBox() {
  return (
    <Box position="static" sx={{ width: `calc(100% - 240px)`, marginLeft: '240px' }}>
      <Typography variant="h6">TESSTT 1</Typography>
    </Box>
  )
}
