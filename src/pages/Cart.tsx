import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
    const contextCart = useContext(CartContext)

    if (!contextCart) {
        console.error("O contexto do carrinho não foi fornecido corretamente.");
        return null; // ou qualquer outra lógica de tratamento para quando o contexto é undefined
      }
    
      const { cart, total } = contextCart
  return (
    <div className="flex flex-col justify-center h-screen mx-5">
        <h1 className="font-medium text-4xl">Carrinho</h1>
        <div className="mt-4">
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Qtd.</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className="">
                    {cart?.map((item, index) => (
                        <tr className="" key={index}>
                            <td><img className="max-w-[90px]" src={item.image} alt={item.description} /></td>
                            <td>R$ {item.price}</td>
                            <td>{item.amount}</td>
                            <td>R$ {(item.price) * (item.amount)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="mt-4"><span>Total:</span> R$ {total.toFixed(2)}</div>
    </div>
  )
}

export default Cart
