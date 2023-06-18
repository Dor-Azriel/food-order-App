import { useReducer } from "react";
import CartContext from "./CartContext";


const defaultCartState = {
    items:[],
    totalAmount: 0

}

const cartReducer = (state,action)=>{
    if(action.type === 'ADD_ITEM'){
        const updatedItems = state.items.concat(action.item);
        const updatedAmount =state.totalAmount + action.item.price * action.item.amount;
        return {
            items:updatedItems,
            totalAmount: updatedAmount,
        }
    }
    return defaultCartState;
}

const CartProvider = props =>{

    const [cartState, dispatchCart] = useReducer(cartReducer,defaultCartState);

    const addItemHandler = (item)=>{
        dispatchCart({type:'ADD_ITEM', item:item});    
    }
    const removeItemHandler = (item)=>{
        dispatchCart({type:'RMV_ITEM', item:item});
    }

    const cartContext = {
        items:cartState.items,
        Amount:cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

};


export default CartProvider;