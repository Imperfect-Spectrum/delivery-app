import Box from '@mui/material/Box'
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useState } from 'react'
import { setSelectPage } from '../../../store/selectSlice'
import { useAppDispatch } from '../../../hook'
import { Link } from 'react-router-dom'

export function ButtonSelectGroup() {
  const [value, setPage] = useState('zakaz')

  const dispatch = useAppDispatch()
  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    setPage(newValue)
    dispatch(setSelectPage({ selectPage: newValue }))
  }

  const buttons = [
    { value: 'orders', label: 'Заказы', path: '/orders' },
    { value: 'documents', label: 'Документация о материалах', path: '/documents' },
    { value: 'bla', label: 'блабла1', path: '/bla' },
    { value: 'blabla', label: 'блабла2', path: '/blabla' },
  ]

  const toggleButtons = buttons.map((button) => (
    <ToggleButton
      key={button.value}
      value={button.value}
      disabled={value === button.value}
      component={Link}
      to={button.path}
      sx={{ textAlign: 'center' }}
    >
      {button.label}
    </ToggleButton>
  ))
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
        {toggleButtons}
      </ToggleButtonGroup>
    </Box>
  )
}
