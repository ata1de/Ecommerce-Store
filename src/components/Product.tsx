import { Link } from "react-router-dom";
import { TypeProduct } from "../types/types";
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

const Product = ({product}: TypeProduct) => {
    const contextValue = useContext(CartContext);

    if (!contextValue) {
        console.error("O contexto do carrinho ou o produto não foram fornecidos corretamente.");
        return null;
    }

    const { addToCart } = contextValue;

    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={product.image} alt={product.title} />
                    </div>
                    <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <motion.button whileTap={{scale: 0.9}} onClick={() => addToCart({product})}>
                            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                                <BsPlus className="text-3xl" />
                            </div>
                        </motion.button>
                        <Link to={`/products/${product.id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
                            <BsEyeFill />
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-sm capitalize mb-1 text-gray-500">{product.category}</div>
                <Link to={`/products/${product.id}`}>
                    <h2 className="font-semibold mb-1 hover:underline ">{product.title}</h2>
                </Link>
                <div className="font-semibold">R$ {product.price}</div>
            </div>
        </div>
    );
}

export default Product;
