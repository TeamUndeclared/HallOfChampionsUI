import { DataGrid } from '@material-ui/data-grid';
import React, { useState, useEffect } from 'react';
import { useDemoData } from '@material-ui/x-grid-data-generator';


const Pagination = () => {

  const [images, setImages] = useState('');
  const [page, setPageCounter] = useState(0);

  const { data } = useDemoData({
    dataset: 'Commodity',
    rowLength: 2,
    maxColumns: 2,
  });

  return (
    <div>
    <DataGrid Pagination {...data } />
    </div>
  )
}

export default Pagination;