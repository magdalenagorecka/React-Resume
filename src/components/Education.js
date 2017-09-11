


import React from 'react';
import Edu from '../data/education';

const Education = (props) => {
  let education = Edu.map((school) =>{
    return(
      <div className="content-exp" key={school.id}>
        <div className="content-exp__item content-exp__item--left">
          <h3>{school.year}</h3>
        </div>
        <div className="content-exp__item content-exp__item--right">
          <h3 className="school">{school.school}</h3>
          <p><strong>{school.field}</strong></p>
          <p>{school.type}</p>
          <p>{school.info}</p>
        </div>
      </div>
      )
    }
  );
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {education}
      </ul>
    </div>

  );
}

export default Education;
