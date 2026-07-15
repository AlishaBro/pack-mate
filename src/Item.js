import React, { useState } from "react";

export default function Item({
  item,
  onDeleteItem,
  onToggleItem,
  onUpdateItem,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(item.description);
  console.log(item.packed);
  function handleSave() {
    if (editedDescription.trim()) {
      onUpdateItem(item.id, { description: editedDescription });
    }
    setIsEditing(false);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSave();
    }
  }
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span style={item.packed ? { textDecoration: "line-through" } : null}>
          {" "}
          {item.quantity} {item.description}
        </span>
      )}
      <button className="editIcon" onClick={() => setIsEditing(true)}>
        {" "}
        ✏️
      </button>
      <button className="deleteIcon" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
