import { useContext } from 'react'

import {IoMdArrowForward} from 'react-icons/io'
// import {FiTrash2} from 'react-icons/fi'
import { SideBarContext } from '../context/SideBarContext'
import { CartContext } from '../context/CartContext';


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
   const { isOpen, setIsOpen, handleCloser } = contextValue;
   const { cart } = cartContextValue

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full' } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:w-[30vw]
    transition-all duration-300 z-20 px-4 lg:px-[35px]`}>

      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
        <div className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward onClick={() => setIsOpen(!isOpen)} className='text-2xl'/>
        </div>
      </div>
      <div>
        {cart ? (
          cart.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </div>
    </div>
  )
}

export default SideBar