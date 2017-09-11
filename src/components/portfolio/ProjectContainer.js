import React from 'react';
import Project from './Project';


const ProjectContainer = (props) => {
  let portfolio = props.data.map((portfolio) => {
    return <Project title={portfolio.title}
                   desc={portfolio.info}
                   img={portfolio.img}
                   key={portfolio.id} />
  });
  return (

    <div className="flex">
        {portfolio}
    </div>
  );
}

export default ProjectContainer;
