import { Box, Typography } from '@mui/material'

type Info = {
  firstName: string
  lastName: string
  companyName: string
  address: string
  telephone: string
  mail: string
}

const infoData: Info = {
  firstName: 'Иван',
  lastName: 'Иванов',
  companyName: 'ООО "СтройИнвест"',
  address: 'Проезд Завода Серп и Молот, 10, Москва, 111250',
  telephone: '79999999999',
  mail: 'hpsqsdsdslw@mail.ru',
}

export function Profile() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '650px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        display: 'flex',
      }}
    >
      <Box sx={{ width: '30%', padding: '10px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/image/avatar.png" alt="profile Img" loading="lazy" className="rounded-image" />
          <Typography variant="h5">
            {infoData.firstName} {infoData.lastName}
          </Typography>
          <Typography sx={{ color: '#bdbdbd' }}>{infoData.mail}</Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            paddingRight: '35px',
            paddingLeft: '35px',
          }}
        >
          <Typography variant="h5">Личная информация</Typography>
          <Typography variant="h6">
            Управляйте своей личной информацией, включая номера телефонов и адрес электронной почты, по которым с вами
            можно связаться.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '30px',
            borderRadius: '16px',
          }}
        >
          <Box
            sx={{
              width: '45%',
              height: '80px',
              bgcolor: '#ffffff',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              borderRadius: '16px',
              padding: '10px',
            }}
          >
            <Typography variant="h5">Имя:</Typography>
            <Typography sx={{ color: '#bdbdbd' }}>
              {infoData.firstName} {infoData.lastName}
            </Typography>
          </Box>
          <Box
            sx={{
              width: '45%',
              height: '80px',
              bgcolor: '#ffffff',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              borderRadius: '16px',
              padding: '10px',
            }}
          >
            <Typography variant="h5">Компания: </Typography>
            <Typography sx={{ color: '#bdbdbd' }}>{infoData.companyName}</Typography>
          </Box>
          <Box
            sx={{
              width: '45%',
              height: '80px',
              bgcolor: '#ffffff',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              borderRadius: '16px',
              padding: '10px',
            }}
          >
            <Typography variant="h5">Адрес: </Typography>
            <Typography sx={{ color: '#bdbdbd' }}>{infoData.address}</Typography>
          </Box>
          <Box
            sx={{
              width: '45%',
              height: '80px',
              bgcolor: '#ffffff',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              borderRadius: '16px',
              padding: '10px',
            }}
          >
            <Typography variant="h5">Телефон: </Typography>
            <Typography sx={{ color: '#bdbdbd' }}>+{infoData.telephone}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
