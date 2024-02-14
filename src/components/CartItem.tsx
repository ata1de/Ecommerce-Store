import React, { ChangeEvent, useContext, useState } from 'react'
import { ProductEntity, TypeProduct } from '../types/types'
import { CartContext } from '../context/CartContext';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

const CartItem = ({product}: TypeProduct) => {
  const contextValue = useContext(CartContext);

  if (!contextValue) {
      console.error("O contexto do carrinho ou o produto não foram fornecidos corretamente.");
      return null;
  }

  const { addToCart, removeToCart, deleteToCartX } = contextValue;
  const [quantity, setQuantity] = useState(product.amount)

  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };
  // Função para determinar a mudança de amount dos itens
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      addToCart({product}); // Limitando a 10 unidades
    } else if (event.key === 'ArrowDown' && product.amount > 1) {
      removeToCart({product}); // Garantindo um mínimo de 1 unidade
    }
  };

  console.log(product.id)
  return (
    <div className="border-b z  ">
        <div className=' py-2 lg:px-6 w-full min-h-[150px] flex items-center
        gap-x-5 justify-between'>
            <div className='flex items-center gap-x-2'>
              <img className='max-w-[80px]' src={product.image} alt={product.title} />
              <div className=' flex-col flex gap-y-2 text-sm uppercase font-medium max-w[240px] text-primary hover:underline cursor-pointer'>
                <p >{product.title}</p>
                <p>{product.price}</p>
              </div>
            </div>
            <div>
              <p className='mb-2 text-md font-semibold text-right'>{`$ ${(product.amount * product.price).toFixed(2)}`}</p>
              <div className='flex items-center gap-x-3'>
                <div className=' gap-x-1 flex flex-1 max-w[100px] items-center justify-center h-full border'>
                  <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                    <IoMdRemove onClick={() => removeToCart({product})}/>
                  </div>
                  <div className='h-full flex justify-center items-center px-3'>
                    {product.amount}  
                  </div>
                  <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                    <IoMdAdd onClick={() => addToCart({product})}/>
                  </div>
                </div>
                <IoMdClose onClick={() => deleteToCartX({product})} className='text-gray-500 hover:text-red-500 transition cursor-pointer'/>
              </div>

            </div>
        </div>
    </div>
  )
}

export default CartItem