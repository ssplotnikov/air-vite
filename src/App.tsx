import React from 'react';
import './App.scss';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';

const App: React.FC = () => (
  <div className='App'>
    <Header />
    <Main />
  </div>
);

export default App;
