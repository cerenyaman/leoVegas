import React from "react";
import "./style.css";

function DropDownPage(props) {
  const { changeHandler, categorieList } = props;
  return (
    <div className="dropdown-container">
      <select className="tag" id="tag" onChange={changeHandler}>
        <option value="all">Chose Categorie..</option>
        {categorieList.map((item, idx) => (
          <option className="" value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownPage;
