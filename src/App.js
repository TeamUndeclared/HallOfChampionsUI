import React from 'react';
import { connect } from 'react-redux';
import { HashRouter} from 'react-router-dom';
import Ceiling from './Components/Ceiling/Ceiling';
import Hallway from './Components/Hallway/Hallway';
import Floor from './Components/Floor/Floor';
import './reset.css';
import './App.css';

// Import Redux Store
import { submitForm, resetForm } from "./Store/form";
const mapDispatchToProps = { submitForm, resetForm };

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

const mapStateToProps = state => ({
  form: state.form,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
