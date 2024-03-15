export default function HobbyLinks() {
    let hobbyLinks = ["https://www.michaels.com/", "https://www.vinylfunforeveryone.com/"];
 
    return(
       <div>
          <h3>My Hobbies</h3>
          <a href = {hobbyLinks[0]} target = "blank">michaels</a> <br></br>
          <a href = {hobbyLinks[1]} target = "blank">Vinyl fun</a>
       </div>
    );
 }