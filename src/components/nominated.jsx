import React from "react";

const Nominated = ({ list, onRemove }) => {
  return (
    <div className="bg-white mt-4">
      <h3>{list.length > 0 && "Nominated"}</h3>
      <ul className="list-group">
        {list.map((item) => (
          <li key={item.id} className="list-group-item border-0 ">
            {item.title} ({item.year}){" "}
            <button
              className="btn btn-danger"
              onClick={() => onRemove(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nominated;
