export interface ProductEntity {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    rating:{
        rate: number;
        count: number;
    }
    description: string;
    amount: number
    // ... outras propriedades
}

export type TypeProduct = {
    product:ProductEntity
}
  
  // export interface Cart {
  //   products: ProductEntity[];
  //   subtotal: number;
  //   discount: number;
  //   // outras propriedades relevantes
  // }
  
  export interface CartContextType {
    cart?: ProductEntity[];
    addToCart: (product: TypeProduct) => void;
    removeToCart: (product: TypeProduct) => void;
    clearCart: () => void;
    deleteToCartX: (product: TypeProduct) => void;
    total: Number
    // updateCart?: (cart: Cart) => void;
    // outras funções e propriedades relevantes
}
