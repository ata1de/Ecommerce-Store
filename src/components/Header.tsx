import { useContext, useEffect, useState } from 'react'
import { SideBarContext } from '../context/SideBarContext'
import { CartContext } from '../context/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg'

const Header = () => {
     // Use o hook useContext para acessar o contexto
     const contextValue = useContext(SideBarContext);
     const cartContextValue = useContext(CartContext)
     const [isactive, setIsActive] = useState(false)

     // Verifica se o contexto não é undefined
     if (!contextValue || !cartContextValue) {
       console.error("O contexto não foi fornecido corretamente.");
       return null; // ou qualquer outra lógica de tratamento para quando o contexto é undefined
     }
   
     // Extrai as propriedades do contexto
     const { isOpen, setIsOpen} = contextValue;
     const { cart } = cartContextValue

    //  função para contabilizar o número de itens no carrinho
     const cartNumber = cart ? cart.reduce((total, item) => total + item.amount, 0) : 0;
     console.log(cartNumber)

     useEffect(()=>{
        window.addEventListener('scroll', ()=>{
          window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
     })

  return (
    <header className={`${isactive ? 'bg-white py-4 shadow-md' : 'big-none py-6'} fixed w-full z-10 transition-all `}>
      <div className='container flex mx-auto items-center justify-between h-full'>
        <Link to={`/`}>
          <div>
              <img className='w-[40px]'src={logo} alt="logo" />
          </div>
        </Link>
        
        <div onClick={() => setIsOpen(!isOpen)}
            className='cursor-pointer flex relative'>
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 rounded-full 
          flex justify-center items-center text-[12px] w-[18px] h-[18px] text-white'>
            {cartNumber}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header