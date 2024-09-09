import React from "react";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  console.log(item.packed);
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : null}>
        {" "}
        {item.quantity} {item.description}
      </span>

      <button className="deleteIcon" onClick={(item) => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
