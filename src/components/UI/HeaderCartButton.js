import React,{useContext,useEffect,useState} from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

const HeaderCartButton = props =>{
    const [buttonHighlighted,setButtonHighlighted] =useState(false);

    const cartCtx =useContext(CartContext);
    const {items} = cartCtx;
    const amountOfCartitems = items.reduce((cur,item)=>{
        return cur + item.amount;
    },0 );

    const btnClasses = `${classes.button} ${buttonHighlighted ? classes.bump : '' }`
    useEffect(()=>{
        if(cartCtx.items.length === 0){
            return;
        }
        setButtonHighlighted(true);
        const timer =setTimeout(()=>{
            setButtonHighlighted(false);
        },300);

        return ()=>{
            clearTimeout(timer);
        }
    },[items]);

    return(
        <button className={btnClasses} onClick={props.cartShow}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Shopping Cart</span>
            <span className={classes.badge}> {amountOfCartitems}</span>
        </button>
    )
};

export default HeaderCartButton;