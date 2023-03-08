import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

function preventDefault(event) {
  event.preventDefault();
}
const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'Cidade', headerName: 'Cidade', width: 150 },
  {
    field: 'temp',
    headerName: 'temperatura',
    type: 'number',
    width: 150,
  },
 
];

const rows = [
  { id: 1, Cidade: 'Curitiba', temp: 30 },
  { id: 2, Cidade: 'São Paulo', temp: 33},
  { id: 3, Cidade: 'Rio de Janeiro', temp: 35},
  { id: 4, Cidade: 'Fortaleza', temp: 38 },
  { id: 5, Cidade: 'Paris', temp: 15},
  { id: 6, Cidade: 'Nova Iorque', temp: 18},
  { id: 7, Cidade: 'Tokio', temp: 10 },
  { id: 8, Cidade: 'Berlim', temp: 8 },
  { id: 9, Cidade: 'Madrid', temp: 11},
  { id: 10, Cidade: 'Florianopolis', temp: 30 },
  { id: 11, Cidade: 'Porto Alegre', temp: 33},
  { id: 12, Cidade: 'Espirito Santo', temp: 35},
  { id: 13, Cidade: 'Recife', temp: 38 },
  { id: 14, Cidade: 'Salvador', temp: 15},
  { id: 15, Cidade: 'Buenos Aires', temp: 18},
  { id: 16, Cidade: 'Bogotá', temp: 10 },
  { id: 17, Cidade: 'Medelin', temp: 8 },
  { id: 18, Cidade: 'Santiago', temp: 11},
  { id: 19, Cidade: 'Guadalajara', temp: 30 },
  { id: 20, Cidade: 'Cidade do México', temp: 33},
  { id: 21, Cidade: 'Montevideu', temp: 35},
  { id: 22, Cidade: 'Foz do Iguacu', temp: 38 },
  { id: 23, Cidade: 'Santos', temp: 15},
  { id: 24, Cidade: 'Belém', temp: 18},
  { id: 25, Cidade: 'Manaus', temp: 10 },
  { id: 26, Cidade: 'Cuiabá', temp: 8 },
  { id: 27, Cidade: 'Lisboa', temp: 11},
];

export default function Deposits() {
  return (
    
    <React.Fragment>
      
      <div style={{  height: 400, width: '100%', right:1000}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </React.Fragment>
  );
}