import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { ListTypeProduct } from '../types/types';

interface ProductProviderProps {
    children: ReactNode;
} 

export const ProductContext = createContext<ListTypeProduct[]>([]);

const ProductProvider: React.FC<ProductProviderProps> = ({ children })=> {
    // estado do produto
    const [listProduct, setlistProduct] = useState<ListTypeProduct[]>([]);

    useEffect(() =>{
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data =  await response.json()
            setlistProduct(data)
        };
        fetchProducts()
    }, [])
    return <ProductContext.Provider value={listProduct}>{children}</ProductContext.Provider>
}

export default ProductProvider
