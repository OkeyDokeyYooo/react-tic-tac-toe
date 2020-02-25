import React from 'react';
import Board from './component/Board'
import { init } from '@rematch/core'
import * as models from './models'
import { Provider } from 'react-redux'
import './App.css';

const store = init({
  models
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Tic-Tac-Toe</h1>
        <Board/>
        <h3> Now is  Turn</h3>
      </div>
    </Provider>
  );
}


export default App;
