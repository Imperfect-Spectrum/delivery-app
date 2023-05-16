import { useState } from 'react'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Modal } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { MyModalForm } from '../feedbackModal'
import { useAppSelector } from '../../../hook'
import { RootState } from '../../../store'

export function Documents() {
  const [expanded, setExpanded] = useState<string | false>(false)
  const [openModal, setOpenModal] = useState(false)
  const handleOpenCloseModal = () => setOpenModal(!openModal)

  const data = useAppSelector((state: RootState) => state.documentationData.documentationData)

  const onSubmitModal = () => {
    setOpenModal(!openModal)
  }
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft: '10px', marginBottom: '10px' }}
      >
        <Typography variant="h5">Документация</Typography>
        <Typography variant="h6">
          На этой странице вы найдете всю необходимую документацию о наших материлах.
        </Typography>
      </Box>
      {data.map((data) => (
        <Accordion expanded={expanded === data.title} onChange={handleChange(data.title)} key={data.title}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
            <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>
              {data.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" sx={{ wordBreak: 'break-word' }}>
              {data.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft: '10px', marginBottom: '10px' }}
      >
        <Typography variant="h5">Не смогли найти нужной информации?</Typography>
        <Typography variant="h6">
          Воспользуйтесь формой для обратной связи!{' '}
          <Button variant="text" onClick={onSubmitModal}>
            Открыть форму
          </Button>
        </Typography>
      </Box>
      <Modal open={openModal} onClose={handleOpenCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            borderRadius: '20px',
            p: 0,
          }}
        >
          <MyModalForm open={openModal} setOpen={setOpenModal} />
        </Box>
      </Modal>
    </div>
  )
}
