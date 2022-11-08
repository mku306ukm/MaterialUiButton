import { Button} from '@mui/material'
import { customStyle } from './styles'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from './theme'


import React from 'react'

const MaterialUiCustomization = () => {
  const btnStyle = { bgcolor: 'lightgreen', color: 'red' }
  return (
    <div>
      <h2>Customization</h2>
      <Button variant='contained' color='error'>Hello</Button> 
      <Button variant='contained' style={{ backgroundColor: 'red', color: 'black'}}>Hello</Button>
      <Button variant='contained' sx={{ backgroundColor: 'yellow', color: 'red' }}>Hello</Button>
      <Button variant='contained' sx={btnStyle}>Hello</Button>
      <Button variant='contained' sx={customStyle.btnNew}>Hello</Button>
      
      <ThemeProvider theme={customTheme}>
      <Button variant='contained' color='secondary'>Hello</Button>
      <Button variant='contained' color='mycolor'>Hello</Button>
      </ThemeProvider>
    </div>
  )
}

export default MaterialUiCustomization