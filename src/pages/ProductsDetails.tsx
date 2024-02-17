import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { ProductEntity } from '../types/types';

const ProductsDetails = () => {
    const { id } = useParams();
    const products: ProductEntity[] = useContext(ProductContext);
    const cartContextValue = useContext(CartContext);

    if (!cartContextValue) {
        console.error("O contexto do carrinho ou o produto não foram fornecidos corretamente.");
        return null;
    }

    const { addToCart } = cartContextValue;

    // filtro na lista de produtos para somente pegar o produto requerido
    const product = products.find((item) =>{
      if (id){
        return item.id === +id 
      }
    })

    // se não achar o produto
    if (!product){
      return <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    }

  return (
    <div>ProductsDetails</div>
  )
}

export default ProductsDetails