import { AppBar, Button, IconButton, Link, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Navbar = () => {
  return (
    
     
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuItem />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" variant='contained'><Link to='/'>Login</Link></Button>
          <Button color="inherit" variant='contained'><Link to='/signup'>Signup</Link></Button>
          <Button color="inherit"><Link to="/contact"style={{color:'white',textDecoration:'none'}}>Contact</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
   
  )
}

export default Navbar
