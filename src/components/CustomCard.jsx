import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Modal, Backdrop, Fade } from '@mui/material';

const CustomCard = ({ producto, agregarProducto }) => {
  const { id, nombre, precio, imagen, detalles } = producto;

  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [mostrarImagenCompleta, setMostrarImagenCompleta] = useState(false);

  const toggleDetalles = () => {
    setMostrarDetalles(!mostrarDetalles);
  };

  const toggleImagenCompleta = () => {
    setMostrarImagenCompleta(!mostrarImagenCompleta);
  };

  const handleAgregarProducto = () => {
    agregarProducto(producto);
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardActionArea onClick={toggleDetalles}>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt={nombre}
          onClick={toggleImagenCompleta}
          style={{ cursor: 'pointer' }} // Añade un estilo para cambiar el cursor al hacer clic en la imagen
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: ${precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleAgregarProducto}>
          Comprar
        </Button>
      </CardActions>
      {mostrarDetalles && (
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Detalles:
          </Typography>
          {detalles.map((detalle, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {detalle.texto}
            </Typography>
          ))}
        </CardContent>
      )}

      {/* Modal para mostrar la imagen completa */}
      <Modal
        open={mostrarImagenCompleta}
        onClose={toggleImagenCompleta}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition // Permite cerrar el modal después de la transición
        BackdropComponent={Backdrop} // Utiliza el componente Backdrop para el fondo
        BackdropProps={{
          timeout: 500, // Duración de la transición de cierre del modal
        }}
      >
        <Fade in={mostrarImagenCompleta}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <img src={imagen} alt={nombre} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
          </div>
        </Fade>
      </Modal>
    </Card>
  );
}

export default CustomCard;
