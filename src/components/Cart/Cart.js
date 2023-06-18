import classes from './Cart.module.css';
import CartIcon from './CartIcon';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem'


const Cart = props =>{
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = id =>{
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item =>{
        cartCtx.addItem({...item, amount:1});
    };


    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map(meal=><CartItem 
        key= {meal.id}
        price= {meal.price}
        amount= {meal.amount}
        onRemove = {cartItemRemoveHandler.bind(null,meal.id)}
        onAdd= {cartItemAddHandler.bind(null,meal)}
         />)}
        </ul>;
    
    
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartHasItems = cartCtx.items.length >0;

    return <Modal cartHide = {props.cartHide}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.cartHide}>Close</button>
           {cartHasItems && <button className={classes.button}>Order </button>}
        </div>
    </Modal>

};

export default Cart;