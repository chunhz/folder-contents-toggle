import React, { Component } from 'react';
import FolderContent from './FolderContent'
import './App.css';

class App extends Component {
  render() {
    return <div>
      {/* <Folder visible = {true}/> */}
      <FolderContent visible = {true}/>
    </div>
    
  }
}

export default App;
