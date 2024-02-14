import { useContext } from 'react'

import {IoMdArrowForward, IoMdTrash} from 'react-icons/io'
// import {FiTrash2} from 'react-icons/fi'
import { SideBarContext } from '../context/SideBarContext'
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem'
// import FiTrash2 from 'react-icons/fi';


const SideBar = () => {
  // Use o hook useContext para acessar o contexto
  const contextValue = useContext(SideBarContext);
  const cartContextValue = useContext(CartContext)
  // Verifica se o contexto não é undefined
  if (!contextValue || !cartContextValue) {
    console.error("O contexto da barra lateral não foi fornecido corretamente.");
    return null; // ou qualquer outra lógica de tratamento para quando o contexto é undefined
  }
  // Extrai as propriedades do contexto
  const { isOpen, setIsOpen } = contextValue;
  const { cart, clearCart } = cartContextValue

  // função para contabilizar quantos itens tem no carrinho
  const cartNumber = cart ? cart.reduce((total, item) => total + item.amount, 0) : 0;

  console.log(cartNumber)
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full' } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:w-[30vw]
    transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag ({cartNumber})</div>
        <div className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward onClick={() => setIsOpen(!isOpen)} className='text-2xl'/>
        </div>
      </div>
      <div>
        {/* Verifcação se o carrinho é undefined */}
        {cart ? (
          cart.map((item) => {
            return <CartItem key={item.id} product={item}/>;
          })
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </div>
      <div className='flex flex-col gap-y-3 py-4'>
        <div className='flex h-full justify-between items-center'>
          <div className='font-semibold uppercase'><span className='mr-2'>Total:</span>$1000</div>
          <div className=' hover:bg-pink-300 cursor-pointer py-4 bg-pink-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <IoMdTrash onClick={() => clearCart()}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar