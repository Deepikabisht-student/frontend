import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product"


export const ShopContext = createContext(null);

const getDefalutCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++){
      cart[index] = 0;

    }
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefalutCart());


    const addToCart = (itemId)=>{
       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
       console.log(cartItems);
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
     }

     const getTotalCartAmount = (cartItems, all_product) => {
        let totalAmount = 0;
        console.log("context: ", cartItems);
        console.log("all_product: ", all_product);
        for(let item of all_product){
            if(cartItems[item.id]>0)
            {
                totalAmount += item.new_price * cartItems[item.id];
            }
        }
        return totalAmount;
     }
     
    
     const contextValue = {getTotalCartAmount,all_product,cartItems, addToCart,removeFromCart }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;