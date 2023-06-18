import { useReducer } from "react";
import CartContext from "./CartContext";


const defaultCartState = {
    items:[],
    totalAmount: 0

}

const cartReducer = (state,action)=>{

    if(action.type === 'ADD_ITEM'){

      //  const updatedItems = state.items.concat(action.item);
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        let updatedItem;
        let fullUpdatedItems;

        if(existingItem){
            updatedItem = {
                ...existingItem,
                amount: existingItem.amount +action.item.amount
            }
            fullUpdatedItems = [...state.items];
            fullUpdatedItems[existingItemIndex] = updatedItem;
            console.log(fullUpdatedItems);
        }else {
            
            updatedItem = {...action.item};
            fullUpdatedItems = [...state.items, updatedItem];
        }

        const updatedAmount =state.totalAmount + action.item.price * action.item.amount;
        return {
            items:fullUpdatedItems,
            totalAmount: updatedAmount,
        }
    }

    if (action.type === 'RMV_ITEM'){
        console.log(action);
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        console.log(action.id)
        const existingItem = state.items[existingItemIndex];
        console.log(existingItem)
        const updatedAmount =state.totalAmount - existingItem.price;
        let updatedItems;

        if (existingItem.amount === 1){
            updatedItems = state.items.filter( item => item.id !== existingItem.id)
        }else {
            const updatedItem = {...existingItem, amount:existingItem.amount-1};
            updatedItems = [...state.items ];
            updatedItems[existingItemIndex] =updatedItem;
        } 
        return {
            items:updatedItems,
            totalAmount:updatedAmount
        }

    }
    return defaultCartState;
}

const CartProvider = props =>{

    const [cartState, dispatchCart] = useReducer(cartReducer,defaultCartState);

    const addItemHandler = (item)=>{
        dispatchCart({type:'ADD_ITEM', item:item});    
    }
    const removeItemHandler = (id)=>{
        dispatchCart({type:'RMV_ITEM', id:id});
    }

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

};


export default CartProvider;