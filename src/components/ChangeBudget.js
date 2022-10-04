import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const BudgetChange = () =>{
    const {dispatch} = useContext(AppContext);
    const [budget,setBudget]=useState('');

    const onSubmit = (event) =>{
        event.preventDefault();

        

        dispatch({
            type:'CHANGE_BUDGET',
            payload: budget
        });
    }
    return(
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for='budgetchange'>Change Budget</label>
                    <input required="required"
                    type="text"
                    className="form-control"
                    id="budgetchange"
                    value={budget}
                    onChange={(event)=>setBudget(event.target.value)}>
                    </input>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <button type="submit" className="btn btn-primary mt-3">
                        Change Budget
                    </button>
                </div>
            </div>
        </form>
    );

};

export default BudgetChange;