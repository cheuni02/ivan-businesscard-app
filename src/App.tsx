import React from 'react';
import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <section id="header"><Header /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
};

export default App;
