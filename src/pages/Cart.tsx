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
        <div>
            <h1 className="font-semibold text-6xl mb-5">Carrinho</h1>
            <div className="mt-4 overflow-y-auto overflow-x-hidden h-[500px] lg:h-[600px]">
                <table className='w-full'>
                    <thead className="border-b-2">
                        <tr>
                            <th className="text-start font-extrabold text-xl">Produto</th>
                            <th className="font-extrabold text-xl ">Preço</th>
                            <th className="font-extrabold text-xl">Qtd.</th>
                            <th className="font-extrabold text-xl">Total</th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {cart?.map((item, index) => (
                        <tr className="border-b-4 " key={index}>
                            <td className=""><img className="max-w-[140px] ml-5 m-4" src={item.image} alt={item.description} /></td>
                            <td className="text-center text-xl">R$ {item.price}</td>
                            <td className="text-center text-xl">{item.amount}</td>
                            <td className="text-center text-xl">R$ {(item.price) * (item.amount)}</td>
                        </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className="ml-auto mt-4 text-center font-semibold text-xl p-4 border-2 w-[260px]"><span>Total:</span> R$ {total.toFixed(2)}</div>

        </div>
    </div>
  )
}

export default Cart
