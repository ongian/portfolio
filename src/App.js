import React from 'react';
import Masthead from './layout/masthead/masthead';
import Header from './layout/header/header';
import Skills from './layout/skills/Skills';
import Projects from './layout/projects/Projects';
import Contact from './layout/contact/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <Masthead />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
