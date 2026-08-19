# Paradise Nursery - E-Commerce App

Paradise Nursery es una aplicación web de comercio electrónico desarrollada con **React** y **Redux Toolkit**. Permite a los usuarios explorar plantas de interior categorizadas, agregarlas o eliminarlas de un carrito de compras y gestionar dinámicamente las cantidades y totales a pagar.

---

## 🚀 Funcionalidades Principales

* **Página de Inicio (Landing Page):** Presentación atractiva de Paradise Nursery con botón *"Get Started"* para ingresar al catálogo.
* **Catálogo de Productos:** Presentación visual de plantas agrupadas por categorías (p. ej., Plantas Purificadoras de Aire, Plantas Aromáticas).
* **Gestión de Carrito (Redux State):**
  * Agregar productos al carrito directamente desde la lista.
  * Botones deshabilitados dinámicamente cuando un producto ya está en el carrito.
  * Modificación de cantidades (incrementar/decrementar) e incremento automático del contador global en el encabezado.
  * Cálculo dinámico del costo total de la compra.
* **Navegación Fluida:** Transición entre la landing page, el catálogo y el carrito de compras sin recargar la página.

---

## 🛠️ Tecnologías Utilizadas

* **React** (Componentes funcionales y Hooks)
* **Redux Toolkit** (Gestión de estado global con `createSlice`)
* **React-Redux** (`useDispatch`, `useSelector`)
* **CSS3** (Estilos adaptativos y diseño visual)
* **JavaScript (ES6+)**

---

## 📂 Estructura del Proyecto

```text
Proyecto_Final/
├── public/
│   └── index.html
├── src/
│   ├── AboutUs.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── CartItem.jsx
│   ├── CartSlice.jsx
│   ├── index.css
│   ├── index.js
│   ├── ProductList.css
│   ├── ProductList.jsx
│   └── store.js
├── package.json
└── README.md
