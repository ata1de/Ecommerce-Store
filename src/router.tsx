import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import ProductsDetails from "./pages/ProductsDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children:[{
            path:'/products/:id',
            element: <ProductsDetails />
        }]


    }
])

export default router