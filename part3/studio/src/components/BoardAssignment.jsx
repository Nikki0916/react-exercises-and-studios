import { useState } from 'react';

export default function BoardAssignment () {
   const [boards, setBoards] = useState ([
      { label: "Desserts", value: "desserts"},
      { label: "Italian Cuisine Board", value: 'italian_cuisine'},
      { label: 'Party Appetizers Board', value: 'party_appetizers' }
   ]);

   const [boardName, setBoardName] = useState('no boards yet!');

   const handleChange = (event) => {
      setBoardName(event.target.value);
   };

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      {boards.map(board => (
                    <option key={board.value} value={board.value}>{board.label}</option>
                ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
