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
function BookList(){
  return (
  <section>
    <Book/>
    <Book/>
   </section>
  );  
}
const Book = () => {
  return (
   <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
}
const Image = () => {
  return (
   <img 
    src='https://images-na.ssl-images-amazon.com/images/I/71MnPe3BDnL._AC_UL604_SR604,400_.jpg'
    alt=''
  /> 
  );
};
  
const Title = () => {
  return (
   <h1>I'll Start Again Monday</h1>
   );
};

const Author = () => {
  return (
    <h4>Lysa TerKeurst</h4>
  );
  };

ReactDom.render(<BookList/>,document.getElementById('root'));
