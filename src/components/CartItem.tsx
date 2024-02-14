import React, { useContext, useState } from 'react'
import { ProductEntity, TypeProduct } from '../types/types'
import { CartContext } from '../context/CartContext';

const CartItem = ({product}: TypeProduct) => {
  const contextValue = useContext(CartContext);

  if (!contextValue) {
      console.error("O contexto do carrinho ou o produto não foram fornecidos corretamente.");
      return null;
  }

  const { addToCart, removeToCart } = contextValue;

  const [quantity, setQuantity] = useState(product.amount);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      addToCart({product}); // Limitando a 10 unidades
    } else if (event.key === 'ArrowDown' && product.amount > 1) {
      removeToCart({product}); // Garantindo um mínimo de 1 unidade
    }
  };

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
              <input type="number" name="quantity" id="quantity" min="1"max="10"value={product.amount} onKeyDown={handleKeyDown}/>

            </div>
        </div>
    </div>
  )
}

export default CartItem