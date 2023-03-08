import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


export const mainListItems = (

  
  <React.Fragment>

    <ListItemButton>
      <ListItemIcon>
      <DashboardIcon />        
      </ListItemIcon>
      <ListItemText primary="Visão Geral" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <CurrencyExchangeIcon />   
      </ListItemIcon>
      <ListItemText primary="Análise" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <PersonOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Conta" />
    </ListItemButton>
   
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Previsões do Tempo
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mês Passado" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mês Atual" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Ano Atual" />
    </ListItemButton>
  </React.Fragment>
);
