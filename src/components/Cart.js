import { AsyncResource } from "async_hooks";
import { useSelector } from "react-redux";
import Accordance from "./Accordance";

const Cart = ()=>{

    const cartItems = useSelector(store=> store.cart.items);

    return(<>
        <h1 className=" text-center m-4 font-semibold text-4xl">cart</h1>
        <Accordance data1={cartItems}/>
        </>
    )
}
export default Cart;