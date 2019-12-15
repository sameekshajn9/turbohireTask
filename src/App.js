import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Dropdown } from 'react-bootstrap';

const options = ['Interview', 'Meeting', 'Scrum'];

function App() {
  const [selectedvalue, setSelectedValue] = useState(options[0]);

  return (
    <div className="App">
      <div class="row">
        <span class="col-9 heading myFont">Sameeksha Jain</span>
        <Dropdown class="col-3">
          <Dropdown.Toggle
            variant=""
            style={{
              borderBottom: '1px solid #595959',
              borderRadius: 0,
              padding: 5,
              color: '#595959'
            }}
            id="dropdown-basic"
            className="hello"
          >
            {selectedvalue}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {options.map(item => (
              <Dropdown.Item onClick={() => setSelectedValue(item)}>
                {item}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <p style={{ margin: 0 }}>sameekshajn9@gmail.com</p>
      <p style={{ margin: 0 }}>9780385033</p>
      <div>
        <button class="button">
          Interview<i class="fa fa-close"></i>
        </button>
        <button class="button addButton" style={{ marginLeft: 10 }}>
          Add Tag<i class="fa fa-plus"></i>
        </button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div class="roundedView">
          <i class="fa fa-envelope-o fa-2x iconColor"></i>
          <i class="fa fa-calendar-o fa-2x iconColor"></i>
          <i class="fa fa-pencil fa-2x iconColor"></i>
          <i class="fa fa-trash-o fa-2x iconColor"></i>
          <i class="fa fa-clipboard fa-2x iconColor"></i>
          <i class="fa fa-user-circle-o fa-2x iconColor"></i>
        </div>
      </div>

      <div class="bottomView">
        <p class="heading competencyColor">Competency</p>
        <p class="primaryColor">Primary</p>
        <p>
          <span>Application Developer</span>
          <i class="fa fa-share-square-o"></i>
        </p>
        <div class="rating">
          <span>
            <i class="fa fa-star "></i>
          </span>
          <span>
            <i class="fa fa-star"></i>
          </span>
          <span>
            <i class="fa fa-star"></i>
          </span>
          <span>
            <i class="fa fa-star"></i>
          </span>
          <span>
            <i class="fa fa-star filled"></i>
          </span>
        </div>
        <i class="fa fa-chevron-down dropStyle"></i>
      </div>
    </div>
  );
}

export default App;
