import { useState } from "react";
import "./style.css";

const FilterBar = ({ showProducts }) => {
  const [name, setName] = useState("");

  return (
    <div className="filter-bar-container">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <button onClick={() => showProducts(name)}>Buscar</button>
    </div>
  );
};

export default FilterBar;
