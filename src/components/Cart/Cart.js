import classes from './Cart.module.css';
import CartIcon from './CartIcon';
import Modal from '../UI/Modal';

const Cart = props =>{
    
    const cartItems = <ul className={classes['cart-items']}>{[{id:'1', name:'sushi', amount:'2',price:12.99}].map(meal=><li>{meal.name}</li>)}</ul>;

    return <Modal cartHide = {props.cartHide}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.22</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.cartHide}>Close</button>
            <button className={classes.button}>Order </button>
        </div>
    </Modal>

};

export default Cart;