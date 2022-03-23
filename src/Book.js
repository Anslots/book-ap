import React from 'react'

const Book = ({img, title, author}) => {
  //attribute, evenHandler
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
   alert('hello Matt');
  };
  const complexExample = (author) =>{
   console.log(author);
  }
  return ( 
   <article 
    className='book'
    onMouseOver={()=> {
      console.log(title);
    }}
    >
      <img src={img} alt='' /> 
      <h1 onClick={() =>console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>referece example
      </button>
      <bottom type='button' onClick={() => complexExample(author)
      }>
      </bottom>
    </article>
  );
};

export default Book;