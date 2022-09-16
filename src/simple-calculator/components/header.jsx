import {useContext} from 'react';
import { ContextProvider } from '..';
import { Box, AppBar, IconButton, Toolbar, Typography, Switch, FormControlLabel } from "@mui/material";
import { Calculate, Menu } from "@mui/icons-material";

const Header = ({onMenuClick}) => {
  const context = useContext(ContextProvider);
  const {toggleOn, setToggleOn} = context.toggleMode;

  const toggleLabel = () => toggleOn ? 'Toggle Light Mode' : 'Toggle Dark Mode';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} enableColorOnDark>
        <Toolbar>
          <IconButton
            onClick={onMenuClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display : {sm : 'block', md : 'none'}}}
          >
            <Menu />
          </IconButton>

          <Calculate fontSize='large' sx={{paddingRight : '3px'}}/>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calculator
          </Typography>

          <FormControlLabel control={<Switch color='secondary' checked={toggleOn} onChange={() => setToggleOn(!toggleOn)} />} label={toggleLabel()}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
