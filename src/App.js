import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Logo from "./components/logo";
import Stats from "./components/stats";
import PackingList from "./components/packingList";
import Form from "./components/form";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
