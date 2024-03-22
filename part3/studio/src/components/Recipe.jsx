import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.spendwithpennies.com/author/holly/";
   let authorPhoto = "https://secure.gravatar.com/avatar/fa4bdeb9d2aa6450536af2064fac2481?s=64&r=g";
   let authorName = "Holly";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Cream Cheese", "Ricotta Cheese", "Vanilla extract", "Chocolate Chips", "Powdered sugar", ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>A Delicious Dessert Dip</h1>
            <p>A delicious blend of cream cheese, ricotta cheese, and chocolate chips make the perfect dippable dessert that tastes just like a cannoli!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.spendwithpennies.com/wp-content/uploads/2023/11/Cannoli-Dip-SpendWithPennies-6-800x1200.jpg" alt="Photo of cannoli dip with waffle cones" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
