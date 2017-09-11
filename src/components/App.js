import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import Summary from './Summary';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import NotFound from './NotFound';
import Header from './Header';
import About from './About';
import Public from './Public'

const App = () => (

<BrowserRouter>
      <div className="container">
        <div className="container__item container__item--left">
          <About />
        </div>
        <div className="container__item container__item--right">
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/" render={ () => <Summary title="Summary" />}  />
              <Route path="/skills" render={ () => <Skills title="Skills" />}  />
              <Route path="/education" render={ () => <Education title="Education" />}  />
              <Route path="/experience" render={ () => <Experience title="Experience" />}  />
              <Route path="/projects" render={ () => <Projects title="Projects" />}  />
              <Route path="/public" render={ () => <Public title="Lectures & Workshops" />}  />

              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </div>
  </BrowserRouter>
);

export default App;
