Gestión de Productos, Categorías, Pedidos y Usuarios
Este proyecto es una API RESTful para gestionar productos, categorías, pedidos y usuarios. Está construida utilizando Node.js, Express y Sequelize con una base de datos relacional (MySQL o PostgreSQL).
./"C:\Users\asg19\Pictures\Screenshots\Captura de pantalla 2024-11-19 162245.png"
Características
Usuarios: Registro, inicio de sesión, consulta de información y logout.
Productos: CRUD completo con validaciones.
Categorías: CRUD completo con asociaciones a productos.
Pedidos: Asociación entre usuarios y productos.
Autenticación: Basada en JWT.
Seeders: Datos iniciales para productos.
Tecnologías
Backend: Node.js con Express.
Base de datos: Sequelize ORM.
Autenticación: JSON Web Tokens (JWT).
Validaciones: Sequelize y bcrypt.
Requisitos
Node.js (v16 o superior).
Base de datos relacional (MySQL/PostgreSQL).
Paquetes adicionales:
express
sequelize
bcryptjs
jsonwebtoken
dotenv
Instalación
Clonar el repositorio.

Instalar dependencias:

bash
Copiar código
npm install
Configurar las variables de entorno:

Crea un archivo .env con los valores para la base de datos, el puerto y el secreto JWT.

Crear las tablas en la base de datos:

bash
Copiar código
npx sequelize db:migrate
Cargar datos iniciales (opcional):

bash
Copiar código
npx sequelize db:seed:all
Iniciar el servidor:

bash
Copiar código
npm start
Endpoints
Usuarios
POST /users/create - Crear usuario.
POST /users/login - Iniciar sesión.
DELETE /users/logout - Cerrar sesión.
GET /users/getInfo - Información del usuario autenticado.
Productos
POST /products - Crear producto.
GET /products/getAll - Listar productos.
PUT /products/id/:id - Actualizar producto.
DELETE /products/id/:id - Eliminar producto.
GET /products/name/:name - Buscar producto por nombre.
Categorías
POST /categories - Crear categoría.
GET /categories/getAll - Listar categorías.
PUT /categories/id/:id - Actualizar categoría.
DELETE /categories/id/:id - Eliminar categoría.
GET /categories/name/:name - Buscar categoría por nombre.
Pedidos
POST /orders - Crear pedido.
GET /orders/getAll - Listar pedidos.
Modelo de Base de Datos
Usuarios:
name
email
password (hash)
role
Productos:
name
price
CategoryId
Categorías:
name
Pedidos:
description
UserId
Pruebas
Instalar herramientas como Postman o Insomnia para probar los endpoints.
Autenticación necesaria para algunos endpoints (token JWT).