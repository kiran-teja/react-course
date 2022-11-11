import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = () => {
    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='nex-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;