import React,{useContext} from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

const HeaderCartButton = props =>{

    const cartCtx =useContext(CartContext);
    console.log(cartCtx.amount)
    const amountOfCartitems = cartCtx.items.reduce((cur,item)=>{
        return cur + item.amount;
    },0 )

    return(
        <button className={classes.button} onClick={props.cartShow}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Shopping Cart</span>
            <span className={classes.badge}> {amountOfCartitems}</span>
        </button>
    )
};

export default HeaderCartButton;