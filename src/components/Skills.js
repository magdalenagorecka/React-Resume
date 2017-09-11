import React from 'react';

const Skills = (props) => (
  <div>
    <h2>{props.title}</h2>
    <div>
      <div>
        <h3>Development</h3>
      </div>
      <div>
      <div className="flex">
        <div className="label">
          <h4>HTML5 / CSS3 / SASS/SCSS </h4>
          </div>
          <div className="skills">
            <div className="skills__item adv">Advanced</div>
          </div>
        </div>
        <div className="flex">
          <div className="label"><h4>JavaScript / jQuery / ReactJS </h4></div>
          <div className="skills">
            <div className="skills__item inter">Intermediate</div>
          </div>
        </div>
        <div className="flex">
          <div className="label">
          <h4>Redux / ES2015 / AngularJS </h4></div>
          <div className="skills">
            <div className="skills__item basic">Basic</div>
          </div>
        </div>
        <div className="flex">
          <div className="label">
          <h4>Mocha/Chai / Gulp </h4></div>
          <div className="skills">
            <div className="skills__item basic">Basic</div>
          </div>
        </div>
        <div className="flex">
          <div className="label">
          <h4>Wordpress / Bootstrap</h4></div>
          <div className="skills">
            <div className="skills__item inter">Intermediate</div>
          </div>
        </div>
        <div className="flex">
          <div className="label">
          <h4>Node.js / Webpack / npm</h4></div>
          <div className="skills">
            <div className="skills__item basic">Basic</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3>Design</h3>
      <div className="flex">
        <div className="label">
        <h4>Adobe Photoshop / Illustrator / InDesign</h4></div>
        <div className="skills">
          <div className="skills__item adv">Advanced</div>
        </div>
      </div>
      <div className="flex">
        <div className="label">
        <h4>Axure / Google Analytics</h4></div>
        <div className="skills">
          <div className="skills__item adv">Advanced</div>
        </div>
      </div>
      <div className="flex">
        <div className="label">
        <h4>Sketch / UXPin / Balsamiq </h4></div>
        <div className="skills">
          <div className="skills__item basic">Basic</div>
        </div>
      </div>
    </div>
    <div>
      <h3>Toolset</h3>
      <div className="flex">
        <div className="label">
        <h4>Web Dev Tools / Git/Github / Command Line</h4></div>
        <div className="skills">
          <div className="skills__item inter">Intermediate</div>
        </div>
      </div>
    </div>
    <h2>Certifications</h2>
    <ul>
      <li>Front End Development Certification - freeCodeCamp</li>
      <li>Google Mobile Sites Certification - Google Inc.</li>
      <li>Google Analytics Individual Qualification - Google Inc.</li>
      <li>SEO Fundamentals - Lynda.com</li>
    </ul>
    <h2>Courses</h2>
    <h3>2017</h3>
    <ul>
      <li>Full Stack Java Script Track  -  Treehouse Inc.  [ in progress ]</li>
      <li>Learn React Track - Treehouse Inc.  [ in progress ]</li>
      <li>Scrum Basics - Treehouse Inc.  [ in progress ]</li>
      <li>Front End Development Certification - freeCodeCamp</li>
      <li>Front End Web Development Track -  Treehouse Inc.</li>
    </ul>
    <h3>2016</h3>
    <ul>
      <li>Google Analytics Individual Qualifications Google Inc.</li>
    </ul>
    <h3>2015</h3>
    <ul>
      <li>Axure - podstawy i zaawansowany Barbara Kowalczyk (Allegro)</li>
      <li>RoomAuction.com Design Days Bolesław Drapella (RoomAuction.com)</li>
      <li>UX - No rocket science Maciej Saganowski | InfoShare</li>
      <li>Miejski Service Design II Dampc, Michalski, Saganowski | PPNT</li>
    </ul>
    <h3>2014</h3>
    <ul>
      <li>Kainos Women’s Workshop - wstęp do testowania</li>
      <li>Projektowanie zorientowane na użytkownika - Adrian Dampc | SYW4</li>
      <li>Miejski Service Design I  Adrian Dampc, Adam Michalski | PPNT </li>
      <li>Business Model Design Katarzyna Królak-Wyszyńska | Innovatika </li>
    </ul>
  </div>
);

export default Skills;
