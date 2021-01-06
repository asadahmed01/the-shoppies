import React from "react";

const Nominated = ({ list, onRemove }) => {
  return (
    <div className="bg-white mt-4 text-left">
      <h3>{list.length > 0 && "Nominated"}</h3>
      {!list.length ? (
        ""
      ) : (
        <ul className="list-group">
          {list.map((item) => (
            <li key={item.imdbID} className="list-group-item border-0 ">
              {item.Title} {item.Year}
              <button
                className="btn btn-danger"
                onClick={() => onRemove(item.imdbID)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nominated;
