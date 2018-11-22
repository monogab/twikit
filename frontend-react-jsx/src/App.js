import React, { Component } from 'react';

import './App.css';
import CsvUpload from './components/csv-upload';
class App extends Component {
  render() {
    return (
      <div class="text-center mt-4">
        <h1>
          Convert CSV file to table
        </h1>
        <CsvUpload/>
      </div>

    );
  }
}

export default App;
