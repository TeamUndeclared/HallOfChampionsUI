import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Ceiling from './Components/Ceiling/Ceiling';
import Hallway from './Components/Hallway/Hallway';
import Floor from './Components/Floor/Floor';

// Import Redux Store
import { submitForm, resetForm } from "./Store/form";
const mapDispatchToProps = { submitForm, resetForm };

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Ceiling />
        <Hallway />
        <Floor />
      </div>
    </BrowserRouter>
    
  );
}

const mapStateToProps = state => ({
  form: state.form,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
