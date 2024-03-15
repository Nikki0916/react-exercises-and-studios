export default function HobbyLinks() {
    let hobbyLinks = ["https://www.goodreads.com/", "https://www.ravelry.com/account/login"];
 
    return(
       <div>
          <h3>My Hobbies</h3>
          <a href = {hobbyLinks[0]} target = "blank">Goodreads</a> <br></br>
          <a href = {hobbyLinks[1]} target = "blank">Ravelry</a>
       </div>
    );
 }