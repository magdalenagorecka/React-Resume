import React from 'react';

const Project = (props) =>(

  <div className="photo-container">
    <div className="photo">
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      {props.info}
    </div>
  </div>
);

export default Project;
