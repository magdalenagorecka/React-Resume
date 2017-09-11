import React from 'react';
import JobPositions from '../data/experience';

const Experience = (props) => {
  let experience = JobPositions.map((job) =>{
    return(
      <div className="content-exp" key={job.id}>
        <div className="content-exp__item content-exp__item--left">
          <h3>{job.date}</h3>
        </div>
        <div className="content-exp__item content-exp__item--right">
          <h3>{job.title}</h3>
          <h4>{job.company}</h4>
          <p><strong>Responsibilities: </strong> {job.responsibilities}</p>
          <p><strong>Achievements: </strong>
          {job.achievements}</p>
          <p><strong>Clients: </strong>
          {job.clients}</p>
        </div>
      </div>
    )
  }
);

  return (
    <div>
      <h2>{props.title}</h2>
      {experience}
    </div>
  )
}

export default Experience;
