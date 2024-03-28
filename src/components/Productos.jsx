// Productos.js
import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomCard from "./CustomCard";
import modeloHombre1 from './modelos/modelo-hombre-1.jpg';
import modeloHombre1angular from './modelos/modelo-hombre-1-angular.jpg';
import modeloHombre1github from './modelos/modelo-hombre-1-github.jpg';
import modeloHombre1instagram from './modelos/modelo-hombre-1-instagram.jpg';
import modeloHombre1java from './modelos/modelo-hombre-1-java.jpg';
import modeloHombre1node from './modelos/modelo-hombre-1-node.jpg';
import modeloHombre1reactjs from './modelos/modelo-hombre-1-reactjs.jpg';
import modeloHombre1shalom from './modelos/modelo-hombre-1-shalom.jpg';
import modeloHombre1vuejs from './modelos/modelo-hombre-1-vuejs.jpg';
import modeloHombre1yappy from './modelos/modelo-hombre-1-yappy.jpg';

import modeloHombre2 from './modelos/modelo-hombre-2.jpg';
import modeloHombre2angular from './modelos/modelo-hombre-2-angular.jpg';
import modeloHombre2instagram from './modelos/modelo-hombre-2-instagram.jpg';
import modeloHombre2java from './modelos/modelo-hombre-2-java.jpg';
import modeloHombre2node from './modelos/modelo-hombre-2-node.jpg';
import modeloHombre2reactjs from './modelos/modelo-hombre-2-reactjs.jpg';
import modeloHombre2shalom from './modelos/modelo-hombre-2-shalom.jpg';
import modeloHombre2springboot from './modelos/modelo-hombre-2-springboot.jpg';
import modeloHombre2vuejs from './modelos/modelo-hombre-2-vuejs.jpg';
import modeloHombre2whatsapp from './modelos/modelo-hombre-2-whatsapp.jpg';
import modeloHombre2yappy from './modelos/modelo-hombre-2-yappy.jpg';

import modeloHombre3 from './modelos/modelo-hombre-3.jpg';
import modeloHombre3angular from './modelos/modelo-hombre-3-angular.jpg';
import modeloHombre3instagram from './modelos/modelo-hombre-3-instagram.jpg';
import modeloHombre3java from './modelos/modelo-hombre-3-java.jpg';
import modeloHombre3node from './modelos/modelo-hombre-3-node.jpg';
import modeloHombre3reactjs from './modelos/modelo-hombre-3-reactjs.jpg';
import modeloHombre3shalom from './modelos/modelo-hombre-3-shalom.jpg';
import modeloHombre3springboot from './modelos/modelo-hombre-3-springboot.jpg';
import modeloHombre3vuejs from './modelos/modelo-hombre-3-vuejs.jpg';
import modeloHombre3yappy from './modelos/modelo-hombre-3-yappy.jpg';

import modeloMujer1 from './modelos/modelo-mujer-1.jpg';
import modeloMujer1angular from './modelos/modelo-mujer-1-angular.jpg';
import modeloMujer1github from './modelos/modelo-mujer-1-github.jpg';
import modeloMujer1instagram from './modelos/modelo-mujer-1-instagram.jpg';
import modeloMujer1java from './modelos/modelo-mujer-1-java.jpg';
import modeloMujer1node from './modelos/modelo-mujer-1-node.jpg';
import modeloMujer1reactjs from './modelos/modelo-mujer-1-reactjs.jpg';
import modeloMujer1shalom from './modelos/modelo-mujer-1-shalom.jpg';
import modeloMujer1springboot from './modelos/modelo-mujer-1-springboot.jpg';
import modeloMujer1vuejs from './modelos/modelo-mujer-1-vuejs.jpg';
import modeloMujer1whatsapp from './modelos/modelo-mujer-1-whatsapp.jpg';
import modeloMujer1yappy from './modelos/modelo-mujer-1-yappy.jpg';

import modeloMujer2 from './modelos/modelo-mujer-2.jpg';
import modeloMujer2angular from './modelos/modelo-mujer-2-angular.jpg';
import modeloMujer2github from './modelos/modelo-mujer-2-github.jpg';
import modeloMujer2instagram from './modelos/modelo-mujer-2-instagram.jpg';
import modeloMujer2java from './modelos/modelo-mujer-2-java.jpg';
import modeloMujer2node from './modelos/modelo-mujer-2-node.jpg';
import modeloMujer2reactjs from './modelos/modelo-mujer-2-reactjs.jpg';
import modeloMujer2shalom from './modelos/modelo-mujer-2-shalom.jpg';
import modeloMujer2springboot from './modelos/modelo-mujer-2-springboot.jpg';
import modeloMujer2vuejs from './modelos/modelo-mujer-2-vuejs.jpg';
import modeloMujer2yappy from './modelos/modelo-mujer-2-yappy.jpg';

export default function Productos(props) {
  const { carrito, agregarProducto, currentPage, itemsPerPage } = props;
 
  const productos = [
    {
      id: 1,
      nombre: "Sweter para varón sin diseño modelo 1",
      precio: 10,
      categoria: "Ropa Para hombre",
      imagen: modeloHombre1,
      detalles: [
        {
          "texto": "☑️ Color: Verde oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Sin diseño"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
    }
    ,
    {
      id: 2,
      nombre: 'Sweter para varon sin diseño modelo 2',
      precio: 12,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre2,
      detalles: [
        {
          "texto": "☑️ Color: Negro oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Sin diseño"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },
    // Agregar más productos aquí...
    {
      id: 3,
      nombre: 'Sweter para varon sin diseño modelo 3',
      precio: 15,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre3,
      detalles: [
        {
          "texto": "☑️ Color: Negro claro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Sin diseño"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ],
      // Agregar más propiedades según sea necesario
    },
    {
      id: 4,
      nombre: "Sweter para varón Logo Angular modelo 1",
      precio: 15,
      categoria: "Ropa Para hombre",
      imagen: modeloHombre1angular,
      detalles: [
        {
          "texto": "☑️ Color: Verde oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Angular"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
    }
    ,
    {
      id: 5,
      nombre: "Sweter para varón Logo Github modelo 1",
      precio: 15.99,
      categoria: "Ropa Para hombre",
      imagen: modeloHombre1github,
      detalles: [
        {
          "texto": "☑️ Color: Verde oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Github"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
    }
    ,{
      id: 6,
      nombre: "Sweter para varón Logro Instagram modelo 1",
      precio: 20.99,
      categoria: "Ropa Para hombre",
      imagen: modeloHombre1instagram,
      detalles: [
        {
          "texto": "☑️ Color: Verde oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logro Instagram "
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
    }
    ,{
      id: 7,
      nombre: "Sweter para varón Logo Java modelo 1",
      precio: 30.99,
      categoria: "Ropa Para hombre",
      imagen: modeloHombre1java,
      detalles: [
        {
          "texto": "☑️ Color: Verde oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Java"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
    }
    ,{
      id: 8,
      nombre: "Sweter para varón Logo Nodejs modelo 1",
      precio: 45.99,
      categoria: "Ropa Para hombre",
      imagen: modeloHombre1node,
      detalles: [
        {
          "texto": "☑️ Color: Verde oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Nodejs"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
    }
    ,{
      id: 8,
      nombre: "Sweter para varón Logo Reactjs modelo 1",
      precio: 50.99,
      categoria: "Ropa Para hombre",
      imagen: modeloHombre1reactjs,
      detalles: [
        {
          "texto": "☑️ Color: Verde oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Reactjs"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
    }
    ,{
      id: 9,
      nombre: "Sweter para varón Logo ShalomSolutionTech modelo 1",
      precio: 60.99,
      categoria: "Ropa Para hombre",
      imagen: modeloHombre1shalom,
      detalles: [
        {
          "texto": "☑️ Color: Verde oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo ShalomSolutionTech"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
    }
    ,{
      id: 11,
      nombre: "Sweter para varón Logo Vuejs modelo 1",
      precio: 45.99,
      categoria: "Ropa Para hombre",
      imagen: modeloHombre1vuejs,
      detalles: [
        {
          "texto": "☑️ Color: Verde oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Vuejs"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
    }
    ,{
      id: 12,
      nombre: "Sweter para varón Logo Yappy modelo 1",
      precio: 35.99,
      categoria: "Ropa Para hombre",
      imagen: modeloHombre1yappy,
      detalles: [
        {
          "texto": "☑️ Color: Verde oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Yappy"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
    }
    ,{
      id: 13,
      nombre: 'Sweter para varon Logo Angular modelo 2',
      precio: 20.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre2angular,
      detalles: [
        {
          "texto": "☑️ Color: Negro oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Angular"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 14,
      nombre: 'Sweter para varon Logo Instagram modelo 2',
      precio: 22.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre2instagram,
      detalles: [
        {
          "texto": "☑️ Color: Negro oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Instagram"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 15,
      nombre: 'Sweter para varon Logo Java modelo 2',
      precio: 23.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre2java,
      detalles: [
        {
          "texto": "☑️ Color: Negro oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Java"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 16,
      nombre: 'Sweter para varon Logo Nodejs modelo 2',
      precio: 24.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre2node,
      detalles: [
        {
          "texto": "☑️ Color: Negro oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Nodejs"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 17,
      nombre: 'Sweter para varon Logo Reactjs modelo 2',
      precio: 25,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre2reactjs,
      detalles: [
        {
          "texto": "☑️ Color: Negro oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Reactjs"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 18,
      nombre: 'Sweter para varon Logo ShalomSolutionTech modelo 2',
      precio: 45.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre2shalom,
      detalles: [
        {
          "texto": "☑️ Color: Negro oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo ShalomSolutionTech"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 19,
      nombre: 'Sweter para varon Logo SpringBoot modelo 2',
      precio: 25.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre2springboot,
      detalles: [
        {
          "texto": "☑️ Color: Negro oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo SpringBoot"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 20,
      nombre: 'Sweter para varon Logo Vuejs modelo 2',
      precio: 35.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre2vuejs,
      detalles: [
        {
          "texto": "☑️ Color: Negro oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Vuejs"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 21,
      nombre: 'Sweter para varon Logo Whatsapp modelo 2',
      precio: 25.95,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre2whatsapp,
      detalles: [
        {
          "texto": "☑️ Color: Negro oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Whatsapp"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 22,
      nombre: 'Sweter para varon Logo Yappy modelo 2',
      precio: 25.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre2yappy,
      detalles: [
        {
          "texto": "☑️ Color: Negro oscuro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Yappy"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 23,
      nombre: 'Sweter para varon Logo Angular modelo 3',
      precio: 25.80,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre3angular,
      detalles: [
        {
          "texto": "☑️ Color: Negro claro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Angular"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 24,
      nombre: 'Sweter para varon Logo Instagram modelo 3',
      precio: 30.98,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre3instagram,
      detalles: [
        {
          "texto": "☑️ Color: Negro claro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Instagram"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 25,
      nombre: 'Sweter para varon Logo Java modelo 3',
      precio: 45.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre3java,
      detalles: [
        {
          "texto": "☑️ Color: Negro claro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Java"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 26,
      nombre: 'Sweter para varon Logo Nodejs modelo 3',
      precio: 55.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre3node,
      detalles: [
        {
          "texto": "☑️ Color: Negro claro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Nodejs"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 27,
      nombre: 'Sweter para varon Logo Reactjs modelo 3',
      precio: 50.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre3reactjs,
      detalles: [
        {
          "texto": "☑️ Color: Negro claro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Reactjs"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 28,
      nombre: 'Sweter para varon Logo ShalomSolutionTech modelo 3',
      precio: 74.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre3shalom,
      detalles: [
        {
          "texto": "☑️ Color: Negro claro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo ShalomSolutionTech"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 29,
      nombre: 'Sweter para varon Logo SpringBoot modelo 3',
      precio: 74.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre3springboot,
      detalles: [
        {
          "texto": "☑️ Color: Negro claro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo SpringBoot"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 30,
      nombre: 'Sweter para varon Logo Vuejs modelo 3',
      precio: 70.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre3vuejs,
      detalles: [
        {
          "texto": "☑️ Color: Negro claro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Vuejs"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 30,
      nombre: 'Sweter para varon Logo Yappy modelo 3',
      precio: 20.99,
      categoria: 'Ropa Para hombre',
      imagen: modeloHombre3yappy,
      detalles: [
        {
          "texto": "☑️ Color: Negro claro"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Yappy"
        },
        {
          "texto": "☑️ Cuello: Cuello redondo"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 31,
      nombre: 'Sweter para mujer Sin diseño modelo 1',
      precio: 20.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Sin diseño"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 32,
      nombre: 'Sweter para mujer Logo Angular modelo 1',
      precio: 30.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1angular,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Angular"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 33,
      nombre: 'Sweter para mujer Logo Github modelo 1',
      precio: 32.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1github,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Github"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 33,
      nombre: 'Sweter para mujer Logo Instagram modelo 1',
      precio: 35.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1instagram,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Instagram"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 34,
      nombre: 'Sweter para mujer Logo Java modelo 1',
      precio: 45.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1java,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Java"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 35,
      nombre: 'Sweter para mujer Logo Nodejs modelo 1',
      precio: 48.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1node,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Nodejs"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 36,
      nombre: 'Sweter para mujer Logo Reactjs modelo 1',
      precio: 50.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1reactjs,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Reactjs"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },
    {
      id: 37,
      nombre: 'Sweter para mujer Logo ShalomSolutionTech modelo 1',
      precio: 50.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1shalom,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo ShalomSolutionTech"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 38,
      nombre: 'Sweter para mujer Logo SpringBoot modelo 1',
      precio: 52.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1springboot,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo SpringBoot"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 39,
      nombre: 'Sweter para mujer Logo Vuejs modelo 1',
      precio: 54.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1vuejs,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Vuejs"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 40,
      nombre: 'Sweter para mujer Logo Whatsapp modelo 1',
      precio: 55.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1whatsapp,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Whatsapp"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 41,
      nombre: 'Sweter para mujer Logo Yappy modelo 1',
      precio: 50.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer1yappy,
      detalles: [
        {
          "texto": "☑️ Color: Azul"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Yappy"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 42,
      nombre: 'Sweter para mujer Sin diseño modelo 2',
      precio: 20.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer2,
      detalles: [
        {
          "texto": "☑️ Color: Gris"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Sin diseño"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 43,
      nombre: 'Sweter para mujer Logo Angular modelo 2',
      precio: 22.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer2angular,
      detalles: [
        {
          "texto": "☑️ Color: Gris"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Angular"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 44,
      nombre: 'Sweter para mujer Logo Github modelo 2',
      precio: 30.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer2github,
      detalles: [
        {
          "texto": "☑️ Color: Gris"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Github"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 45,
      nombre: 'Sweter para mujer Logo Instagram modelo 2',
      precio: 30.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer2instagram,
      detalles: [
        {
          "texto": "☑️ Color: Gris"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Instagram"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 46,
      nombre: 'Sweter para mujer Logo Java modelo 2',
      precio: 35.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer2java,
      detalles: [
        {
          "texto": "☑️ Color: Gris"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Java"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 47,
      nombre: 'Sweter para mujer Logo Nodejs modelo 2',
      precio: 40.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer2node,
      detalles: [
        {
          "texto": "☑️ Color: Gris"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Nodejs"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 48,
      nombre: 'Sweter para mujer Logo Reactjs modelo 2',
      precio: 40.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer2reactjs,
      detalles: [
        {
          "texto": "☑️ Color: Gris"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Reactjs"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 49,
      nombre: 'Sweter para mujer Logo ShalomSolutionTech modelo 2',
      precio: 45.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer2shalom,
      detalles: [
        {
          "texto": "☑️ Color: Gris"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo ShalomSolutionTech"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 50,
      nombre: 'Sweter para mujer Logo SpringBoot modelo 2',
      precio: 50.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer2springboot,
      detalles: [
        {
          "texto": "☑️ Color: Gris"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo SpringBoot"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 51,
      nombre: 'Sweter para mujer Logo Vuejs modelo 2',
      precio: 55.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer2vuejs,
      detalles: [
        {
          "texto": "☑️ Color: Gris"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Vuejs"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },{
      id: 52,
      nombre: 'Sweter para mujer Logo Yappy modelo 2',
      precio: 60.99,
      categoria: 'Ropa Para mujer',
      imagen: modeloMujer2yappy,
      detalles: [
        {
          "texto": "☑️ Color: Gris"
        },
        {
          "texto": "☑️ Tallas disponibles: S, M, L y XL"
        },
        {
          "texto": "☑️ Material: Algodón"
        },
        {
          "texto": "☑️ Estilo: Logo Yappy"
        },
        {
          "texto": "☑️ Cuello: Cuello tortuga"
        },
        {
          "texto": "☑️ Manga: mangas largas"
        },
        {
          "texto": "☑️ Tejido: Punto grueso"
        }
        // Puedes agregar más detalles si es necesario
      ]
      // Agregar más propiedades según sea necesario
    },
  ];
// Calcular el índice del primer y último producto en la página actual
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentProductos = productos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  return (
    <div id="productos">
    <Container sx={{ py: 4 }} maxWidth="md">
      <Typography
        component="h2"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Lista de Productos
      </Typography>
     
      {productos.map(producto => (
          <CustomCard
            key={producto.id}
            producto={producto}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
        ))}


    </Container>
  </div>
  );
}
