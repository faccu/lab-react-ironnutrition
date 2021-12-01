import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

export default function AddFood(props){

    const [formState, setFormState] = useState({})

    function handleSubmit(event){
        event.preventDefault()
        props.parentCb(formState)
        setFormState({})
        console.log(formState)
    }

    function handleInput(event){
        let {name, value, type, checked} = event.target
        if(type === "checkbox") value = checked
        setFormState(Object.assign ({}, formState, {[name]: value}))
        console.log(formState)

    }

    return(
        <div className="AddFood">
            <h4>Add Food</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <Input type='text' name="name" placeholder='Name' value={formState.name || ''} onChange={handleInput}/>

                <label htmlFor='calories'>Calories:</label>
                <Input type="number" name="calories" value={formState.calories || ''} onChange={handleInput} />

                <label htmlFor='servings'>Servings:</label>
                <Input type="number" name="servings" value={formState.servings || ''} onChange={handleInput} />

                <label htmlFor='image'>Image:</label>
                <Input type='text' name='image' value={formState.image || ''} onChange={handleInput} />

                <button type="submit">Add Food</button>
            </form>
        </div>
    );
}