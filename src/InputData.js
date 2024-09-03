import React, { useState } from "react";

export default function InputData({ onAdditems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    if (!description) {
      return;
    }
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAdditems(newItem);

    console.log(newItem);
    setDescription(" ");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> what do you need for your trip?😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        key={Date.now()}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}></input>
      <button>Add</button>
    </form>
  );
}
