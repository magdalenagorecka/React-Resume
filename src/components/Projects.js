import React from 'react';
import { Route, NavLink, Redirect} from 'react-router-dom';
import ProjectContainer from './portfolio/ProjectContainer';
import { Web, Graphic, UX } from '../data/portfolio';


const Projects = () => (
  <div className="">
    <div className="">
      <h2>Projects</h2>
      <ul className="nav">
        <li className="nav__item"><NavLink to="/projects/web">Web</NavLink></li>
        <li className="nav__item"><NavLink to="/projects/graphic">Graphic</NavLink></li>
        <li className="nav__item"><NavLink to="/projects/ux">UX</NavLink></li>
      </ul>
    </div>

    <Route exact path="/projects" render={ () => <Redirect to="projects/web"/> } />
    <Route path="/projects/web" render={() => < ProjectContainer data={Web} /> } />
    <Route path="/projects/graphic" render={() => < ProjectContainer data={Graphic} />} />
    <Route path="/projects/ux" render={() => < ProjectContainer data={UX} />} />
  </div>

);

export default Projects;
