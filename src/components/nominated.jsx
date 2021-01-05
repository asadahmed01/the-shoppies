import React from "react";

const Nominated = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.title} ({item.year}){" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nominated;
