import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Divider } from '@mui/material';

import './DataTable.scss';

const columns = [
  {
    field: 'photo',
    headerName: '',
    width: 75,
    renderCell: (params) => <img className='avatar' src={params.value} alt=''/>, // renderCell will render the component
  },
  { field: 'userName', headerName: 'User', width: 130 },
  { field: 'text', headerName: 'Tweet', width: 1100 },
];

export default function DataTable(props) {

  return (
    <div className='table' style={{ height: '25em', width: '80%' }}>
      <h2>Tweet List</h2>
      <Divider variant="middle" />
      
      <DataGrid
        rows={props.data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
