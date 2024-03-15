import recipedata from "./recipe.json";
import './styling.css'


function AuthorInfo() {
  const recipeAuthor = <div key={recipedata[0].name}>{recipedata[0].author}</div>;
  const recipeAuthorImage = <div key={recipedata[0].name}><img src={recipedata[0].authorImage} alt={recipedata[0].author} className="authorImage" /></div>;
  const recipeWebsite = <div key={recipedata[0].name}><a href={recipedata[0].website}>{recipedata[0].website}</a></div>;

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;