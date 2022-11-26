import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear});

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onFilterDateChange = {filterChangeHandler}></ExpenseFilter>
                {filteredExpenses.map(item => {
                    return (<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)
                })}
            </Card>
        </div>
    );
}

export default Expenses;