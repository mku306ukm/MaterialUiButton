import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'; import { ButtonGroup, Fab, IconButton, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Box from '@mui/material/Box';
import { Fingerprint, PhotoCamera } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AlarmIcon from '@mui/icons-material/Alarm';

const MaterialUiButton = () => {
    return (
        <div>
            <h2 style={{ color: 'green' }}>Text Button</h2>
            <Button>Click Me</Button>
            <Button color='secondary'>Secondary</Button>
            <Button color='primary' href='https://google.com'>Link</Button>
            <Button disabled>Link</Button>

            <h2 style={{ color: 'green' }}>Contained Button</h2>
            <Button variant='contained' >Click Me</Button>
            <Button variant='contained' color='secondary'>Click Me</Button>
            <Button variant='contained' color='error' href='https://google.com'>Click Me</Button>
            <Button variant='contained' disabled>Click Me</Button>

            <h2 style={{ color: 'green' }}>Outlined Button</h2>
            <Button variant='outlined' >Click Me</Button>
            <Button variant='outlined' color='secondary'>Click Me</Button>
            <Button variant='outlined' color='primary' href='https://google.com'>Click Me</Button>
            <Button variant='outlined' disabled>Click Me</Button>

            <h2 style={{ color: 'green' }}>Button Size</h2>
            <Button variant='contained' size='small'>Click Me</Button>
            <Button variant='contained' color='secondary' size='medium'>Click Me</Button>
            <Button variant='contained' color='primary' href='https://google.com' size='large'>Click Me</Button>

            <h2 style={{ color: 'green' }}>Button with Icon</h2>
            <Button variant='contained' startIcon={<DeleteIcon />}>Delete</Button>
            <Button variant='contained' color='warning' endIcon={<DeleteIcon />}>Delete</Button>

            <h2 style={{ color: 'green' }}>Icon Button</h2>
            <IconButton color='error'>
                <DeleteIcon />
            </IconButton>

            <h2 style={{ color: 'green' }}>Custom Button</h2>
            <Button variant='contained' style={{ backgroundColor: 'red' }}>Custom1</Button>
            <Button variant='contained' style={{ color: 'red' }}>Custom1</Button>
            <Button variant='contained' sx={{ backgroundColor: 'black' }}>Custom2</Button>

            <h2 style={{ color: 'green' }}>Button with Click Event</h2>
            <Button variant='contained' onClick={() => console.log('Button Clicked')}>Click Me</Button>

            <h2 style={{ color: 'green' }}>Button Group</h2>
            <ButtonGroup variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <h2 style={{ color: 'green' }}>Vertical Button Group</h2>
            <ButtonGroup variant='contained' orientation='vertical' color='secondary'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <h2 style={{ color: 'green' }}>Floating Action Button</h2>
            <Fab>R</Fab>
            <Fab color='primary'> <AddIcon /> </Fab>
            <Fab color='secondary'> <EditIcon /> </Fab>
            <Fab color='secondary' variant='extended'> <NavigationIcon />Navigation </Fab>
            <Fab disabled> <FavoriteIcon /> </Fab>

            {/* //=======Self Revision======== */}

            <h2>Basic Button</h2>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            {/* The Stack component manages layout of immediate children along the vertical or horizontal axis 
                with optional spacing and/or dividers between each child. */}

            <h2>Text Button</h2>
            <Stack direction="row" spacing={2}>
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="https://www.google.com/">Link</Button>
            </Stack>

            <h2>Outlined Button</h2>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" disabled>Disabled</Button>
                <Button variant="outlined" href="https://www.youtube.com/">Link</Button>
            </Stack>

            <h2>Handling Clicks</h2>
            <Button
                onClick={() => {
                    console.log('Hi i am Umesh Kumar Mehta');
                }}
            >
                Click me
            </Button>

            <h2>Color</h2>
            <Stack direction="row" spacing={2}>
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">Success</Button>
                <Button variant="outlined" color="error">Error</Button>
            </Stack>

            <Stack direction="row" spacing={2}>
                <Button style={{ color: 'blue' }}>Secondary</Button>
                <Button variant="contained" style={{ color: 'yellow' }}>Success</Button>
                <Button variant="outlined" style={{ color: 'red' }}>Error</Button>
            </Stack>

            <h2>Sizes</h2>
            <Box sx={{ '& button': { m: 1 } }}>
                <div>
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </div>
                <div>
                    <Button variant="outlined" size="small">
                        Small
                    </Button>
                    <Button variant="outlined" size="medium">
                        Medium
                    </Button>
                    <Button variant="outlined" size="large">
                        Large
                    </Button>
                </div>
                <div>
                    <Button variant="contained" size="small">
                        Small
                    </Button>
                    <Button variant="contained" size="medium">
                        Medium
                    </Button>
                    <Button variant="contained" size="large">
                        Large
                    </Button>
                </div>
            </Box>

            <h2>Upload button</h2>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Button color="error" variant="contained" component="label">Upload<input hidden accept="image/*" multiple type="file" />
                </Button>
                <IconButton color="secondary" aria-label="upload picture" component="label"><input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                </IconButton>
            </Stack>

            <h2>Buttons with icons and label</h2>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
            </Stack>

            <h2>Icon Button</h2>
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
                <IconButton color="error" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Stack>

            <h2>Sizes</h2>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton aria-label="delete" size="small"><DeleteIcon fontSize="inherit" /></IconButton>
                <IconButton aria-label="delete" size="small"><DeleteIcon fontSize="small" /></IconButton>
                <IconButton aria-label="delete" size="large"><DeleteIcon /></IconButton>
                <IconButton aria-label="delete" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
            </Stack>

            <h2>Colors</h2>
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="fingerprint" color="error"><Fingerprint /></IconButton>
                <IconButton aria-label="fingerprint" color="success"><Fingerprint /></IconButton>
            </Stack>

        </div>
    )
}

export default MaterialUiButton

//Stack is a container. its a one dimensional container
//Here varient is property 