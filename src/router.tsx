import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import ProductsDetails from "./pages/ProductsDetails";
import { LayoutPage } from "./LayoutPage";
import Cart from "./pages/Cart";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPage />,
        children:[{
            index: true,
            element: <Home/>
        },{
            path:'/products/:id',
            element: <ProductsDetails />
        },{
            path:'/cart',
            element: <Cart /> 
        }]


    }
])

export default router