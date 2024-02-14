import React, { createContext, useContext, useState } from "react";
import { CartContextType, ProductEntity,TypeProduct } from "../types/types";

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartContext = createContext<CartContextType|undefined>(undefined);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<ProductEntity[]>([]);

    const addToCart = ({product}: TypeProduct) => {
        const newItem = {...product, amount: 1}
        // checar se o item ja está no carrinho
        const cartItem = cart.find((item) => {
            return item.id == product.id
        })
        // Se o item ja está no carrinho executará esse bloco de codigo
        if (cartItem) {
            // Faz a verificação se o id do item é o mesmo que o carrinho, 
            //se for ele aumentará um no amount
            const newCart = [...cart].map(item => {
                if (item.id == product.id){
                    return {...item, amount:cartItem.amount + 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }};

    const removeToCart = ({product}: TypeProduct) =>{
        const cartItem = cart.find((item) => {
            return item.id === product.id
        })

        if (cartItem) {
            const newCart = [...cart].map(item =>{
                if (item.id === product.id){
                    return {...item, amount:item.amount -1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else{
            console.log('o item não está no carrinho')
        }
    }
    

    return (
        <CartContext.Provider value={{ cart, addToCart, removeToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
