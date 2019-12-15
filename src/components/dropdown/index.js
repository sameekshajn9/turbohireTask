import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

export default () => {
  const options = ['Interview', 'Meeting', 'Scrum'];
  const [selectedvalue, setSelectedValue] = useState(options[0]);
  return (
    <Dropdown className="col-3">
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        style={{
          borderBottom: '1px solid #595959',
          borderRadius: 0,
          padding: 5,
          color: '#595959',
          fontWeight: "500"
        }}
        className="dropdowntoggle"
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
  );
};
