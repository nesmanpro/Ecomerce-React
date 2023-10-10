## Proyecto final curso React.

Este es un proyecto de e-commerce desarrollado utilizando React, Vite, NextUI y Tailwind CSS, en la que se han implementado modales de tailwind y tambien de toastify.

[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)]()
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()
[![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)]()

## Descripción del Proyecto

El proyecto tiene como objetivo crear una plataforma E-Commerce donde el usuario pueda explorar los productos por categorias, ver los detalles especificos del item seleccionado, elegir la cantidad de unidades de cada producto que mediante un boton podrá agregarlos al carrito.

![e-commerce](public/img/webPF.gif)

### Carrito de Compras Interactivo

Una de las características principales de este proyecto es el carrito de compras altamente interactivo. Al hacer clic en el icono del carrito, aparece un preview en una barra lateral. Desde aquí, los usuarios tienen un control completo sobre su compra:

##### Vista Previa del Carrito:

Los usuarios pueden ver una vista previa de los artículos en su carrito, incluyendo detalles como nombres, cantidades y precios.

##### Eliminar y Vaciar el Carrito:

Los usuarios pueden eliminar artículos individualmente o vaciar todo el carrito con un solo clic, lo que brinda flexibilidad y comodidad.

##### Continuar al Checkout:

Si los usuarios están satisfechos con su selección, pueden proceder al checkout, donde encontrarán una versión más detallada de su compra. Aquí, se muestran imágenes de los productos y un formulario que, una vez completado, se guarda en la base de datos al finalizar la compra entregando un ID identificador de la compra.

![Codigo](public/img/cart.gif)

## Funcionalidades Clave

### Rutas

- `/`: Navega a la página de inicio donde los usuarios pueden ver una lista de productos.
- `/productos/:categoria`: Navega a la página de productos filtrados por categoría, donde `:id` es el identificador de la categoría.
- `/item/:id`: Navega a la página de detalles del producto individual, donde `:id` es el identificador único del producto.

### Navegación

He implementado la navegación entre diferentes partes de la aplicación utilizando React Router DOM:

- Hacer clic en el logotipo de la marca navega de regreso a la página de inicio (`/`).
- Hacer clic en un producto navega a la página de detalles de ese producto (`/item/:id`).
- Hacer clic en una categoría en la barra de navegación filtra los productos y navega a la página de productos filtrados por categoría (`/productos/:categoria`).
- He implementado la navegación utilizando `useNavigate` de React Router DOM, lo que brinda una experiencia de usuario suave y sin problemas al cambiar entre diferentes partes de la aplicación.

## Obteniendo Datos de la Base de Datos Firebase

En el archivo `ItemListContainer.jsx`, se obtienen los datos de la base de datos Firebase Firestore utilizando las funciones `collection`, `getDocs`, `query`, `where`.

En el archivo `ItemDetailContainer.jsx`, se utiliza el ID del producto proporcionado en los parámetros de la URL para obtener los detalles específicos de ese producto de la base de datos Firebase

![e-commerce](public/img/contact.gif)

## Tecnologias

### El proyecto hace uso de las siguientes tecnologías y herramientas:

- **ReactJS**: Para el desarrollo de la interfaz de usuario interactiva y dinámica.
- **Vite**: Como el entorno de desarrollo rápido para optimizar la experiencia de desarrollo.
- **Firebase Firestore**: Para la base de datos en tiempo real que almacena y recupera los datos de los productos.
- **React Router DOM**: Para la gestión de las rutas y la navegación dentro de la aplicación.
- **TailwindCSS**: Uso de estilos y componentes de Tailwind.
- **NextUI**: Uso de componentes NextUI.
- **Toastify**: Uso de modales para notificar nuevos productos en el carrito.

## Uso de Firebase Firestore

El proyecto utiliza Firebase Firestore para almacenar y recuperar datos. En los archivos `ItemListContainer.js` e `ItemDetailContainer.js`, se utilizan funciones de Firebase Firestore como `collection`, `getDocs`, `query`, `where`, `doc` y `getDoc` para interactuar con la base de datos y obtener los datos necesarios para mostrar en la aplicación.
