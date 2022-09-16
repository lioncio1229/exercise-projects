import './style.css';
import Main from "./main";
import React, {useState} from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { green } from '@mui/material/colors';

export const ContextProvider = React.createContext();

const SimpleCalculator = () => {
  const [toggleOn, setToggleOn] = useState(false);
  
  const getDesignToken = toggleOn => ({
    palette : {
      mode : toggleOn ? 'dark' : 'light',
      primary : {
        main : green['A700'],
      },
      secondary : {
        main : '#388e3c'
      },
      contrastThreshold : 0,
    },
    components : {
      MuiSwitch : {
        styleOverrides : {
          track : {
            backgroundColor : 'white'
          }
        }
      },
      MuiInputBase : {
        styleOverrides : {
          input : {
            color : green['A700'],
            fontSize : '1.2rem'
          }
        }
      }
    }
  });

  const theme = React.useMemo(() => createTheme(getDesignToken(toggleOn)), [toggleOn]);

  return (
    <ContextProvider.Provider value={ {toggleMode : {toggleOn, setToggleOn}} }>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Main />
      </ThemeProvider>
    </ContextProvider.Provider>
  );
};

export default SimpleCalculator;
