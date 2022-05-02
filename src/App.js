import React from 'react';
import Masthead from './layout/masthead/masthead';
import Header from './layout/header/header';
import Skills from './layout/skills/Skills';
import Projects from './layout/projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Masthead />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
