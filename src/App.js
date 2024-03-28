// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';
import Carrito from './components/Carrito';
import CarritoIcono from './components/CarritoIcono'; // Importa el nuevo componente

const App = () => {
  
  const [carrito, setCarrito] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const itemsPerPage = 4; // Número de productos por página

  const [mostrarCarrito, setMostrarCarrito] = useState(false); // Estado para controlar la visibilidad del carrito
  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(producto => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1); // Incrementar la página actual
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1); // Decrementar la página actual
  };

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  // Lista de categorías
  const categorias = ["Ropa Para hombre", "Ropa Para mujer"];

  const filtrarPorCategoria = (categoria) => {
    // Aquí implementa la lógica para filtrar productos por categoría
    // Puedes utilizar el estado actual de los productos para realizar el filtrado
    // y actualizar los productos mostrados en el componente Productos
    // en función de la categoría seleccionada
  };

  return (
    <div>
      <Header titulo='Tienda Virtual' categorias={categorias} filtrarPorCategoria={filtrarPorCategoria} />
      <Productos carrito={carrito} agregarProducto={agregarProducto} />
      <CarritoIcono cantidadProductos={carrito.length} handleClick={toggleCarrito} /> {/* Pasa la función toggleCarrito al componente CarritoIcono */}
      {mostrarCarrito && <Carrito carrito={carrito} eliminarProducto={eliminarProducto} />} {/* Renderiza el carrito si mostrarCarrito es true */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
      <Footer fecha={new Date().getFullYear()} />
    </div>
  );
}

export default App;
