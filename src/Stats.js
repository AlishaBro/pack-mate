import React from "react";

export default function Stats({ items }) {
  if (items.length === 0) {
    return <p className="stats">Please Add items to the list</p>;
  }
  const numItems = items.length;
  const numItemspacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItemspacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "you are ready to go ✈️✈️"
        : `🧳 You have ${numItems} items on your list, and you have already packed 
      ${numItemspacked} (${percentage}%)`}
    </footer>
  );
}
