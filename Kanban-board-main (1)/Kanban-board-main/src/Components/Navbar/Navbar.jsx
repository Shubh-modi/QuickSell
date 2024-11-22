import React, { useState } from 'react';
import filterIcon from '../../Assets/Images/Tuning.svg';
import downIcon from '../../Assets/Images/Down.svg';

import './Navbar.css';

export default function Navbar(props) {
  const [toggleFilter, settoggleFilter] = useState(false);

  function handleDisplayToggle(e) {
    settoggleFilter(!toggleFilter);
    
    if (e.target.value !== undefined) {
      props.handleGroupValue(e.target.value);
    }
  }

  function handleOrderingValue(e) {
    settoggleFilter(!toggleFilter);

    if (e.target.value !== undefined) {
      props.handleOrderValue(e.target.value);
    }
  }

  return (
    <>
      {/* Main section for the navbar */}
      <section className="nav">
        <div className="nav-container">
          <div>
            {/* Button to show/hide the dropdown menu */}
            <div className="nav-disp-btn" onClick={handleDisplayToggle}>
              <div className="nav-disp-icon nav-disp-filter">
                {/* Icon for filter button */}
                <img src={filterIcon} alt="icon" />
              </div>
              <div className="nav-disp-heading">
                Display
              </div>
              <div className="nav-disp-icon nav-disp-drop">
                {/* Icon for dropdown arrow */}
                <img src={downIcon} alt="icon" />
              </div>
            </div>

            {}
            <div className={toggleFilter ? "nav-disp-dropdown nav-disp-dropdown-show" : "nav-disp-dropdown"}>
              {/* Grouping section */}
              <div className="nav-disp-filters">
                <div className="nav-dropdown-category">
                  Grouping
                </div>
                <div className="nav-dropdown-selector">
                  {}
                  <select 
                    value={props.groupValue} 
                    onChange={handleDisplayToggle} 
                    className='nav-selector' 
                    name="grouping"
                  >
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
              </div>

              {/* Ordering section */}
              <div className="nav-disp-filters">
                <div className="nav-dropdown-category">
                  Ordering
                </div>
                <div className="nav-dropdown-selector">
                  {}
                  <select 
                    value={props.orderValue} 
                    onChange={handleOrderingValue} 
                    className='nav-selector' 
                    name="ordering"
                  >
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
