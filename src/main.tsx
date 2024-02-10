import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProductProvider from './context/ProductContext.tsx'
import SideBarProvider from './context/SideBarContext.tsx'
import CartProvider, { CartContext } from './context/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>
)
