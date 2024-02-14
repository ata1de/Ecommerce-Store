import React, { useContext } from 'react'
import { ProductEntity, TypeProduct } from '../types/types'
import { CartContext } from '../context/CartContext';

const CartItem = ({product}: TypeProduct) => {
  const contextValue = useContext(CartContext);

  if (!contextValue) {
      console.error("O contexto do carrinho ou o produto não foram fornecidos corretamente.");
      return null;
  }

  const { addToCart } = contextValue;
  console.log(product.id)
  return (
    <div className="border-b">
        <div className='w-full min-h-[150px] flex items-center
        gap-x-4'>
            <div>
              <img className='max-w-[80px]' src={product.image} alt={product.title} />
            </div>
            <div className='font-semibold'>
              <p >{product.title}</p>
            </div>
            <div>
              <p>R$ {product.price}</p>
              <input type="number" name="quantity" id="quantity" min="1"max="10"value={product.amount} onChange={()=> addToCart({product})}/>

            </div>
        </div>
    </div>
  )
}

export default CartItem