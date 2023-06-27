// import React from "react";

// import Card from "../UI/Card";
// import "./IngredientForm.css";

// const IngredientForm = React.memo((props) => {
//   const submitHandler = (event) => {
//     event.preventDefault();
//     // ...
//   };

//   return (
//     <section className="ingredient-form">
//       <Card>
//         <form onSubmit={submitHandler}>
//           <div className="form-control">
//             <label htmlFor="title">Name</label>
//             <input type="text" id="title" />
//           </div>
//           <div className="form-control">
//             <label htmlFor="amount">Amount</label>
//             <input type="number" id="amount" />
//           </div>
//           <div className="ingredient-form__actions">
//             <button type="submit">Add Ingredient</button>
//           </div>
//         </form>
//       </Card>
//     </section>
//   );
// });

// export default IngredientForm;

import React from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" />
        </div>
      </Card>
    </section>
  );
});

export default Search;