import React, { useContext } from 'react';
import './App.css';
import { ThemeContext } from './contexts/theme';

function App() {

  const [{theme}, toggleTheme] = useContext(ThemeContext)
  
  return (
    <div className="app" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
    <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App;
