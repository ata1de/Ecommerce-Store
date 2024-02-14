import React, { useContext } from 'react'
import { SideBarContext } from '../context/SideBarContext'
import { BsBag } from 'react-icons/bs';

const Header = () => {

     // Use o hook useContext para acessar o contexto
     const contextValue = useContext(SideBarContext);

     // Verifica se o contexto não é undefined
     if (!contextValue) {
       console.error("O contexto da barra lateral não foi fornecido corretamente.");
       return null; // ou qualquer outra lógica de tratamento para quando o contexto é undefined
     }
   
     // Extrai as propriedades do contexto
     const { isOpen, setIsOpen} = contextValue;

  return (
    <header className='bg-pink-200'>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='text-2xl cursor-pointer flex relative' />
      </div>
    </header>
  )
}

export default Header