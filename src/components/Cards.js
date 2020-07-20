import React from 'react';

const Cards = ({name, email, id}) => {
  // const {name, email, id} = props; /*This can also be used if we use 'props' in braces above instead of name,email,id*/
  return(
    <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
        <img src={`https://robohash.org/${id}`} alt='Robots'/>
        <div>
          <h2>{ name }</h2>
          <p>{ email }</p>
        </div>
    </div>
  );
}

export default Cards
