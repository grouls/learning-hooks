import React, { useState } from "react";
import "./styles.css";

export default () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("gary");
  const [nationality, setNationality] = useState("irish");
  return (
    <div className="App">
      <h1>Learning Hooks</h1>
      <p>
        set name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </p>
      name: {name}
      <p>
        <button onClick={() => setAge(age + 1)}>+</button>
        <button onClick={() => (age !== 0 ? setAge(age - 1) : null)}>-</button>
      </p>
      age: {age}
      <p>
        <select onChange={e => setNationality(e.target.value)}>
          <option>english</option>
          <option selected>irish</option>
          <option>scottish</option>
          <option>northern irish</option>
          <option>welsh</option>
        </select>
      </p>
      nationality: {nationality}
    </div>
  );
};
