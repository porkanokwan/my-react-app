import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from '@mui/material/TextField';
import { useState } from "react";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [input, setInput] = useState('');
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    // <Button variant="contained">Hello World</Button>
    // Grid ใน mui แบ่งหน้าจอเป็น 12 ส่วน
    // <Grid container justifyContent='space-between'>
    //   <Grid item xs={6} sm={4} sx={{ backgroundColor: 'red' }}>Col 1</Grid>
    //   <Grid item xs={6} sm={4} sx={{ backgroundColor: 'green' }}>Col 2</Grid>
    // </Grid>
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "salmon" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
    <TextField
    id="standard-helperText"
    label="Helper text"
    defaultValue="Default Value"
    helperText="Some important text"
    variant="standard"
    sx={{ margin: '2rem'}}
    value={input}
    onChange={e => setInput(e.target.value)}
  />
  </>
  );
}

export default App;
