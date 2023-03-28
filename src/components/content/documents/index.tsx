import { Box, Typography } from '@mui/material'

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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    title: 'Бетон',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    title: 'Гвозди',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
]

export function Documents() {
  return (
    <Box>
      {data.map((data) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              margin: '20px',
              paddingLeft: '15px',
              paddingRight: '15px',
              bgcolor: '#ffffff',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
              borderRadius: '16px',
              padding: '10px',
            }}
          >
            <Typography variant="h5">{data.title}</Typography>
            <Typography variant="h6" sx={{ wordBreak: 'break-word' }}>
              {data.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
