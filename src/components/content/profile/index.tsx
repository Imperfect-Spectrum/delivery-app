import { Box, Typography, Button, Modal } from '@mui/material'
import { useState } from 'react'
import { MyModalForm } from './profile-modal'
import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import CallIcon from '@mui/icons-material/Call'
import BadgeIcon from '@mui/icons-material/Badge'
import FactoryIcon from '@mui/icons-material/Factory'
import { useAppDispatch, useAppSelector } from '../../../hook'
import { RootState } from '../../../store'

export function Profile() {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenCloseModal = () => setOpenModal(!openModal)
  const [changeData, setChangeData] = useState('')
  const [changeTypeData, setChangeTypeData] = useState('')

  const profileData = useAppSelector((state: RootState) => state.profileData)

  const onSubmit = () => {
    setOpenModal(!openModal)
  }

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
            {profileData.infoData.firstName} {profileData.infoData.lastName}
          </Typography>
          <Typography sx={{ color: '#bdbdbd' }}>{profileData.infoData.mail}</Typography>
          <Button
            color="warning"
            variant="contained"
            size="medium"
            sx={{ width: '80%', marginTop: '20px' }}
            onClick={onSubmit}
          >
            Обновить информацию
          </Button>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Box>
                <Typography variant="h5">Имя: </Typography>
                <Typography sx={{ color: '#bdbdbd', textAlign: 'left' }}>{profileData.infoData.firstName}</Typography>
              </Box>
              <BadgeIcon fontSize="large" color="primary" />
            </Box>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Box>
                <Typography variant="h5">Фамилия: </Typography>
                <Typography sx={{ color: '#bdbdbd', textAlign: 'left' }}>{profileData.infoData.lastName}</Typography>
              </Box>

              <BadgeIcon fontSize="large" color="primary" />
            </Box>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Box>
                <Typography variant="h5">Компания: </Typography>
                <Typography sx={{ color: '#bdbdbd', textAlign: 'left' }}>{profileData.infoData.companyName}</Typography>
              </Box>
              <FactoryIcon fontSize="large" color="primary" />
            </Box>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Box>
                <Typography variant="h5">Адрес: </Typography>
                <Typography sx={{ color: '#bdbdbd', textAlign: 'left' }}>{profileData.infoData.address}</Typography>
              </Box>
              <HomeIcon fontSize="large" color="primary" />
            </Box>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Box>
                <Typography variant="h5">Телефон: </Typography>
                <Typography sx={{ color: '#bdbdbd', textAlign: 'left' }}>+{profileData.infoData.telephone}</Typography>
              </Box>
              <CallIcon fontSize="large" color="primary" />
            </Box>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Box>
                <Typography variant="h5">Почта: </Typography>
                <Typography sx={{ color: '#bdbdbd', textAlign: 'left' }}>{profileData.infoData.mail}</Typography>
              </Box>
              <EmailIcon fontSize="large" color="primary" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Modal open={openModal} onClose={handleOpenCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            p: 4,
            margin: 'auto',
          }}
        >
          <MyModalForm />
        </Box>
      </Modal>
    </Box>
  )
}
