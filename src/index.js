import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import MyNotepad from './my-notepad';
// import ResistorColorCoding from './resistor_color_coding';

ReactDOM.render(
  <React.StrictMode>
    <MyNotepad/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
