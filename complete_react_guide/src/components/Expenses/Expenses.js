import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear
    });

    return (
        <li>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onFilterDateChange = {filterChangeHandler}></ExpenseFilter>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </li>
    );
}

export default Expenses;