import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import MyNotepad from './my-notepad';
// import SimpleCalculator from './simple-calculator';
// import ResistorColorCoding from './resistor-color-coding';

ReactDOM.render(
  <React.StrictMode>
    <MyNotepad/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
