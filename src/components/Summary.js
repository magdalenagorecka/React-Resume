import React from 'react';

const Summary = (props) => (

  <div className="content__summary">
    <h2>{props.title}</h2>

    <p>I am Front End Developer and UX Designer with over 10 years of experience in <strong>graphic and web design</strong>, developing <strong>WordPress websites</strong> for more then 7 years. I am currently broadening my knowledge of JavaScript (with <strong>React, Redux and Node.js</strong>) and PHP. I am open to learning new languages and technologies and interested in gaining a Front End Developer position.</p>
      <div className="btns">
        <a href="mailto:hello@magdalenagorecka.pl" className="btn">Email me</a>
        <a href="http://magdalenagorecka.pl/media/Magdalena_Gorecka_CV.pdf" className="btn">Download Resume</a>
      </div>
  </div>
);


export default Summary;
