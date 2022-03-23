import React from 'react';
import ReactDom from 'react-dom';
//jsx rules
// return single element
//div / section / article or fragment
//use camelcase for html attribute
//classname instead of class
//close every element
// CSS
import'./index.css';

import{book} from './books'
import Book from './Book'
 
function BookList(){
  return (
  <section className='book'>
   {book.map ((book, index) => {
     return <Book key={book.id} {...book}></Book>;
})}
   </section>
  );  
}



ReactDom.render(<BookList/>,document.getElementById('root'));
