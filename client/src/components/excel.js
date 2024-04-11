import * as React from 'react';
import { useSelector } from 'react-redux';
import * as xlsx from 'xlsx';
// import Button from '@mui/joy/Button';
import { Button } from '@mui/material';

import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';
import FileSaver from 'file-saver';
import { Icon } from 'semantic-ui-react'


export default function MyExportButton() {
  const data = useSelector(state => state.employees.employees);
  const handleExport = () => {
    const worksheet = xlsx.utils.json_to_sheet(data);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'My Data');
    xlsx.writeFile(workbook, 'my-data.xlsx', { bookType: 'xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  };

  return (
    <>
      <Button variant="outlined" onClick={handleExport}>
        <Icon name='download' />
        <b className="text">Export to Excel</b>
      </Button>
      {/* </Icon> */}
    </>
  );
}


