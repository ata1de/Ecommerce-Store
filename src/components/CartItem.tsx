import React from 'react'
import { ProductEntity, TypeProduct } from '../types/types'
import { Link } from 'react-router-dom'

const CartItem = ({product}: TypeProduct) => {
  return (
    <div>
        <div className='w-full min-h-[150px] flex items-center
        gap-x-4'>
            <div>
                <Link to={`product/${product.id}`}>
                    <img className='max-w-[80px]' src={product.image} alt={product.title} />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CartItem