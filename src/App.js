import React, { useState, useEffect } from "react";
import InputData from "./InputData";
import List from "./List";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClear() {
    const confirmed = window.confirm("Are you sure you want to delete it?");
    if (confirmed) {
      setItems([]);
    }
  }

  function handleUpdateItem(id, updates) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, ...updates } : item)),
    );
  }
  console.log(items);
  return (
    <div className="app">
      <Logo />
      <InputData onAdditems={handleAddItems} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClear}
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>PACK MATE</h1>;
}
