import { useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const [useringredients, setUserIngredients] = useState([])
  const AddIngredientHandler = (ingredient) => {
    useEffect(() => {
        fetch(
          "https://react-hooks-f6650-default-rtdb.firebaseio.com/ingredients.json").then(response => response.json()).then(responseData => {
            const loadedIngredients = [];
            for ( const key in responseData) {
              loadedIngredients.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount,
              });
            }
      })
    },[])
    fetch(
      "https://react-hooks-f6650-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify({ ingredient }),
        headers:{'Content-type':'appliaction.json'}
      }
    ).then(response => {
      return response.json();
      
     
    }).then(responseData => {
       setUserIngredients((prevIngredients) => [
         ...prevIngredients,
         { id: responseData.name, ...ingredient },
       ]);
    })
    
  };
  return (
    <div className="App">
      <IngredientForm onAddIngredient={AddIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={useringredients} onRemoveItem={() =>{}} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
