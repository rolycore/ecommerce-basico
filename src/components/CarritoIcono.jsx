import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const CarritoIcono = ({ cantidadProductos, handleClick }) => {
  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', cursor: 'pointer' }} onClick={handleClick}>
      <Badge badgeContent={cantidadProductos} color="primary">
        <ShoppingCartIcon fontSize="large" />
      </Badge>
    </div>
  );
};

export default CarritoIcono;
