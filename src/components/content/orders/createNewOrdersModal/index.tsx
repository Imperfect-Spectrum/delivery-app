import { Box } from '@material-ui/core'
import { Button, TextField, Typography, MenuItem } from '@mui/material'
import { useForm, SubmitHandler, Controller, useFormState } from 'react-hook-form'
import { Info } from '..'
import Select from '@mui/material/Select'
import AddIcon from '@mui/icons-material/Add'
interface InfoInForm {
  name: string
  gost: string
  size: string
  material: string
  count: string
  number: string
}

export function MyModalCreateForm({
  openCreateModal,
  setOpenCreateModal,
  data,
}: {
  openCreateModal: boolean
  setOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>
  data: Info[]
}) {
  const { handleSubmit, control } = useForm<InfoInForm>({
    defaultValues: {
      name: '',
      gost: '',
      size: '',
      material: '',
      count: '',
      number: '',
    },
  })
  const { errors } = useFormState({
    control,
  })

  const onSubmit: SubmitHandler<InfoInForm> = (data) => {
    console.log(data)
  }

  function getUniqueValues(data: Info[]): { name: string[]; material: string[]; gost: string[] } {
    const uniqueNames = Array.from(new Set(data.map((item) => item.name)))
    const uniqueMaterials = Array.from(new Set(data.map((item) => item.material)))
    const uniqueGost = Array.from(new Set(data.map((item) => item.gost)))
    return { name: uniqueNames, material: uniqueMaterials, gost: uniqueGost }
  }

  const uniqueValues = getUniqueValues(data)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        margin: 'auto',
        width: '100%',
        height: '100%',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.35)',
        borderRadius: '20px',
        bgcolor: '#ffffff',
      }}
    >
      <Typography variant="h4">Создайте заказ</Typography>
      <Typography sx={{ color: 'black', textAlign: 'left', marginTop: '25px' }}>Название</Typography>
      <Controller
        name="name"
        control={control}
        render={(field) => (
          <Select
            {...field}
            sx={{ width: '100%', textAlign: 'left' }}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 200,
                },
              },
            }}
          >
            {uniqueValues.name.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        )}
      />

      <Typography sx={{ color: 'black', textAlign: 'left', marginTop: '25px' }}>Материал</Typography>
      <Controller
        name="material"
        control={control}
        render={(field) => (
          <Select
            {...field}
            sx={{ width: '100%', textAlign: 'left' }}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 200,
                },
              },
            }}
          >
            {uniqueValues.material.map((material) => (
              <MenuItem key={material} value={material}>
                {material}
              </MenuItem>
            ))}
          </Select>
        )}
      />

      <Typography sx={{ color: 'black', textAlign: 'left', marginTop: '25px' }}>ГОСТ</Typography>
      <Controller
        name="gost"
        control={control}
        render={(field) => (
          <Select
            {...field}
            sx={{ width: '100%', textAlign: 'left' }}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 200,
                },
              },
            }}
          >
            {uniqueValues.gost.map((gost) => (
              <MenuItem key={gost} value={gost}>
                {gost}
              </MenuItem>
            ))}
          </Select>
        )}
      />

      <Typography sx={{ color: 'black', textAlign: 'left', marginTop: '25px' }}>Размер</Typography>
      <Controller
        control={control}
        name="size"
        render={({ field }) => (
          <TextField
            label="Размер"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            error={!!errors.size?.message}
          />
        )}
      />

      <Typography sx={{ color: 'black', textAlign: 'left', marginTop: '25px' }}>Количество</Typography>
      <Controller
        control={control}
        name="count"
        render={({ field }) => (
          <TextField
            label="Количество"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            error={!!errors.count?.message}
          />
        )}
      />

      <Typography sx={{ color: 'black', textAlign: 'left', marginTop: '25px' }}>Номер заказа</Typography>
      <Controller
        control={control}
        name="number"
        render={({ field }) => (
          <TextField
            label="Номер заказа"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            error={!!errors.number?.message}
          />
        )}
      />
      <Box sx={{ display: 'flex' }}>
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
            marginRight: '100px',
          }}
        >
          Создать
        </Button>

        <Button
          type="button"
          variant="contained"
          color="warning"
          sx={{
            marginTop: 2,
            width: '50px',
          }}
        >
          <AddIcon />
        </Button>
      </Box>
    </Box>
  )
}
