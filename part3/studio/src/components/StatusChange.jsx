import { useState } from 'react';

export default function StatusChange () {
const [ notes, setNotes] = useState('');
const [recipeStatus, setRecipeStatus] = useState(false)

   const handleChange = (event) => {
      setNotes(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setRecipeStatus(true);
   };

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>
         {recipeStatus ? (
         <p>Change it up with different additions like crushed pistachios, lemon zest, or extracts. Serve with different dippers every time.</p>
         ) : (
         <p>I have not tried this recipe!</p>
         )}
      </div>
   );
}
