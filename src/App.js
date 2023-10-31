import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

import './styles.css';
import 'particles.js/particles';
import particlesConfig from './particlesjs-config.json';



function App() {
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', particlesConfig, function () {
        console.log('callback - particles.js config loaded');
      });
    } else {
      console.error('particlesJS is not defined');
    }
  }, []);
  

  return (
    <div className="app">
      <div id="particles-js"></div>
      <h1 className="title">Kyrios</h1>
      {showLogin ? (
        <>
          <LoginForm />
          <div className="button-container">
            <button onClick={() => setShowLogin(false)}>Register</button>
          </div>
        </>
      ) : (
        <>
          <RegistrationForm />
          <div className="button-container">
            <button onClick={() => setShowLogin(true)}>Login</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;