import {  useContext } from 'react'
import { TypeProduct } from '../types/types'
import { CartContext } from '../context/CartContext';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';

const CartItem = ({product}: TypeProduct) => {
  const contextValue = useContext(CartContext);

  if (!contextValue) {
      console.error("O contexto do carrinho ou o produto não foram fornecidos corretamente.");
      return null;
  }

  const { addToCart, removeToCart, deleteToCartX } = contextValue;

  console.log(product.id)
  return (
    <div className="border-b z  ">
        <div className=' py-2 lg:px-6 w-full min-h-[150px] flex items-center
        gap-x-5 justify-between'>
            <div className='flex items-center gap-x-2'>
              <img className='max-w-[80px]' src={product.image} alt={product.title} />
              <Link to={`/products/${product.id}`}>
                <div className=' flex-col flex gap-y-2 text-sm uppercase font-medium max-w[240px] text-primary hover:underline cursor-pointer'>
                  <p >{product.title}</p>
                  <p>R$ {product.price}</p>
                </div>
              </Link>
            </div>
            <div>
              <p className='mb-2 text-md font-semibold text-right'>{`R$ ${(product.amount * product.price).toFixed(2)}`}</p>
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