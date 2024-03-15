import React from 'react';
import styles from './Description.module.css';

const RecipeAuthor = () => {
   let authorLink = "https://www.loveandlemons.com/";
   let authorPhoto = "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/IMG_41499-layers.jpg";
   let authorName = "Jeanine";

   return (
      <div className = {styles.recipeAuthorBlock}>
         <img src={authorPhoto} alt = "Jeanine holding her book"  className={`${styles.imageUpdates} resizedImage`}  />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Love and Lemons</a> 
         </div>
      </div>
   );
}

class RecipeDescription extends React.Component {

   render() {
      return (
         <div> 
            <div>
               <h1>Homemade Pasta</h1>
               <p>This recipe is easy and yummy homemade pasta</p>
            </div>
            <RecipeAuthor />
         </div>
      );
   }
}

export default RecipeDescription;