import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)`
  position: fixed;
  top: 80px; /* Ajusta la posición superior para que no cubra el encabezado */
  right: 20px; /* Ajusta la posición derecha */
  background-color: white;
  width: 300px; /* Reducir el ancho del carrito */
  padding: 20px;
  z-index: 999; /* Asegúrate de que esté por encima de otros elementos */
  overflow-y: auto; /* Agrega desplazamiento vertical si el contenido es demasiado grande */
  max-height: calc(100vh - 120px); /* Limita la altura máxima para que no ocupe toda la pantalla */
  border: 1px solid #ddd; /* Agrega un borde para resaltar el carrito */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Agrega una sombra para dar profundidad */
`;

const Carrito = ({ carrito, eliminarProducto }) => {
  // Calcular la cantidad total de artículos en el carrito
  const totalArticulos = carrito.length;

 // Calcular el precio total en el carrito y limitar a dos decimales
const totalPrecio = carrito.reduce((total, producto) => total + producto.precio, 0).toFixed(2);


  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" gutterBottom>Carrito de compras</Typography>

      {carrito.length === 0 ? (
        <Typography variant="body1">No hay elementos en el carrito</Typography>
      ) : (
        carrito.map((producto) => (
          <div key={producto.id}>
            <Typography variant="subtitle1">{producto.nombre}</Typography>
            <Typography variant="body2">Precio: ${producto.precio}</Typography>
            <Button variant="outlined" color="secondary" onClick={() => eliminarProducto(producto.id)}>Eliminar</Button>
            {/* Puedes agregar más detalles si es necesario */}
            <hr />
          </div>
        ))
      )}

      {/* Mostrar la cantidad total de artículos y el precio total */}
      <Typography variant="subtitle1">Total de Artículos: {totalArticulos}</Typography>
      <Typography variant="subtitle1">Precio Total: ${totalPrecio}</Typography>
    </StyledPaper>
  );
};

export default Carrito;


