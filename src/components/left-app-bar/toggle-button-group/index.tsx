import Box from '@mui/material/Box'
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useState } from 'react'

export function ButtonSelectGroup() {
  const [value, setValue] = useState('All')
  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
      <ToggleButtonGroup
        color="primary"
        size="large"
        orientation="vertical"
        sx={{ width: '90%', marginTop: 2 }}
        onChange={handleChange}
        exclusive
        aria-label="Platform"
        value={value}
      >
        <ToggleButton value="All" disabled={value === 'All'}>
          Заказы
        </ToggleButton>
        <ToggleButton value="Completed" disabled={value === 'Completed'}>
          Документация о материалах
        </ToggleButton>
        <ToggleButton value="Deleted" disabled={value === 'Deleted'}>
          блабла1
        </ToggleButton>
        <ToggleButton value="Deleted2" disabled={value === 'Deleted2'}>
          блабла2
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}
