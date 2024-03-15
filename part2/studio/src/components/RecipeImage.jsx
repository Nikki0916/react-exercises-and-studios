import recipedata from "./recipe.json";
import "./styling.css";

function RecipeImage() {
  const recipeImage = (
    <div key={recipedata[0].name}>
      <img src={recipedata[0].recipeImage} alt={recipedata[0].name} className="recipeImage" />
    </div>
  );
  return <div>{recipeImage}</div>;
}

export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 