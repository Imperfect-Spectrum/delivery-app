import { useState } from 'react'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type Info = {
  title: string
  description: string
}

const data: Info[] = [
  {
    title: 'Фанера',
    description:
      'Фанера — это многослойный древесный строительный материал, который представляет собой склееные между собой листы лущеного шпона. Обычно фанера формируется из нечетного количества листов шпона. Для увеличения механической прочности волокна в смежных листах располагаются перпендикулярно по отношению друг к другу. Такой способ производства делает фанеру не только прочной, но и обеспечивает стабильность формы листа, а также наделяет фанеру высокой сопротивляемостью к деформации по сравнению с натуральным деревом.',
  },
  {
    title: 'Труба',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    title: 'Подшипник',
    description:
      '2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    title: 'Бетон',
    description:
      '3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    title: 'Гвозди',
    description:
      '4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
]

export function Documents() {
  const [expanded, setExpanded] = useState<string | false>(false)

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
        <Accordion expanded={expanded === data.title} onChange={handleChange(data.title)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
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
          Воспользуйтесь формой для обратной связи! <Button variant="text">Открыть форму</Button>
        </Typography>
      </Box>
    </div>
  )
}
