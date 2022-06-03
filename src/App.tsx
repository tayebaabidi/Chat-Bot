import React from 'react';

import PageOverview from './components/PageOverview';
import Intents from './components/Intents';

import './App.css';

const App = () => {
  return (
    <main className="App">
      <PageOverview />
      <Intents />
    </main>
  );
}

export default App;