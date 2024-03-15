export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/71RVt35ZAbL._SY425_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71osNGP9gOL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/61su39k8NUL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} height= "400px"  alt="Harry Potter Series by JK Rowling" />
         <img src={book2} height= "400px"  alt="Rebecca by Daphne Du Maurier" />
         <img src={book3} height= "400px"  alt="The Handmaid's Tale by Margaret Atwood" />
      </div>      
   );
}