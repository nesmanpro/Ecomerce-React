## Preentrega curso React, usando Vite, NextUI y Tailwind CSS

Este es un proyecto de e-commerce desarrollado utilizando React, Vite, NextUI y Tailwind CSS. Este README simplemente es una breve descripción del proyecto y de las funcionalidades y elementos clave que he utilizado.

[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)]()
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()
[![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)]()

## Descripción del Proyecto

El proyecto tiene como objetivo crear una plataforma E-Commerce donde el usuario pueda explorar los productos por categorias, ver los detalles especificos del item seleccionado y agregar un producto al carrito (esto ultimo proximamente).

![Texto alternativo de la imagen](public/img/Grabación-de-pantalla-2023-09-16-a-las-3.35.22.gif)

## Funcionalidades Clave

### Navegación y Rutas

He configurado las siguientes rutas en la aplicación:

- `/`: Navega a la página de inicio donde los usuarios pueden ver una lista de productos.
- `/productos/:categoria`: Navega a la página de productos filtrados por categoría, donde `:id` es el identificador de la categoría.
- `/item/:id`: Navega a la página de detalles del producto individual, donde `:id` es el identificador único del producto.

### Navegación

He implementado la navegación entre diferentes partes de la aplicación utilizando React Router DOM:

- Hacer clic en el logotipo de la marca navega de regreso a la página de inicio (`/`).
- Hacer clic en un producto navega a la página de detalles de ese producto (`/item/:id`).
- Hacer clic en una categoría en la barra de navegación filtra los productos y navega a la página de productos filtrados por categoría (`/productos/:categoria`).

### Integración de Datos Asíncronos

He implementado la carga de datos asincrónicos utilizando React Hooks, como `useState`, `useEffect`, y `useParams`. Esto nos permite reaccionar a los parámetros de la URL, como `:itemId` y `:categoria`, y cargar los productos correspondientes de acuerdo con los valores de estos parámetros.
