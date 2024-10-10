import { useState } from "react";

function ListGroup() {
  let items = ["Avinash", "Harrisson", "Sheenan"];

  var selectedIndex = useState(-1);

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((i, index) => (
          <li
            className={selectedIndex[0] === index ? "list-group-item active" : "list-group-item"}
            key={i}
            onClick={() => {selectedIndex[1](index)}}
          >
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
