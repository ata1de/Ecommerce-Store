export interface ListTypeProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    rating :{
        rate: number;
        count: number;
    }
    description: string;
    // ... outras propriedades
}

export type TypeProduct = {
    product:{
        category: string;
        description: string;
        id: number;
        image: string;
        price: number;
        rating :{
            rate: number;
            count: number;
        }
        title: string;
    }
}