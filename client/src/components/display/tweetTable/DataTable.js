import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import './DataTable.scss';

const columns = [
  { field: 'photo', headerName: '', width: 70 },
  { field: 'userName', headerName: 'User', width: 130 },
  { field: 'text', headerName: 'Tweet', width: 1600 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export default function DataTable(props) {
    console.log(props.data)

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
