import React from 'react';
import './App.css';
import MainContainer from './container/MainContainer.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='mealmate.png'/>
        <h1 id='title'>Share Love with MealMate</h1>  
      </header>
    <MainContainer/>
    </div>
  );
}

export default App;
