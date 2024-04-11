import React from "react";
import {useSelector,useDispatch} from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../store/cartSlice";

export const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    function handleClearCart(){
        dispatch(clearCart())
    }
    return(
        <div className="text-center m-4 p-4">
         <h1 className="text-2xl font-bold">Cart</h1>
         <button className="bg-black p-2 m-2 text-white rounded-lg" onClick={handleClearCart}>Clear cart</button>
         <div className="w-6/12 m-auto">
            <ItemList items={cartItems}/>
         </div>
        </div>
    )
}