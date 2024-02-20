import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { ProductEntity } from '../types/types';

const ProductsDetails = () => {
    const { id } = useParams();
    const products: ProductEntity[] = useContext(ProductContext);
    const cartContextValue = useContext(CartContext);

    if (!cartContextValue) {
        console.error("O contexto do carrinho ou o produto não foram fornecidos corretamente.");
        return null;
    }

    const { addToCart } = cartContextValue;

    // filtro na lista de produtos para somente pegar o produto requerido
    const product = products.find((item) =>{
      if (id){
        return item.id === +id 
      }
    })

    // se não achar o produto
    if (!product){
      return <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    }

  return (
    <section className='sm:mb-18 pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-xs' src={product.image} alt={product.title} />
          </div>
          <div className='flex-1 text-center lg:text-center' >
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto'>{product.title}</h1>
            <div className='text-xl text-red-500 font-medium mb-6 '>R$ {product.price}</div>
            <p className='mb-8'>{product.description}</p>
            <button className='bg-primary py-4 px-8 text-white' onClick={() => addToCart({product})}> Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsDetails