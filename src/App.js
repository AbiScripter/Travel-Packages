import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Logo from "./components/logo";
import Stats from "./components/stats";
import PackageLists from "./components/packageLists";
import Form from "./components/form";

function App() {
  return (
    <>
      <Logo />
      <Form />
      <Packagcardists />
      <Stats />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
