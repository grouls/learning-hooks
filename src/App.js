import React, { useState } from "react";
import "./assets/styles.scss";

export default () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="App">
      <h1>learning hooks</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <label>set name:</label> {name}
          </div>
          <div className="col-sm-6">
            <input
              placeholder="Enter name..."
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="col-sm-6">
            <label>set age: </label>
          </div>
          <div className="col-sm-6">
            <button
              type="button"
              id="counter-minus"
              className="btn btn-danger"
              onClick={() => (age !== 0 ? setAge(age - 1) : null)}
            >
              -
            </button>
            <span id="age-label">{age}</span>
            <button
              type="button"
              id="counter-add"
              className="btn btn-success"
              onClick={() => setAge(age + 1)}
            >
              +
            </button>
          </div>
          <div className="col-sm-6">
            <label>set country:</label>
            {country}
          </div>
          <div className="col-sm-6">
            <div className="dropdown">
              <select
                className="btn btn-light dropdown-toggle"
                onChange={e => setCountry(e.target.value)}
                id="country-select"
              >
                <option>england</option>
                <option selected>ireland</option>
                <option>scotland</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
