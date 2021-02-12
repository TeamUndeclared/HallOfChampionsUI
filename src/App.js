import React from 'react';
import { HashRouter} from 'react-router-dom';
import Ceiling from './Components/Ceiling/Ceiling';
import Hallway from './Components/Hallway/Hallway';
import Floor from './Components/Floor/Floor';
import './reset.css';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Ceiling />
        <Hallway />
        <Floor />
      </div>
    </HashRouter>
    
  );
}



export default App;
