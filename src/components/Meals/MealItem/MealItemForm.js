import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import { useRef,useState } from 'react';

const MealItemForm = (props)=>{
    const amountInputRef =useRef();
    const [inputIsValid,setInputIsValid] = useState(true);

    const submitHandler = event =>{
        event.preventDefault();

        const enterdAmount =amountInputRef.current.value;
        const enterdAmountNumber = +enterdAmount;

        if( enterdAmount.trim().length === 0 || enterdAmountNumber < 1 || enterdAmountNumber>5){
            setInputIsValid(false);
            return;
        }
        props.onAddtoCart(enterdAmountNumber);
        
    }


    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
            label ="Amount"
            ref ={amountInputRef}
            input={{id:'amount'+props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'}
             } 
             />
        <button>+ Add</button>
        {!inputIsValid && <p> Please Enter a valid amount (1..5)</p>}
    </form>
};

export default MealItemForm;