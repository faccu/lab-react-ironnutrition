import {useState} from "react";
import foodsDataJSON from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
// import FilterFood from "./FilterFood";

export default function FoodList() {

    const [food, setFood] = useState(foodsDataJSON)
    const [filteredFoods, setFilteredFoods] = useState(foodsDataJSON)

    function createFood(body){
        body._id = parseInt(Math.random() * 10000)
        setFood([body, ...food])  // movies.concat([body])
    }

    function handleFilterFood(letter){
        if(letter === "") {setFilteredFoods(food)}
        else{
            setFilteredFoods(
            food.filter(food=>food.name[0].toLowerCase() === letter.toLowerCase())
          )}
    }

    return (
    <>
        <AddFoodForm parentCb={createFood}/>
        {filteredFoods.map((food) => {
            return <FoodBox food={food}/>;
        })}
    </>
    );
  }