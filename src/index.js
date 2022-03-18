import React from 'react';
import ReactDom from 'react-dom';
//jsx rules
// return single element
//div / section / article or fragment
//use camelcase for html attribute
//classname instead of class
//close every element
function BookList(){
  return (
  <section>
    <Book/>
   </section>
  );  
}
const Book = () => {
  return (
   <article>
      <Image></Image>
    </article>
  );
}
const Image = () => {
  <img 
    src='https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._SX320_BO1,204,203,200_.jpg'
    alt='' 
  /> 
};
  

ReactDom.render(<BookList/>,document.getElementById('root'));
