import React,{lazy, Suspense, useState} from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Router, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestuarantDetails from "./components/RestuarantDetails";
import Shimmer from "./components/Shimmer";
import Accordian from "./components/mockAccordianData";
import UserContext from "./UserContext";
import { useContext ,useState} from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const About = lazy(()=>{
    return import("./components/About");
})
const Grocery = lazy(()=>import('./Grocery'))
const AppLayout = ()=>{
    
    const [user1, setUser] = useState({
       
            name:"siddarth",
            email:"sid@mail.com"

    })
const {user} = useContext(UserContext);
// console.log(user);
    return(
        <div>
            <Provider store={appStore}>
                <UserContext.Provider value={{
                    user:user1 ,
                    setUser:setUser}}>
                <Header/>
                <Outlet/>
                <Footer/>
                </UserContext.Provider> 
             </Provider>
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
                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
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