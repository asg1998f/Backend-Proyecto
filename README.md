# 🛍️ E-Commerce Beers API 🍻
Bienvenido al proyecto de API para gestionar un sistema básico de e-commerce. Este proyecto incluye gestión de usuarios, categorías, productos y pedidos. 🚀

./

# 🌟 Características principales
Usuarios: Registro, login, validación y manejo de tokens JWT.
Categorías: CRUD completo con filtros avanzados.
Productos: CRUD con validación, filtros y autenticación.
Pedidos: Gestión y visualización detallada de pedidos.
Seguridad: Autenticación con bcrypt y JWT.
Seeders: Datos predefinidos para pruebas rápidas.

# 📂 Estructura de la API
1. Categorías
Endpoints CRUD:
POST /categories: Crear una categoría.
PUT /categories/:id: Actualizar una categoría.
DELETE /categories/:id: Eliminar una categoría.
GET /categories: Listar todas las categorías y sus productos.
GET /categories/:id: Obtener una categoría por ID.
Filtros:
?name=nombre_categoria: Filtrar por nombre.
2. Productos
Endpoints CRUD:
POST /products: Crear un producto (requiere autenticación).
PUT /products/:id: Actualizar un producto (requiere autenticación).
DELETE /products/:id: Eliminar un producto (requiere autenticación).
GET /products: Listar productos con categorías asociadas.
GET /products/:id: Obtener un producto por ID.
Filtros:
?name=nombre_producto: Filtrar por nombre.
?price_min=10&price_max=50: Filtrar por rango de precios.
?sort=desc: Ordenar productos por precio de mayor a menor.
Validaciones: Todos los campos son obligatorios al crear o actualizar un producto.
3. Pedidos
Endpoints:
POST /orders: Crear un pedido.
GET /orders: Ver pedidos con detalles de productos asociados.
4. Usuarios
Endpoints:
POST /users/register: Registrar un usuario (con bcrypt).
POST /users/login: Login y generación de JWT.
GET /users/me: Ver perfil del usuario autenticado y sus pedidos.
POST /users/logout: Logout (invalida el token).
Validaciones: Todos los campos son obligatorios al registrar un usuario.

# 🛠️ Tecnologías utilizadas
Node.js: Backend.
Express: Framework para la API.
JWT: Autenticación segura.
bcrypt: Encriptación de contraseñas.

