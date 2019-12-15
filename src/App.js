import React from 'react';
import './App.css';
import Dropdown from './components/dropdown';
import IconsComponent from "./components/icons-component"
import CardComponent from "./components/card"
import AddTagComponent from "./components/add-tag"

function App() {
  return (
    <div className="App">
      <div className="row">
        <span className="col-9 heading myFont">Sameeksha Jain</span>
        <Dropdown />
      </div>
      <p className="textColor">sameekshajn9@gmail.com</p>
      <p className="textColor">9780385033</p>
      <AddTagComponent />
      <IconsComponent />
      <CardComponent />
      
    </div>
  );
}

export default App;
