import React,{lazy, Suspense} from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Router, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About  from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestuarantDetails from "./components/RestuarantDetails";
import Shimmer from "./components/Shimmer";

const Grocery = lazy(()=>import('./Grocery'))
const AppLayout = ()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/resturant/:name/:cuisines/:locality/:rating/:image",
                element:<RestuarantDetails/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            }

        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);