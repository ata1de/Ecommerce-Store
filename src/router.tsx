import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import ProductsDetails from "./pages/ProductsDetails";
import { LayoutPage } from "./LayoutPage";


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
        }]


    }
])

export default router