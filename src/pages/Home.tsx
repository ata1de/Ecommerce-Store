import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

// Importe o tipo Product do arquivo onde ele é definido
import { ProductEntity } from '../types/types';
import Product from '../components/Product';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export const Home = () => {
  // Explicitamos o tipo do contexto ao utilizar useContext
  const products: ProductEntity[] = useContext(ProductContext);
  // console.log(products);

  // conseguir somente a categoria de roupa feminina e masculina
  const filteredProduct = products.filter( (item) => {
    return (item.category === "men's clothing"|| item.category === "women's clothing"
    ); 
  });
  // console.log(filteredProduct)

  return (
    <div>
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5
           gap-7 max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProduct.map(prod =>{
              return (
                <Product key={prod.id} product = {prod}/>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
