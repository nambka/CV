import React from 'react';
import logo from './logo.svg';
import myLogo from './assets/images/topic-target.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myLogo} className="App-logo" alt="myLogo" />
        <p>
        Be like a postage stamp stick to one thing until you get there
        </p>
        <p>Learn more: <a href="https://viblo.asia/p/deploy-create-react-app-project-to-github-pages-m68Z0R465kG">deploy-create-react-app-project-to-github-pages</a></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
