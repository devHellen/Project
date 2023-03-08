import { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Box from '@mui/material/Box';

import List from '@mui/material/List';

import Divider from '@mui/material/Divider';

import { mainListItems, secondaryListItems } from './listItems';
import Toolbar from '@mui/material/Toolbar';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Chart from './Chart';

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
  





function App() {
  const [city, setCity] = useState("Curitiba");
  const [weatherForecast, setWeatherForecast] = useState(null)

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=cb636d2c5edd492e9c3203210230703&q=${city}&lang=pt`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()

        }
      })
      .then((data) => {
        setWeatherForecast(data)
      });
  };

  return (
   
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline /> 
          <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            
        <Drawer>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
           
          </Toolbar>
          <Divider />
        
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          
          </List>
        </Drawer>
        
        <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            
          </List>
          
          
    <div>
      <AppBar className="navbar navbar-expand-md navbar-dark bg-dark md-4">
        <a className="navbar-brand text-white">
          Previsão do Tempo
        </a>
      </AppBar>

      <main className="container">
        <div className="bg-light">
          <h1>
            Consulte a previsão do tempo da sua cidade
          </h1>
          <p>
            Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar
          </p>
          <div className="row mb-4">
            <div className="col-md-6">
              <input
                onChange={handleChange}
                className="form-control"
                value={city}
              />
            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary">Pesquisar</button>


          {weatherForecast ? (
            <div>
              <div className="mt-4 d-flex align-items-center">
                <div>
                  <img src={weatherForecast.current.condition.icon} />
                </div>

                <div>
                  <h3>Hoje o dia está: {weatherForecast.current.condition.text}</h3>

                  <p className='lead'>
                    Temperatura: {weatherForecast.current.temp_c}º
                  </p>
                </div>

              </div>
            </div>

          ) : null}


        </div>
      </main>
    </div>
 


    </Toolbar>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
<Grid>
          {/* Chart */}
          <Grid  >
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          </Grid>
</Container>
   </AppBar>
  

  
   
    </Box>
   
    </ThemeProvider>
    
  );
  
}

export default App;