import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Ceiling from './Components/Ceiling/Ceiling';
import Floor from './Components/Floor/Floor';
import Form from './Components/Form/Form';

// Import Redux Store
import { submitForm, resetForm } from "./Store/form";
const mapDispatchToProps = { submitForm, resetForm };

function App() {
  return (
    <div className="App">
      <Ceiling />
      <Form />
      <Floor />
    </div>
  );
}

const mapStateToProps = state => ({
  form: state.form,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
