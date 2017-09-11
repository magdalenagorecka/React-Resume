import React from 'react';
import Public from '../data/public.js'

const Speaking = (props) => {
  let speaking = Public.map((speaking) =>{
    return(
      <div className="photo-container">
        <div className="photo">
          <img src={speaking.img} alt={speaking.title} />
        </div>
        <h4>{speaking.title}</h4>
      </div>
    )
    }
  );
    return(
      <div>
        <h2>{props.title}</h2>
        <p>I had the pleasure of leading a number of workshops and lectures on UX design, startups and presentation techniques for:</p>
        <p>Uniwersytet Gdański, Akademia Morska, Strefa Startup Gdynia/PPNT, WordCamp Lublin 2017, Geek Girl Carrots, Women in Technology, Inkubator Innowacji Medycznych MINDS, Tipi UX</p>
        <div className="flex">
          {speaking}
        </div>
      </div>
    )
}

export default Speaking;
