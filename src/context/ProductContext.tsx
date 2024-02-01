import React, { ReactNode, createContext, useEffect, useState } from 'react'

interface ProductProviderProps {
    children: ReactNode;
  } 

export const ProductContext = createContext<any[]>([]);

const ProductProvider: React.FC<ProductProviderProps> = ({ children })=> {
    // estado do produto
    const [product, setProduct] = useState([]);

    useEffect(() =>{
        const fetchProducts =async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data =  await response.json()
            console.log(data)
            setProduct(data)
        };
        fetchProducts()
    }, [])
    return <ProductContext.Provider value={product}>{children}</ProductContext.Provider>
}

export default ProductProvider
