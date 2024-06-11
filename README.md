# Ecomerce React JS & Tailwind CSS

This is an e-commerce project developed using React, Vite, NextUI, and Tailwind CSS. Tailwind modals and Toastify modals have been implemented as well.

[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)]()
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()
[![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)]()

## Project Description

The project aims to create an E-Commerce platform where users can browse products by categories, view specific item details, and choose the quantity of each product to add them to the cart through a button.

![e-commerce](public/img/webPF.gif)

### Interactive Shopping Cart

One of the main features of this project is the highly interactive shopping cart. Clicking on the cart icon reveals a preview in a sidebar. From here, users have full control over their purchase:

##### Cart Preview:

Users can see a preview of the items in their cart, including details like names, quantities, and prices.

##### Remove and Empty Cart:

Users can remove items individually or empty the entire cart with a single click, providing flexibility and convenience.

##### Proceed to Checkout:

If users are satisfied with their selection, they can proceed to checkout, where they will find a more detailed version of their purchase. Here, product images are displayed along with a form that, once completed, is saved in the database upon completing the purchase, delivering a purchase ID.

![Code](public/img/cart.gif)

## Key Features

### Routes

- `/`: Navigate to the home page where users can see a list of products.
- `/products/:category`: Navigate to the page of products filtered by category, where `:id` is the category identifier.
- `/item/:id`: Navigate to the page of details of the individual product, where `:id` is the unique identifier of the product.

### Navigation

I have implemented navigation between different parts of the application using React Router DOM:

- Clicking on the brand logo navigates back to the home page (`/`).
- Clicking on a product navigates to the details page of that product (`/item/:id`).
- Clicking on a category in the navigation bar filters the products and navigates to the page of products filtered by category (`/products/:category`).
- I have implemented navigation using `useNavigate` from React Router DOM, providing a smooth and seamless user experience when switching between different parts of the application.

## Getting Data from Firebase Database

In the `ItemListContainer.jsx` file, data is fetched from the Firebase Firestore database using functions like `collection`, `getDocs`, `query`, `where`.

In the `ItemDetailContainer.jsx` file, the product ID provided in the URL parameters is used to fetch the specific details of that product from the Firebase database.

![e-commerce](public/img/contact.gif)

## Technologies

### The project makes use of the following technologies and tools:

- **ReactJS**: For developing the interactive and dynamic user interface.
- **Vite**: As the fast development environment to optimize the development experience.
- **Firebase Firestore**: For the real-time database that stores and retrieves product data.
- **React Router DOM**: For managing routes and navigation within the application.
- **TailwindCSS**: Use of Tailwind styles and components.
- **NextUI**: Use of NextUI components.
- **Toastify**: Use of modals to notify new products in the cart.

## Usage of Firebase Firestore

The project utilizes Firebase Firestore for storing and retrieving data. In the `ItemListContainer.js` and `ItemDetailContainer.js` files, Firebase Firestore functions like `collection`, `getDocs`, `query`, `where`, `doc`, and `getDoc` are used to interact with the database and fetch the necessary data to display in the application.
